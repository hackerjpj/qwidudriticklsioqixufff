const appData = { lastMapName: "", mapName: "", mapSize: [0, 0], mapRatio: 1, mapID: 1, autoRefresh: !0, refreshInterval: 10, gsTime: 0, me: [-1, -1, 0, 0], meGuid: -1, safe: [-1, -1, 0], poison: [-1, -1, 0], showingPlayers: new Map, playerFeatures: new Map, showingAPawns: new Map, apawnFeatures: new Map, showingItems: new Map, itemFeatures: new Map },
    renderMap = () => {
        for (const e of playerSource.getFeatures()) playerSource.removeFeature(e);
        for (const e of apawnSource.getFeatures()) apawnSource.removeFeature(e);
        for (const e of itemSource.getFeatures()) itemSource.removeFeature(e);
        appData.showingPlayers.clear(), appData.showingAPawns.clear(), appData.showingItems.clear(), appData.itemFeatures.clear(), appData.showingItems = new Map, showMap(locations.map);
        var e = 0;
        let a = !1;
        if (locations.localplayers.forEach(t => {
                vapp.$data.followID || (vapp.$data.followID = t.n);
                let o = t.x * appData.mapRatio,
                    r = (appData.mapSize[1] - t.y) * appData.mapRatio;
                if (3 == appData.mapID && (o += 10, r -= 20), 4 == appData.mapID && (o += 8, r -= 15), 6 == appData.mapID && (o += 48, r -= 40), e += 1, t.n == vapp.$data.followID) {
                    a = !0;
                    isInMap(o, r) && vapp.$data.followMe && (view.setCenter([o, r]), vapp.$data.followRot ? view.set("rotation", (270 - t.r) / 180 * Math.PI) : view.set("rotation", 0)), mePoint.getGeometry().setCoordinates([o, r]);
                    const e = t.r / 180 * Math.PI;
                    mePoint.set("_lineGeo", new ol.geom.LineString([
                        [o, r],
                        [o + 512 * Math.cos(e), r - 512 * Math.sin(e)]
                    ]))
                } else(t.die > 0 || t.hp > 0) && appData.showingPlayers.set(e, { loc: [o, r, 0, t.r], team: t.t, kills: t.kn, name: t.n, friend: !0, dead: 0 != t.die, health: t.hp })
            }), !a) {
            let e = locations.locpos.x * appData.mapRatio,
                a = (appData.mapSize[1] - locations.locpos.y) * appData.mapRatio;
            3 == appData.mapID && (e += 10, a -= 20), 4 == appData.mapID && (e += 8, a -= 15), 6 == appData.mapID && (e += 48, a -= 40);
            isInMap(e, a) && vapp.$data.followMe && (view.setCenter([e, a]), vapp.$data.followRot ? view.set("rotation", (270 - locations.locpos.r) / 180 * Math.PI) : view.set("rotation", 0)), mePoint.getGeometry().setCoordinates([e, a]);
            const t = locations.locpos.r / 180 * Math.PI;
            mePoint.set("_lineGeo", new ol.geom.LineString([
                [e, a],
                [e + 512 * Math.cos(t), a - 512 * Math.sin(t)]
            ]))
        }
        var t = 4;
        locations.players.forEach(e => {
            let a = e.x * appData.mapRatio,
                o = (appData.mapSize[1] - e.y) * appData.mapRatio;
            3 == appData.mapID && (a += 10, o -= 20), 4 == appData.mapID && (a += 8, o -= 15), 6 == appData.mapID && (a += 48, o -= 40), t += 1, (e.die > 0 || e.hp > 0) && appData.showingPlayers.set(t, { loc: [a, o, 0, e.r], team: e.t % 100, kills: e.kn, name: e.n, friend: !1, dead: 0 != e.die, health: e.hp })
        });
        var o = 104;
        locations.items.forEach(e => {
            let a = e.x * appData.mapRatio,
                t = (appData.mapSize[1] - e.y) * appData.mapRatio;
            if (3 == appData.mapID && (a += 10, t -= 20), 4 == appData.mapID && (a += 8, t -= 15), 6 == appData.mapID && (a += 48, t -= 40), o += 1, null != isIconFuc(e.n)) appData.showingAPawns.set(o, { loc: [a, t], T: e.n });
            else {
                let r = getItem(e.n);
                e.n = r.n, appData.showingItems.set(o, { loc: [a, t], name: e.n, color1: r.c1, color2: r.c2, color3: r.c3, color4: r.c4 })
            }
        });
        for (const e of appData.showingPlayers.entries()) {
            const a = e[0],
                t = e[1];
            let o = appData.playerFeatures.get(a);
            o || (o = new ol.Feature({ geometry: new ol.geom.Point([9e3, 9e3]) }), o.setId(a), o.setStyle(playerStyleFunc), appData.playerFeatures.set(a, o));
            const r = t.loc;
            r && (o.getGeometry().setCoordinates([r[0], r[1]]), o.set("_rotation", (r[3] + 90) / 180 * Math.PI));
            let s = "";
            if (t.die > 0 && o.set("_die", !0), t.die <= 0 && t.hp <= 0 && o.set("_hide", !0), t.friend) {
                o.get("_friend") || o.set("_friend", !0), t.name && vapp.showPlayerName && (s = t.name.substring(0, 6));
                const e = r[3] / 180 * Math.PI;
                o.set("_lineGeo", new ol.geom.LineString([
                    [r[0], r[1]],
                    [r[0] + 512 * Math.cos(e), r[1] - 512 * Math.sin(e)]
                ]))
            } else vapp.showPlayerName && (s = t.name), vapp.showTeam && (s += `<${t.team}>`), s += "\n", t.kills && (s += `???:${t.kills} |`);
            null != t.health && vapp.showHp && (s += " ???:" + Math.floor(t.health)), o.set("_label", s), playerSource.addFeature(o)
        }
        for (const e of playerSource.getFeatures()) {
            const a = e.getId();
            appData.showingPlayers.has(a) && appData.meGuid !== a || playerSource.removeFeature(e)
        }
        if (!vapp.hideAllItems) {
            for (const e of appData.showingAPawns.entries()) {
                const a = e[0],
                    t = e[1];
                let o = appData.apawnFeatures.get(a);
                o || (o = new ol.Feature({ geometry: new ol.geom.Point([9e3, 9e3]) }), o.setId(a), o.setStyle(apawnStyleFunc), appData.apawnFeatures.set(a, o)), o.set("_T", t.T), "BOX" !== t.T && "AIRDROP" !== t.T || t.MINUTE && o.set("_label", t.MINUTE.toString());
                const r = t.loc;
                r && (o.getGeometry().setCoordinates([r[0], r[1]]), o.set("_rotation", (r[3] + 90) / 360 * 6.28)), "CAR" === t.T && o.set("_label", t.driverCount ? t.driverCount.toString() : ""), apawnSource.addFeature(o)
            }
            for (const e of apawnSource.getFeatures()) {
                const a = e.getId();
                appData.showingAPawns.has(a) || apawnSource.removeFeature(e)
            }
        }
        if (!vapp.hideAllItems) {
            for (const e of appData.showingItems.entries()) {
                const a = e[0],
                    t = e[1];
                if ("" != t.name) {
                    let e = appData.itemFeatures.get(a);
                    e || (e = new ol.Feature({ geometry: new ol.geom.Point([9e3, 9e3]) }), e.setId(a), e.setStyle(itemStyleFunc), appData.itemFeatures.set(a, e)), e.set("_label", t.name), e.set("_color1", t.color1), e.set("_color2", t.color2), e.set("_color3", t.color3), e.set("_color4", t.color4);
                    const o = t.loc,
                        r = e.getGeometry(),
                        s = r.getCoordinates();
                    o[0] === s[0] && o[1] === s[1] || r.setCoordinates([o[0], o[1]]), itemSource.addFeature(e)
                }
            }
            for (const e of itemSource.getFeatures()) {
                const a = e.getId();
                appData.showingItems.has(a) || itemSource.removeFeature(e)
            }
        }
    };
vapp = new Vue({ el: "#app", data: { followID: "", gameStartTime: "", lastPacketTime: "", mapType: "", followMe: !0, showTeam: !0, showBox: !1, showAirDrop: !0, showCar: !0, showFlare: !0, showHp: !0, showPlayerName: !0, showItemTop: !0, showItemDuoDuo: !0, showItemBasic: !0, showItemAR: !1, showItemSR: !1, showItemHealth: !1, showItemThrow: !1, showItemAmmo: !1, showItemAll: !1, hideAllItems: !1, followRot: !0, showBack: !1, showArmor2: !1, showHead2: !1, showArmor3: !0, showHead3: !0, showFirstAid: !1, showMedKit: !0, showDrink: !1, showGrenade: !1, showJerryCan: !1, showSmokeBomb: !1, showAmmo556: !1, showAmmo762: !1, jiuyuanqi: !1, showForeGrip: !1, showLowST: !1, showHighST: !1, showARCnFH: !1, showARSuppressor: !1, showARExtended: !1, showARStock: !1, showSRFlashHider: !1, chuchanqi: !0, showSRSuppressor: !0, showSRExtended: !1, showSRStock: !1, showPan: !1, showM16A4: !1, showSCAR: !1, showM416: !1, showQBZ: !1, showG36C: !1, showAUG: !1, showAK47: !1, showM762: !1, showGroza: !1, showMini14: !1, showQbu88: !1, showSKS: !1, showMk47: !1, showFnf: !1, showAwm: !0, showM24: !0, showKar98k: !0, showM249: !0, showDP28: !1,guanzhan1: !0,guanzhan2: !0,guanzhan3: !0,guanzhan4: !0,guanzhan5: !0,guanzhan6: !0,guanzhan7: !0,guanzhan8: !0,guanzhan9: !0,guanzhan10: !0, nowFps: "", toggleButtonText: "????????????" }, methods: { toggleRefresh() { appData.autoRefresh ? (appData.autoRefresh = !1, this.toggleButtonText = "Start Refresh") : (appData.autoRefresh = !0, this.toggleButtonText = " Stop Refresh") }, setFPS(e) { appData.refreshInterval = Math.floor(1e3 / e) }, showNoItems() { this.showItemAll = this.showItemDuoDuo = this.showItemTop = this.showItemBasic = this.showItemAR = this.showItemSR = this.showItemHealth = this.showItemThrow = this.showItemAmmo = this.showItemAll = !1 } } });
const projection = ol.proj.get("EPSG:21781");

function getMapSource(e) {
    switch (e) {
        case "erangel":
            mapPath = "erangel/v20";
            break;
        case "miramar":
            mapPath = "miramar/v14";
            break;
        case "savage":
            mapPath = "savage/v10";
            break;
        case "vikendi":
            mapPath = "vikendi/v2";
            break;
        case "karakin":
            mapPath = "karakin/v2";
            break;
        case "Tiger_Main":
            mapPath = "xditu/v10";
            break;            
        case "Heaven_Main":
            mapPath = "hewan/v8";
            break;            
        case "Range_Main":
            mapPath = "xlc/v1";
            break;            
        case "Deston_Main":
            mapPath = "Deston/v6";
            break;            
        case "chimera":
            mapPath = "chimera/v1"
    }
    let a = !1;
    getQueryVariable("maptype") && (a = !1), "karakin" == e && (a = !1);
    const t = a ? "../maptiles" : "https://qinaide3.oss-cn-beijing.aliyuncs.com/map";
    return new ol.source.XYZ({ url: `${t}/${mapPath}/{z}/{x}/{y}.png`, wrapX: !1, minZoom: 1, maxZoom: a ? 3 : 4, projection: projection })
}

function getQueryVariable(e) { for (var a = window.location.search.substring(1).split("&"), t = 0; t < a.length; t++) { var o = a[t].split("="); if (o[0] == e) return o[1] } return !1 } projection.setExtent([0, 0, 8192, 8192]);
const view = new ol.View({ center: [4096, 4096], zoom: 4, minZoom: 1, maxZoom: 10, projection: projection }),
    map = new ol.Map({ controls: ol.control.defaults({ attribution: !1 }).extend([new ol.control.ScaleLine({ units: "metric" })]), loadTilesWhileAnimating: !0, loadTilesWhileInteracting: !0, view: view, target: "map" }),
    erangelMapLayer = new ol.layer.Tile({ source: getMapSource("erangel") }),
    miramarMapLayer = new ol.layer.Tile({ source: getMapSource("miramar") }),
    savageMapLayer = new ol.layer.Tile({ source: getMapSource("savage") }),
    vikendiMapLayer = new ol.layer.Tile({ source: getMapSource("vikendi") }),
    karakinMapLayer = new ol.layer.Tile({ source: getMapSource("karakin") }),
    Tiger_Main = new ol.layer.Tile({ source: getMapSource("Tiger_Main") }),
    Range_Main = new ol.layer.Tile({ source: getMapSource("Range_Main") }),
    Deston_Main = new ol.layer.Tile({ source: getMapSource("Deston_Main") }),
    Heaven_Main = new ol.layer.Tile({ source: getMapSource("Heaven_Main") }),    
    chimeraMapLayer = new ol.layer.Tile({ source: getMapSource("chimera") });
erangelMapLayer.setVisible(!1), miramarMapLayer.setVisible(!1), savageMapLayer.setVisible(!1), vikendiMapLayer.setVisible(!1), karakinMapLayer.setVisible(!1), chimeraMapLayer.setVisible(!1), Tiger_Main.setVisible(!1),Range_Main.setVisible(!1),Deston_Main.setVisible(!1),Heaven_Main.setVisible(!1), erangelMapLayer.setZIndex(0), miramarMapLayer.setZIndex(0), savageMapLayer.setZIndex(0), vikendiMapLayer.setZIndex(0), karakinMapLayer.setZIndex(0), chimeraMapLayer.setZIndex(0), Tiger_Main.setZIndex(0), Range_Main.setZIndex(0), Deston_Main.setZIndex(0), Heaven_Main.setZIndex(0), map.addLayer(erangelMapLayer), map.addLayer(miramarMapLayer), map.addLayer(savageMapLayer), map.addLayer(vikendiMapLayer), map.addLayer(karakinMapLayer), map.addLayer(Tiger_Main), map.addLayer(Heaven_Main), map.addLayer(Deston_Main), map.addLayer(Range_Main), map.addLayer(chimeraMapLayer);
const gridSource = new ol.source.Vector({ wrapX: !1 }),
    majorLineStyle = new ol.style.Style({ stroke: new ol.style.Stroke({ color: [255, 255, 0, .6] }) }),
    minorLineStyle = new ol.style.Style({ stroke: new ol.style.Stroke({ color: [204, 204, 204, .4] }) }),
    gridLayer = new ol.layer.Vector({ source: gridSource });
for (let e = 0; e <= 7; e++) {
    const a = new ol.Feature({
            geometry: new ol.geom.LineString([
                [1024 * e, 0],
                [1024 * e, 8192]
            ])
        }),
        t = new ol.Feature({
            geometry: new ol.geom.LineString([
                [0, 1024 * e],
                [8192, 1024 * e]
            ])
        });
    a.setStyle(majorLineStyle), t.setStyle(majorLineStyle), gridSource.addFeature(t), gridSource.addFeature(a);
    for (let a = 1; a <= 9; a++) {
        const t = new ol.Feature({
            geometry: new ol.geom.LineString([
                [1024 * e + 102.4 * a, 0],
                [1024 * e + 102.4 * a, 8192]
            ])
        });
        t.setStyle(minorLineStyle), gridSource.addFeature(t);
        const o = new ol.Feature({
            geometry: new ol.geom.LineString([
                [0, 1024 * e + 102.4 * a],
                [8192, 1024 * e + 102.4 * a]
            ])
        });
        o.setStyle(minorLineStyle), gridSource.addFeature(o)
    }
}
const zoneStyleFunc = function(e) { return [new ol.style.Style({ fill: new ol.style.Fill({ color: [0, 0, 0, 0] }), stroke: new ol.style.Stroke({ color: this.get("_color"), width: 1.5 }) })] },
    safeCircle = new ol.Feature({ geometry: new ol.geom.Circle([-1, -1], 100) });
safeCircle.setId("safe"), safeCircle.set("_color", "rgba(255,255,255,0.9)"), safeCircle.setStyle(zoneStyleFunc), gridSource.addFeature(safeCircle);
const poisonCircle = new ol.Feature({ geometry: new ol.geom.Circle([-1, -1], 0) });
poisonCircle.setId("poison"), poisonCircle.set("_color", "rgba(0,0,255,0.9)"), poisonCircle.setStyle(zoneStyleFunc), gridSource.addFeature(poisonCircle), gridLayer.setZIndex(1), map.addLayer(gridLayer);
const itemSource = new ol.source.Vector({ wrapX: !1 });
var itemLayer = new ol.layer.Vector({ source: itemSource });
itemLayer.setZIndex(6), map.addLayer(itemLayer);
const apawnSource = new ol.source.Vector({ wrapX: !1 });
var apawnLayer = new ol.layer.Vector({ source: apawnSource });
apawnLayer.setZIndex(5), map.addLayer(apawnLayer);
const playerSource = new ol.source.Vector({ wrapX: !1 });
var playerLayer = new ol.layer.Vector({ source: playerSource });
playerLayer.setZIndex(7), map.addLayer(playerLayer);
const meSource = new ol.source.Vector({ wrapX: !1 });
var meLayer = new ol.layer.Vector({ source: meSource });
const mePoint = new ol.Feature({ geometry: new ol.geom.Point([appData.me[0], appData.me[1]]) });
mePoint.setId("me"), mePoint.set("_radius", 6);
const meStyleFunc = function(e) { const a = [new ol.style.Style({ image: new ol.style.Circle({ radius: this.get("_radius"), fill: new ol.style.Fill({ color: "rgba(255,255,255,1)" }), stroke: new ol.style.Stroke({ width: this.get("_radius") - 1, color: "rgba(239,108,0,1)" }) }) })]; return this.get("_lineGeo") && a.push(new ol.style.Style({ geometry: this.get("_lineGeo"), stroke: new ol.style.Stroke({ color: "rgba(239,108,0,0.8)", width: 2.2 }) })), a };
mePoint.setStyle(meStyleFunc), meLayer.getSource().addFeature(mePoint), meLayer.setZIndex(8), map.addLayer(meLayer);
const itemStyleFunc = function(e) { return [new ol.style.Style({ image: new ol.style.Circle({ radius: 3, fill: new ol.style.Fill({ color: this.get("_color1") || "rgba(0,255,0,1)" }), stroke: new ol.style.Stroke({ color: this.get("_color2") || "rgba(0,0,255,0.8)", width: 1.5 }) }), text: new ol.style.Text({ font: "bold 14px Calibri,sans-serif", textAlign: "center", fill: new ol.style.Fill({ color: this.get("_color3") || "rgba(239,108,0,1)" }), text: this.get("_label") || "", offsetY: 12, stroke: new ol.style.Stroke({ color: this.get("_color4") || "rgba(255,255,255,1)", width: 2 }) }) })] },
    apawnStyleFunc = function(e) {
        let a = this.get("_T"),
            t = isIconFuc(a);
        return [new ol.style.Style({ image: new ol.style.Icon({ img: t, imgSize: [32, 32], scale: 1.5, rotation: this.get("_rotation") || 0 }), text: new ol.style.Text({ font: "12px Calibri,sans-serif", textAlign: "center", fill: new ol.style.Fill({ color: this.get("_color") || "rgba(255,255,255,0.9)" }), text: this.get("_label") || "", offsetY: 15 }) })]
    },
    playerStyleFunc = function(e) { if (this.get("_hide")) return null; const a = [new ol.style.Style({ image: new ol.style.Icon({ img: this.get("_friend") ? friendSvgImg : this.get("_die") ? dieSvgImg : playerSvgImg, imgSize: [16, 16], scale: 1, rotation: this.get("_rotation") || 0 }), text: new ol.style.Text({ font: "12px Calibri,sans-serif", textAlign: "center", fill: new ol.style.Fill({ color: this.get("_color") || "rgba(255,255,255,1)" }), text: this.get("_label") || "", offsetY: 15 }) })]; return this.get("_friend") && this.get("_lineGeo") && a.push(new ol.style.Style({ geometry: this.get("_lineGeo"), stroke: new ol.style.Stroke({ color: "#FFFFFFFF", width: 1.8 }) })), a };
window.addEventListener("keyup", e => { 187 == e.keyCode && view.setZoom(view.getZoom() + 1), 189 == e.keyCode && view.setZoom(view.getZoom() - 1) });
const showMap = (e = appData.mapName) => {
        if (appData.lastMapName != e) switch (appData.mapName = e, appData.lastMapName = e, console.log("Map Name Is ", appData.mapName), appData.mapName) {
            case "miramar":
                miramarMapLayer.setVisible(!0), erangelMapLayer.setVisible(!1), savageMapLayer.setVisible(!1), vikendiMapLayer.setVisible(!1), karakinMapLayer.setVisible(!1), chimeraMapLayer.setVisible(!1), Range_Main.setVisible(!1), Deston_Main.setVisible(!1), Heaven_Main.setVisible(!1), Tiger_Main.setVisible(!1), appData.mapSize = [8192, 8192], appData.mapRatio = 1, appData.mapID = 1;
                break;
            case "Tiger_Main":
                miramarMapLayer.setVisible(!1), erangelMapLayer.setVisible(!1), savageMapLayer.setVisible(!1), vikendiMapLayer.setVisible(!1), karakinMapLayer.setVisible(!1), chimeraMapLayer.setVisible(!1), Range_Main.setVisible(!1), Deston_Main.setVisible(!1), Heaven_Main.setVisible(!1), Tiger_Main.setVisible(!0), appData.mapSize = [8192, 8192], appData.mapRatio = 1, appData.mapID = 7;
                break;                
            case "Heaven_Main":
                miramarMapLayer.setVisible(!1), erangelMapLayer.setVisible(!1), savageMapLayer.setVisible(!1), vikendiMapLayer.setVisible(!1), karakinMapLayer.setVisible(!1), chimeraMapLayer.setVisible(!1), Range_Main.setVisible(!1), Deston_Main.setVisible(!1), Heaven_Main.setVisible(!0), Tiger_Main.setVisible(!1), appData.mapSize = [1024, 1024], appData.mapRatio = 8, appData.mapID = 9;
                break;  
            case "Deston_Main":
                miramarMapLayer.setVisible(!1), erangelMapLayer.setVisible(!1), savageMapLayer.setVisible(!1), vikendiMapLayer.setVisible(!1), karakinMapLayer.setVisible(!1), chimeraMapLayer.setVisible(!1), Range_Main.setVisible(!1), Heaven_Main.setVisible(!1), Tiger_Main.setVisible(!1), Deston_Main.setVisible(!0), appData.mapSize = [8192, 8192], appData.mapRatio = 1, appData.mapID = 10;
                break;  
            case "Range_Main":
                miramarMapLayer.setVisible(!1), erangelMapLayer.setVisible(!1), savageMapLayer.setVisible(!1), vikendiMapLayer.setVisible(!1), karakinMapLayer.setVisible(!1), chimeraMapLayer.setVisible(!1), Range_Main.setVisible(!0), Heaven_Main.setVisible(!1), Deston_Main.setVisible(!1), Tiger_Main.setVisible(!1), appData.mapSize = [2048, 2048], appData.mapRatio = 4, appData.mapID = 8;
                break;                
            case "erangel":
                miramarMapLayer.setVisible(!1), erangelMapLayer.setVisible(!0), savageMapLayer.setVisible(!1), vikendiMapLayer.setVisible(!1), karakinMapLayer.setVisible(!1), chimeraMapLayer.setVisible(!1), Range_Main.setVisible(!1), Heaven_Main.setVisible(!1), Deston_Main.setVisible(!1), Tiger_Main.setVisible(!1), appData.mapSize = [8192, 8192], appData.mapRatio = 1, appData.mapID = 2;
                break;
            case "savage":
                miramarMapLayer.setVisible(!1), erangelMapLayer.setVisible(!1), savageMapLayer.setVisible(!0), vikendiMapLayer.setVisible(!1), karakinMapLayer.setVisible(!1), chimeraMapLayer.setVisible(!1), Heaven_Main.setVisible(!1), Range_Main.setVisible(!1), Deston_Main.setVisible(!1), Tiger_Main.setVisible(!1), appData.mapSize = [4096, 4096], appData.mapRatio = 2, appData.mapID = 3;
                break;
            case "vikendi":
                miramarMapLayer.setVisible(!1), erangelMapLayer.setVisible(!1), savageMapLayer.setVisible(!1), vikendiMapLayer.setVisible(!0), karakinMapLayer.setVisible(!1), chimeraMapLayer.setVisible(!1), Heaven_Main.setVisible(!1), Range_Main.setVisible(!1), Deston_Main.setVisible(!1), Tiger_Main.setVisible(!1), appData.mapSize = [6144, 6144], appData.mapRatio = 1.333333333, appData.mapID = 4;
                break;
            case "karakin":
                miramarMapLayer.setVisible(!1), erangelMapLayer.setVisible(!1), savageMapLayer.setVisible(!1), vikendiMapLayer.setVisible(!1), karakinMapLayer.setVisible(!0), chimeraMapLayer.setVisible(!1), Heaven_Main.setVisible(!1), Range_Main.setVisible(!1), Deston_Main.setVisible(!1), Tiger_Main.setVisible(!1), appData.mapSize = [2048, 2048], appData.mapRatio = 4, appData.mapID = 5;
                break;
            case "chimera":
                miramarMapLayer.setVisible(!1), erangelMapLayer.setVisible(!1), savageMapLayer.setVisible(!1), vikendiMapLayer.setVisible(!1), karakinMapLayer.setVisible(!1), chimeraMapLayer.setVisible(!0), Heaven_Main.setVisible(!1), Range_Main.setVisible(!1), Deston_Main.setVisible(!1), Tiger_Main.setVisible(!1), appData.mapSize = [3096, 3096], appData.mapRatio = 8192 / 3096, appData.mapID = 6
        }
    },
    isInMap = (e, a) => e <= 8192 && e >= 0 && a <= 8192 && a >= 0;