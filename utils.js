var Utils = {
    getParameterByName: function(a) {
        var e = window.location.href;
        a = a.replace(/[\[\]]/g, "\\$&");
        var _ = new RegExp("[?&]" + a + "(=([^&#]*)|&|#|$)").exec(e);
        return _ ? _[2] ? decodeURIComponent(_[2].replace(/\+/g, " ")) : "" : null
    },
    MinsCounter: function() {
        var a = function() {
            this.count = 0,
            this.last = 0,
            setInterval(function() {
                this.last = this.count,
                this.count = 0
            }
            .bind(this), 1e3)
        };
        return a.prototype.getPerSec = function() {
            return this.last
        }
        ,
        a.prototype.update = function() {
            this.count++
        }
        ,
        new a
    }
};
function randomString(a) {
    a = a || 32;
    var e = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678"
      , _ = e.length
      , r = "";
    for (i = 0; i < a; i++)
        r += e.charAt(Math.floor(Math.random() * _));
    return r
}
function getItem(a) {
    let e = new Object;
    switch (a) {
    case "Item_Head_F_01_Lv2_C":
    case "Head_F_02_Lv2_C":
    case "SXRlbV9IZWFkX0ZfMDFfTHYyX0M=":
    case "SGVhZF9GXzAyX0x2Ml9D":    
        e.n = vapp.showHead2 ? "二级头" : "",
        e.c3 = "rgba(218,112,214,1)";
        break;
    case "Item_Back_F_01_Lv2_C":
    case "Back_F_02_Lv2_C":
    case "SXRlbV9CYWNrX0ZfMDFfTHYyX0M=":
    case "QmFja19GXzAyX0x2Ml9D":    
        e.n = vapp.showBack ? "二级包" : "",
        e.c3 = "rgba(34,139,34,1)";
        break;
    case "Item_Armor_D_01_Lv2_C":
    case "SXRlbV9Bcm1vcl9EXzAxX0x2Ml9D":    
        e.n = vapp.showArmor2 ? "二级甲" : "",
        e.c3 = "rgba(34,139,34,1)";
        break;
    case "Item_Weapon_AK47_C":
    case "Weapon_AK47_C":
    case "SXRlbV9XZWFwb25fQUs0N19D":
    case "V2VhcG9uX0FLNDdfQw==":    
        e.n = vapp.showAK47 ? "Ak47" : "",
        e.c3 = "rgba(218,112,214,1)";
        break;
    case "Item_Weapon_HK416_C":
    case "Weapon_HK416_C":
    case "SXRlbV9XZWFwb25fSEs0MTZfQw==":
    case "V2VhcG9uX0hLNDE2X0M=":    
        e.n = vapp.showM416 ? "M416" : "",
        e.c3 = "rgba(218,112,214,1)";
        break;
    case "Item_Weapon_M16A4_C":
    case "Weapon_M16A4_C":
    case "SXRlbV9XZWFwb25fTTE2QTRfQw==":
    case "V2VhcG9uX00xNkE0X0M=":    
        e.n = vapp.showM16A4 ? "M16A4" : "",
        e.c3 = "rgba(34,139,34,1)";
        break;
    case "Item_Weapon_SCAR-L_C":
    case "Weapon_SCAR-L_C":
    case "SXRlbV9XZWFwb25fU0NBUi1MX0M=":
    case "V2VhcG9uX1NDQVItTF9D":    
        e.n = vapp.showSCAR ? "SCAR-L" : "",
        e.c3 = "rgba(218,112,214,1)";
        break;
    case "Item_Weapon_Kar98k_C":
    case "Weapon_Kar98k_C":
    case "SXRlbV9XZWFwb25fS2FyOThrX0M=":
    case "V2VhcG9uX0thcjk4a19D":    
        e.n = vapp.showKar98k ? "98k" : "",
        e.c3 = "rgba(218,112,214,1)";
        break;
    case "Item_Weapon_Mini14_C":
    case "Weapon_Mini14_C":
    case "SXRlbV9XZWFwb25fTWluaTE0X0M=":
    case "V2VhcG9uX01pbmkxNF9D":    
        e.n = vapp.showMini14 ? "Mini14" : "",
        e.c3 = "rgba(34,139,34,1)";
        break;
    case "Item_Weapon_SKS_C":
    case "Weapon_SKS_C":
    case "SXRlbV9XZWFwb25fU0tTX0M=":
    case "V2VhcG9uX1NLU19D":    
        e.n = vapp.showSKS ? "SKS" : "",
        e.c3 = "rgba(218,112,214,1)";
        break;
    case "Item_Weapon_M24_C":
    case "Weapon_M24_C":
    case "SXRlbV9XZWFwb25fTTI0X0M=":
    case "V2VhcG9uX00yNF9D":    
        e.n = vapp.showM24 ? "M24" : "",
        e.c3 = "rgba(218,112,214,1)";
        break;
    case "Item_Weapon_QBZ95_C":
    case "Weapon_QBZ95_C":
    case "SXRlbV9XZWFwb25fUUJaOTVfQw==":
    case "V2VhcG9uX1FCWjk1X0M=":    
        e.n = vapp.showQBZ ? "QBZ95" : "",
        e.c3 = "rgba(34,139,34,1)";
        break;
    case "Item_Weapon_G36C_C":
    case "Weapon_G36C_C":
    case "SXRlbV9XZWFwb25fRzM2Q19D":
    case "V2VhcG9uX0czNkNfQw==":    
        e.n = vapp.showg36C ? "G36C" : "",
        e.c3 = "rgba(34,139,34,1)";
        break;
    case "Item_Weapon_FNFal_C":
    case "Weapon_FNFal_C":
    case "SXRlbV9XZWFwb25fRk5GYWxfQw==":
    case "V2VhcG9uX0ZORmFsX0M=":    
        e.n = vapp.showFnf ? "自动填充步枪" : "",
        e.c3 = "rgba(34,139,34,1)";
        break;
    case "Item_Weapon_Mk47Mutant_C":
    case "Weapon_Mk47Mutant_C":
    case "SXRlbV9XZWFwb25fTWs0N011dGFudF9D":
    case "V2VhcG9uX01rNDdNdXRhbnRfQw==":    
        e.n = vapp.showMk47 ? "Mk47" : "",
        e.c3 = "rgba(34,139,34,1)";
        break;
    case "Item_Weapon_BerylM762_C":
    case "Weapon_BerylM762_C":
    case "SXRlbV9XZWFwb25fQmVyeWxNNzYyX0M=":
    case "V2VhcG9uX0JlcnlsTTc2Ml9D":    
        e.n = vapp.showM762 ? "M762" : "",
        e.c3 = "rgba(34,139,34,1)";
        break;
    case "Item_Weapon_QBU88_C":
    case "Weapon_QBU88_C":
    case "SXRlbV9XZWFwb25fUUJVODhfQw==":
    case "V2VhcG9uX1FCVTg4X0M=":    
        e.n = vapp.showQbu88 ? "QBU88" : "",
        e.c3 = "rgba(34,139,34,1)";
        break;
    case "Item_Weapon_AUG_C":
    case "Weapon_AUG_C":
    case "SXRlbV9XZWFwb25fQVVHX0M=":
    case "V2VhcG9uX0FVR19D":    
        e.n = vapp.showAUG ? "AUG" : "",
        e.c3 = "rgba(218,112,214,1)";
        break;
    case "Item_Weapon_AWM_C":
    case "Weapon_AWM_C":
    case "SXRlbV9XZWFwb25fQVdNX0M=":
    case "V2VhcG9uX0FXTV9D":    
        e.n = vapp.showAwm ? "Awm" : "",
        e.c3 = "rgba(218,112,214,1)";
        break;
    case "Item_Weapon_Groza_C":
    case "Weapon_Groza_C":
    case "SXRlbV9XZWFwb25fR3JvemFfQw==":
    case "V2VhcG9uX0dyb3phX0M=":    
        e.c3 = "rgba(34,139,34,1)",
        e.n = vapp.showGroza ? "Groza" : "";
        break;
    case "Item_Weapon_M249_C":
    case "Weapon_M249_C":
    case "SXRlbV9XZWFwb25fTTI0OV9D":
    case "V2VhcG9uX00yNDlfQw==":    
        e.n = vapp.showM249 ? "M249" : "",
        e.c3 = "rgba(218,112,214,1)";
        break;
    case "Item_Weapon_DP28_C":
    case "SXRlbV9XZWFwb25fRFAyOF9D":    
        e.n = vapp.showDP28 ? "DP28" : "",
        e.c3 = "rgba(34,139,34,1)";
        break;
    case "Item_Weapon_Pan_C":
    case "Weapon_Pan_C":
    case "SXRlbV9XZWFwb25fUGFuX0M=":
    case "V2VhcG9uX1Bhbl9D":    
        e.c3 = "rgba(255,160,122,1)",
        e.n = vapp.showPan ? "平底锅" : "";
        break;
    case "Item_Attach_Weapon_Magazine_ExtendedQuickDraw_Large_C":
    case "Attach_Weapon_Magazine_ExtendedQuickDraw_Large_C":
    case "SXRlbV9BdHRhY2hfV2VhcG9uX01hZ2F6aW5lX0V4dGVuZGVkUXVpY2tEcmF3X0xhcmdlX0M=":
    case "QXR0YWNoX1dlYXBvbl9NYWdhemluZV9FeHRlbmRlZFF1aWNrRHJhd19MYXJnZV9D":    
        e.n = vapp.showARExtended ? "步快扩" : "";
        break;
    case "Item_Attach_Weapon_Magazine_Extended_Large_C":
    case "Attach_Weapon_Magazine_Extended_Large_C":
    case "SXRlbV9BdHRhY2hfV2VhcG9uX01hZ2F6aW5lX0V4dGVuZGVkX0xhcmdlX0M=":
    case "QXR0YWNoX1dlYXBvbl9NYWdhemluZV9FeHRlbmRlZF9MYXJnZV9D":    
        e.n = vapp.showARExtended ? "步扩容" : "";
        break;
    case "Item_Attach_Weapon_Magazine_ExtendedQuickDraw_SniperRifle_C":
    case "Attach_Weapon_Magazine_ExtendedQuickDraw_SniperRifle_C":
    case "SXRlbV9BdHRhY2hfV2VhcG9uX01hZ2F6aW5lX0V4dGVuZGVkUXVpY2tEcmF3X1NuaXBlclJpZmxlX0M=":
    case "QXR0YWNoX1dlYXBvbl9NYWdhemluZV9FeHRlbmRlZFF1aWNrRHJhd19TbmlwZXJSaWZsZV9D":    
        e.n = vapp.showSRExtended ? "狙快扩" : "";
        break;
    case "Item_Attach_Weapon_Magazine_Extended_SniperRifle_C":
    case "Attach_Weapon_Magazine_Extended_SniperRifle_C":
    case "SXRlbV9BdHRhY2hfV2VhcG9uX01hZ2F6aW5lX0V4dGVuZGVkX1NuaXBlclJpZmxlX0M=":
    case "QXR0YWNoX1dlYXBvbl9NYWdhemluZV9FeHRlbmRlZF9TbmlwZXJSaWZsZV9D":    
        e.n = vapp.showSRExtended ? "狙扩容" : "";
        break;
    case "Item_Attach_Weapon_Muzzle_Suppressor_Large_C":
    case "Attach_Weapon_Muzzle_Suppressor_Large_C":
    case "U1hSbGJWOUJkSFJoWTJoZlYyVmhjRzl1WDAxMWVucHNaVjlUZFhCd2NtVnpjMjl5WDB4aGNtZGxYME09":
    case "UVhSMFlXTm9YMWRsWVhCdmJsOU5kWHA2YkdWZlUzVndjSEpsYzNOdmNsOU1ZWEpuWlY5RA==":    
        e.c3 = "rgba(218,112,214,1)",
        e.n = vapp.showARSuppressor ? "步消音" : "";
        break;
    case "Item_Attach_Weapon_Muzzle_Suppressor_SniperRifle_C":
    case "Attach_Weapon_Muzzle_Suppressor_SniperRifle_C":
    case "SXRlbV9BdHRhY2hfV2VhcG9uX011enpsZV9TdXBwcmVzc29yX1NuaXBlclJpZmxlX0M=":
    case "QXR0YWNoX1dlYXBvbl9NdXp6bGVfU3VwcHJlc3Nvcl9TbmlwZXJSaWZsZV9D":    
        e.c3 = "rgba(218,112,214,1)",
        e.n = vapp.showSRSuppressor ? "狙消音" : "";
        break;
    case "Item_Attach_Weapon_Stock_SniperRifle_CheekPad_C":
    case "Attach_Weapon_Stock_SniperRifle_CheekPad_C":
    case "SXRlbV9BdHRhY2hfV2VhcG9uX1N0b2NrX1NuaXBlclJpZmxlX0NoZWVrUGFkX0M=":
    case "QXR0YWNoX1dlYXBvbl9TdG9ja19TbmlwZXJSaWZsZV9DaGVla1BhZF9D":    
        e.n = vapp.showSRStock ? "托腮板" : "";
        break;
    case "Item_Attach_Weapon_Stock_SniperRifle_BulletLoops_C":
    case "Attach_Weapon_Stock_SniperRifle_BulletLoops_C":
    case "SXRlbV9BdHRhY2hfV2VhcG9uX1N0b2NrX1NuaXBlclJpZmxlX0J1bGxldExvb3BzX0M=":
    case "QXR0YWNoX1dlYXBvbl9TdG9ja19TbmlwZXJSaWZsZV9CdWxsZXRMb29wc19D":    
        e.n = vapp.showSRStock ? "子弹袋" : "";
        break;
    case "Item_Attach_Weapon_Muzzle_Compensator_Large_C":
    case "Attach_Weapon_Muzzle_Compensator_Large_C":
    case "SXRlbV9BdHRhY2hfV2VhcG9uX011enpsZV9Db21wZW5zYXRvcl9MYXJnZV9D":
    case "QXR0YWNoX1dlYXBvbl9NdXp6bGVfQ29tcGVuc2F0b3JfTGFyZ2VfQw==":    
        e.n = vapp.showARCnFH ? "步补偿" : "";
        break;
    case "Item_Attach_Weapon_Muzzle_Compensator_SniperRifle_C":
    case "Attach_Weapon_Muzzle_Compensator_SniperRifle_C":
    case "SXRlbV9BdHRhY2hfV2VhcG9uX011enpsZV9Db21wZW5zYXRvcl9TbmlwZXJSaWZsZV9D":
    case "QXR0YWNoX1dlYXBvbl9NdXp6bGVfQ29tcGVuc2F0b3JfU25pcGVyUmlmbGVfQw==":    
        e.n = vapp.showSRFlashHider ? "狙补偿" : "";
        break;
    case "Item_Attach_Weapon_Upper_DotSight_01_C":
    case "SXRlbV9BdHRhY2hfV2VhcG9uX1VwcGVyX0RvdFNpZ2h0XzAxX0M=":    
        e.n = vapp.showLowST ? "红点瞄" : "";
        break;
    case "Item_Attach_Weapon_Upper_Holosight_C":
    case "SXRlbV9BdHRhY2hfV2VhcG9uX1VwcGVyX0hvbG9zaWdodF9D":    
        e.n = vapp.showLowST ? "全息瞄" : "";
        break;
    case "Item_Attach_Weapon_Upper_Scope3x_C":
    case "SXRlbV9BdHRhY2hfV2VhcG9uX1VwcGVyX1Njb3BlM3hfQw==":    
        e.n = vapp.showLowST ? "3倍镜" : "";
        break;
    case "Item_Attach_Weapon_Lower_Foregrip_C":
    case "Attach_Weapon_Lower_Foregrip_C":
    case "SXRlbV9BdHRhY2hfV2VhcG9uX0xvd2VyX0ZvcmVncmlwX0M=":
    case "QXR0YWNoX1dlYXBvbl9Mb3dlcl9Gb3JlZ3JpcF9D":    
        e.n = vapp.showForeGrip ? "垂直握把" : "";
        break;
    case "Item_Attach_Weapon_Lower_LightweightForeGrip_C":
    case "Attach_Weapon_Lower_LightweightForeGrip_C":
    case "SXRlbV9BdHRhY2hfV2VhcG9uX0xvd2VyX0xpZ2h0d2VpZ2h0Rm9yZUdyaXBfQw==":
    case "QXR0YWNoX1dlYXBvbl9Mb3dlcl9MaWdodHdlaWdodEZvcmVHcmlwX0M=":    
        e.n = vapp.showForeGrip ? "轻型握把" : "";
        break;
    case "Item_Attach_Weapon_Lower_HalfGrip_C":
    case "Attach_Weapon_Lower_HalfGrip_C":
    case "SXRlbV9BdHRhY2hfV2VhcG9uX0xvd2VyX0hhbGZHcmlwX0M=":
    case "QXR0YWNoX1dlYXBvbl9Mb3dlcl9IYWxmR3JpcF9D":    
        e.n = vapp.showForeGrip ? "半截握把" : "";
        break;
    case "Item_Attach_Weapon_Lower_ThumbGrip_C":
    case "Attach_Weapon_Lower_ThumbGrip_C":
    case "SXRlbV9BdHRhY2hfV2VhcG9uX0xvd2VyX1RodW1iR3JpcF9D":
    case "QXR0YWNoX1dlYXBvbl9Mb3dlcl9UaHVtYkdyaXBfQw==":    
        e.n = vapp.showForeGrip ? "拇指握把" : "";
        break;
    case "Item_Attach_Weapon_Stock_AR_Composite_C":
    case "Attach_Weapon_Stock_AR_Composite_C":
    case "Item_Attach_Weapon_Stock_AR_Composite_C":
    case "Attach_Weapon_Stock_AR_Composite_C":     
        e.n = vapp.showARStock ? "枪托" : "";
        break;
    case "Item_Heal_FirstAid_C":
    case "Heal_FirstAid_C":
    case "SXRlbV9IZWFsX0ZpcnN0QWlkX0M=":
    case "SGVhbF9GaXJzdEFpZF9D":    
        e.n = vapp.showFirstAid ? "急救包" : "",
        e.c3 = "rgba(255,215,0,1)";
        break;
    case "Item_Heal_MedKit_C":
    case "Heal_MedKit_C":
    case "SXRlbV9IZWFsX01lZEtpdF9D":
    case "SGVhbF9NZWRLaXRfQw==":    
        e.n = vapp.showMedKit ? "医疗箱" : "",
        e.c3 = "rgba(218,112,214,1)";
        break;
    case "Item_Boost_AdrenalineSyringe_C":
    case "Boost_AdrenalineSyringe_C":
    case "SXRlbV9Cb29zdF9BZHJlbmFsaW5lU3lyaW5nZV9D":
    case "Qm9vc3RfQWRyZW5hbGluZVN5cmluZ2VfQw==":    
        e.n = vapp.showDrink ? "肾上腺素" : "",
        e.c3 = "rgba(218,112,214,1)";
        break;
    case "Item_Boost_EnergyDrink_C":
    case "Boost_EnergyDrink_C":
    case "SXRlbV9Cb29zdF9FbmVyZ3lEcmlua19D":
    case "Qm9vc3RfRW5lcmd5RHJpbmtfQw==":    
        e.n = vapp.showDrink ? "能量饮料" : "",
        e.c3 = "rgba(255,215,0,1)";
        break;
    case "Item_Boost_PainKiller_C":
    case "Boost_PainKiller_C":
    case "SXRlbV9Cb29zdF9QYWluS2lsbGVyX0M=":
    case "Qm9vc3RfUGFpbktpbGxlcl9D":    
        e.n = vapp.showDrink ? "止痛药" : "",
        e.c3 = "rgba(255,215,0,1)";
        break;
    case "Item_JerryCan_C":
    case "JerryCan_C":
    case "SXRlbV9KZXJyeUNhbl9D":
    case "SmVycnlDYW5fQw==":    
        e.n = vapp.showJerryCan ? "汽油桶" : "",
        e.c3 = "rgba(255,215,0,1)";
        break;
    case "Item_Weapon_Grenade_C":
    case "Weapon_Grenade_C":
    case "SXRlbV9XZWFwb25fR3JlbmFkZV9D":
    case "V2VhcG9uX0dyZW5hZGVfQw==":    
        e.n = vapp.showGrenade ? "手雷" : "",
        e.c3 = "rgba(255,160,122,1)";
        break;
    case "Item_Weapon_StickyGrenade_C":
    case "Weapon_StickyGrenade_C":
    case "SXRlbV9XZWFwb25fU3RpY2t5R3JlbmFkZV9D":
    case "V2VhcG9uX1N0aWNreUdyZW5hZGVfQw==":    
        e.n = vapp.showGrenade ? "黏性炸弹" : "",
        e.c3 = "rgba(255,160,122,1)";
        break;
    case "Item_Weapon_SmokeBomb_C":
    case "Weapon_SmokeBomb_C":
    case "SXRlbV9XZWFwb25fU21va2VCb21iX0M=":
    case "V2VhcG9uX1Ntb2tlQm9tYl9D":    
        e.n = vapp.showSmokeBomb ? "烟雾弹" : "",
        e.c3 = "rgba(255,160,122,1)";
        break;
    case "Item_Weapon_Molotov_C":
    case "Weapon_Molotov_C":
    case "SXRlbV9XZWFwb25fTW9sb3Rvdl9D":
    case "V2VhcG9uX01vbG90b3ZfQw==":    
        e.n = vapp.showSmokeBomb ? "燃烧弹" : "",
        e.c3 = "rgba(255,160,122,1)";
        break;
    case "Item_EmergencyPickup_C":
    case "EmergencyPickup_C":
    case "SXRlbV9FbWVyZ2VuY3lQaWNrdXBfQw==":
    case "RW1lcmdlbmN5UGlja3VwX0M=":    
        e.n = vapp.jiuyuanqi ? "呼叫救援器" : "",
        e.c3 = "rgba(255,160,122,1)";
        break;    
    case "Item_Tiger_SelfRevive_C":
    case "Tiger_SelfRevive_C": 
    case "InstantRevivalKit_C":
    case "SXRlbV9UaWdlcl9TZWxmUmV2aXZlX0M=":
    case "VGlnZXJfU2VsZlJldml2ZV9D":
    case "SW5zdGFudFJldml2YWxLaXRfQw==":    
        e.n = vapp.chuchanqi ? "除颤器" : "",
        e.c3 = "rgba(255,160,122,1)";
        break;
    case "guanzhan1":
        e.n = vapp.guanzhan1 ? "【观战1" : "",
        e.c3 = "rgba(255,160,122,1)";
        break; 
    case "guanzhan2":
        e.n = vapp.guanzhan2 ? "【观战2】" : "",
        e.c3 = "rgba(255,160,122,1)";
        break;   
    case "guanzhan3":
        e.n = vapp.guanzhan3 ? "【观战3】" : "",
        e.c3 = "rgba(255,160,122,1)";
        break;
    case "guanzhan4":
        e.n = vapp.guanzhan4 ? "【观战4】" : "",
        e.c3 = "rgba(255,160,122,1)";
        break;  
    case "guanzhan5":
        e.n = vapp.guanzhan5 ? "【观战5】" : "",
        e.c3 = "rgba(255,160,122,1)";
        break;  
    case "guanzhan6":
        e.n = vapp.guanzhan6 ? "【观战6】" : "",
        e.c3 = "rgba(255,160,122,1)";
        break;  
    case "guanzhan7":
        e.n = vapp.guanzhan7 ? " 【观战7】" : "",
        e.c3 = "rgba(255,160,122,1)";
        break;  
    case "guanzhan8":
        e.n = vapp.guanzhan8 ? "【观战8】" : "",
        e.c3 = "rgba(255,160,122,1)";
        break;  
    case "guanzhan9":
        e.n = vapp.guanzhan9 ? "【观战9】" : "",
        e.c3 = "rgba(255,160,122,1)";
        break;  
    case "guanzhan10":
        e.n = vapp.guanzhan10 ? "【观战10】" : "",
        e.c3 = "rgba(255,160,122,1)";
        break;  
    default:
        e.n = ""
    }
    return e
}
function isIconFuc(a) {
    let e = null;
    switch (a) {
    case "Carapackage_RedBox_C":
    case "Carapackage_FlareGun_C":
    case "Carapackage_SmallPackage_C":
    case "Carapackage_RedBox_COL_C":
    case "Q2FyYXBhY2thZ2VfUmVkQm94X0M=":
    case "Q2FyYXBhY2thZ2VfRmxhcmVHdW5fQw==":
    case "Q2FyYXBhY2thZ2VfU21hbGxQYWNrYWdlX0M=":
    case "Q2FyYXBhY2thZ2VfUmVkQm94X0NPTF9D":    
        e = vapp.showAirDrop ? AirDropImg : null;
        break;
    case "DeathDropItemPackage_C":
    case "RGVhdGhEcm9wSXRlbVBhY2thZ2VfQw==":    
        e = vapp.showBox ? BoxImg : null;
        break;
    case "Item_Weapon_FlareGun_C":
    case "Weapon_FlareGun_C":
    case "SXRlbV9XZWFwb25fRmxhcmVHdW5fQw==":
    case "V2VhcG9uX0ZsYXJlR3VuX0M=":    
        e = showFlare ? weaponflareImg : null;
        break;
    case "Item_Ammo_Flare_C":
    case "SXRlbV9BbW1vX0ZsYXJlX0M=":    
        e = vapp.showFlare ? ammoflareImg : null;
        break;
    case "Item_Ammo_556mm_C":
    case "SXRlbV9BbW1vXzU1Nm1tX0M=":    
        e = vapp.showAmmo556 ? ammo556Img : null;
        break;
    case "Item_Ammo_762mm_C":
    case "SXRlbV9BbW1vXzc2Mm1tX0M=":    
        e = vapp.showAmmo762 ? ammo762Img : null;
        break;
    case "Item_Attach_Weapon_Upper_ACOG_01_C":
    case "Attach_Weapon_Upper_ACOG_01_C":
    case "SXRlbV9BdHRhY2hfV2VhcG9uX1VwcGVyX0FDT0dfMDFfQw==":
    case "QXR0YWNoX1dlYXBvbl9VcHBlcl9BQ09HXzAxX0M=":    
        e = vapp.showHighST ? x4Img : null;
        break;
    case "Item_Attach_Weapon_Upper_Scope6x_C":
    case "Attach_Weapon_Upper_Scope6x_C":
    case "SXRlbV9BdHRhY2hfV2VhcG9uX1VwcGVyX1Njb3BlNnhfQw==":
    case "QXR0YWNoX1dlYXBvbl9VcHBlcl9TY29wZTZ4X0M=":    
        e = vapp.showHighST ? x6Img : null;
        break;
    case "Item_Attach_Weapon_Upper_CQBSS_C":
    case "Attach_Weapon_Upper_CQBSS_C":
    case "SXRlbV9BdHRhY2hfV2VhcG9uX1VwcGVyX0NRQlNTX0M=":
    case "QXR0YWNoX1dlYXBvbl9VcHBlcl9DUUJTU19D":    
        e = vapp.showHighST ? x8Img : null;
        break;
    case "Item_Back_C_01_Lv3_C":
    case "Item_Back_C_02_Lv3_C":
    case "Back_C_01_Lv3_C":
    case "Back_C_02_Lv3_C":
    case "SXRlbV9CYWNrX0NfMDFfTHYzX0M=":
    case "SXRlbV9CYWNrX0NfMDJfTHYzX0M=":
    case "QmFja19DXzAxX0x2M19D":
    case "QmFja19DXzAyX0x2M19D":    
        e = vapp.showBack ? bb3Img : null;  
        break;
    case "Item_Head_G_01_Lv3_C":
    case "Item_Head_G_A_24_C":        
    case "Head_G_A_24_C":        
    case "Head_G_01_Lv3_C":
    case "SXRlbV9IZWFkX0dfMDFfTHYzX0M=":
    case "SXRlbV9IZWFkX0dfQV8yNF9D":
    case "SGVhZF9HX0FfMjRfQw==":
    case "SGVhZF9HXzAxX0x2M19D":    
        e = vapp.showHead3 ? mh3Img : null;
        break;
    case "Item_Armor_C_01_Lv3_C":
    case "Armor_C_01_Lv3_C":    
        e = vapp.showArmor3 ? pv3Img : null;
        break;
    case "Buggy_A_01_C":
    case "Buggy_A_02_C":
    case "Buggy_A_03_C":
    case "Buggy_A_04_C":
    case "Buggy_A_05_C":
    case "Buggy_A_06_C":
    case "QnVnZ3lfQV8wMV9D":
    case "QnVnZ3lfQV8wMl9D":
    case "QnVnZ3lfQV8wM19D":
    case "QnVnZ3lfQV8wNF9D":
    case "QnVnZ3lfQV8wNV9D":
    case "QnVnZ3lfQV8wNl9D":    
        e = vapp.showCar ? aquaImg : null;
    case "Buggy_A_01_C":
    case "Buggy_A_02_C":
    case "Buggy_A_03_C":
    case "Buggy_A_04_C":
    case "Buggy_A_05_C":
    case "Buggy_A_06_C":
    case "QnVnZ3lfQV8wMV9D":
    case "QnVnZ3lfQV8wMl9D":
    case "QnVnZ3lfQV8wM19D":
    case "QnVnZ3lfQV8wNF9D":
    case "QnVnZ3lfQV8wNV9D":
    case "QnVnZ3lfQV8wNl9D":    
        e = vapp.showCar ? buggyImg : null;
        break;
    case "BP_Mini_Bus_C":
    case "BP_Van_A_01":
    case "BP_Van_A_01_C":
    case "BP_Van_A_02":
    case "BP_Van_A_02_C":
    case "BP_Van_A_03":
    case "BP_Van_A_03_C":
    case "QlBfTWluaV9CdXNfQw==":
    case "QlBfVmFuX0FfMDE=":
    case "QlBfVmFuX0FfMDFfQw==":
    case "QlBfVmFuX0FfMDI=":
    case "QlBfVmFuX0FfMDJfQw==":
    case "QlBfVmFuX0FfMDM=":
    case "QlBfVmFuX0FfMDNfQw==":    
        e = vapp.showCar ? busImg : null;
        break;
    case "Dacia_A_01":
    case "Dacia_A_01_C":
    case "Dacia_A_02":
    case "Dacia_A_02_C":
    case "Dacia_A_03":
    case "Dacia_A_03_C":
    case "Dacia_A_04":
    case "Dacia_A_04_C":
    case "Dacia_A_01_v2":
    case "Dacia_A_01_v2_C":
    case "Dacia_A_02_v2":
    case "Dacia_A_02_v2_C":
    case "Dacia_A_03_v2":
    case "Dacia_A_03_v2_C":
    case "Dacia_A_04_v2":
    case "Dacia_A_04_v2_C":
    case "Dacia_A_01_v2_snow_C": 
    case "Dacia_A_03_v2_Esports_C":
    case "RGFjaWFfQV8wMQ==":
    case "RGFjaWFfQV8wMV9D":
    case "RGFjaWFfQV8wMg==":
    case "RGFjaWFfQV8wMl9D":
    case "RGFjaWFfQV8wMw==":
    case "RGFjaWFfQV8wM19D":
    case "RGFjaWFfQV8wNA==":
    case "RGFjaWFfQV8wNF9D":
    case "RGFjaWFfQV8wMV92Mg==":
    case "RGFjaWFfQV8wMV92Ml9D":
    case "RGFjaWFfQV8wMl92Mg==":
    case "RGFjaWFfQV8wMl92Ml9D":
    case "RGFjaWFfQV8wM192Mg==":
    case "RGFjaWFfQV8wM192Ml9D":
    case "RGFjaWFfQV8wNF92Mg==":
    case "RGFjaWFfQV8wNF92Ml9D":
    case "RGFjaWFfQV8wMV92Ml9zbm93X0M=":
    case "RGFjaWFfQV8wM192Ml9Fc3BvcnRzX0M=":    
        e = vapp.showCar ? daciaImg : null;
        break;
    case "BP_Mirado_A_01_C":
    case "BP_Mirado_A_02_C":
    case "BP_Mirado_A_03_C":
    case "BP_Mirado_Open_01_C":
    case "BP_Mirado_Open_02_C":
    case "BP_Mirado_Open_03_C":
    case "BP_Mirado_A_03_Esports_C":        
    case "BP_Mirado_Open_04_C":
    case "BP_Mirado_Open_05_C":        
    case "BP_Mirado_A_04_C":
    case "QlBfTWlyYWRvX0FfMDFfQw==":
    case "QlBfTWlyYWRvX0FfMDJfQw==":
    case "QlBfTWlyYWRvX0FfMDNfQw==":
    case "QlBfTWlyYWRvX09wZW5fMDFfQw==":
    case "QlBfTWlyYWRvX09wZW5fMDJfQw==":
    case "QlBfTWlyYWRvX09wZW5fMDNfQw==":
    case "QlBfTWlyYWRvX0FfMDNfRXNwb3J0c19D":
    case "QlBfTWlyYWRvX09wZW5fMDRfQw==":
    case "QlBfTWlyYWRvX09wZW5fMDVfQw==":
    case "QlBfTWlyYWRvX0FfMDRfQw==":    
        e = vapp.showCar ? miradoImg : null;
        break;
    case "BP_Motorbike_03":
    case "BP_Motorbike_03_C":
    case "BP_Motorbike_04":
    case "BP_Motorbike_04_C":
    case "BP_Motorbike_03":
    case "BP_Motorbike_03_C":
    case "BP_Motorbike_04":
    case "BP_Motorbike_04_C":
    case "BP_Motorbike_04_Desert":
    case "BP_Motorbike_04_Desert_C":
    case "BP_Motorbike_Solitario_C":           
    case "BP_Motorbike_04_v2_C":
    case "QlBfTW90b3JiaWtlXzAz":
    case "QlBfTW90b3JiaWtlXzAzX0M=":
    case "QlBfTW90b3JiaWtlXzA0":
    case "QlBfTW90b3JiaWtlXzA0X0M=":
    case "QlBfTW90b3JiaWtlXzAz":
    case "QlBfTW90b3JiaWtlXzAzX0M=":
    case "QlBfTW90b3JiaWtlXzA0":
    case "QlBfTW90b3JiaWtlXzA0X0M=":
    case "QlBfTW90b3JiaWtlXzA0X0Rlc2VydA==":
    case "QlBfTW90b3JiaWtlXzA0X0Rlc2VydF9D":
    case "QlBfTW90b3JiaWtlX1NvbGl0YXJpb19D":
    case "QlBfTW90b3JiaWtlXzA0X3YyX0M=":    
        e = vapp.showCar ? motocycle2Img : null;
        break;
    case "BP_Motorbike_03_Sidecar_C":
    case "BP_Motorbike_04_Sidecar":
    case "BP_Motorbike_04_Sidecar_C":
    case "BP_Motorbike_03_SideCart_C":
    case "BP_Motorbike_04_SideCar":
    case "BP_Motorbike_04_SideCar_C":
    case "BP_Motorbike_04_SideCar_Desert":
    case "BP_Motorbike_04_SideCar_Desert_C":
    case "BP_Motorbike_04_SideCar_v2_C":
    case "QlBfTW90b3JiaWtlXzAzX1NpZGVjYXJfQw==":
    case "QlBfTW90b3JiaWtlXzA0X1NpZGVjYXI=":
    case "QlBfTW90b3JiaWtlXzA0X1NpZGVjYXJfQw==":
    case "QlBfTW90b3JiaWtlXzAzX1NpZGVDYXJ0X0M=":
    case "QlBfTW90b3JiaWtlXzA0X1NpZGVDYXI=":
    case "QlBfTW90b3JiaWtlXzA0X1NpZGVDYXJfQw==":
    case "QlBfTW90b3JiaWtlXzA0X1NpZGVDYXJfRGVzZXJ0":
    case "QlBfTW90b3JiaWtlXzA0X1NpZGVDYXJfRGVzZXJ0X0M=":
    case "QlBfTW90b3JiaWtlXzA0X1NpZGVDYXJfdjJfQw==":    
        e = vapp.showCar ? motocycle3Img : null;
        break;
    case "Boat_PG117_C":
        e = vapp.showCar ? pg117Img : null;
        break;
    case "BP_PickupTruck_A_01_C":
    case "BP_PickupTruck_A_02_C":
    case "BP_PickupTruck_A_03_C":
    case "BP_PickupTruck_A_04_C":
    case "BP_PickupTruck_A_05_C":
    case "BP_PickupTruck_A_esports_C":        
    case "BP_PickupTruck_B_01_C":
    case "BP_PickupTruck_B_02_C":
    case "BP_PickupTruck_B_03_C":
    case "BP_PickupTruck_B_04_C":
    case "BP_PickupTruck_B_05_C":
    case "QlBfUGlja3VwVHJ1Y2tfQV8wMV9D":
    case "QlBfUGlja3VwVHJ1Y2tfQV8wMl9D":
    case "QlBfUGlja3VwVHJ1Y2tfQV8wM19D":
    case "QlBfUGlja3VwVHJ1Y2tfQV8wNF9D":
    case "QlBfUGlja3VwVHJ1Y2tfQV8wNV9D":
    case "QlBfUGlja3VwVHJ1Y2tfQV9lc3BvcnRzX0M=":
    case "QlBfUGlja3VwVHJ1Y2tfQl8wMV9D":
    case "QlBfUGlja3VwVHJ1Y2tfQl8wMl9D":
    case "QlBfUGlja3VwVHJ1Y2tfQl8wM19D":
    case "QlBfUGlja3VwVHJ1Y2tfQl8wNF9D":
    case "QlBfUGlja3VwVHJ1Y2tfQl8wNV9D":    
        e = vapp.showCar ? pickupImg : null;
        break;
    case "Uaz_C":
    case "Uaz_A_01":
    case "Uaz_A_01_C":
    case "Uaz_Armored_C":        
    case "Uaz_B_01":
    case "Uaz_B_01_esports_C":        
    case "Uaz_B_01_C":
    case "Uaz_C_01":
    case "Uaz_C_01_C":
    case "VWF6X0M=":
    case "VWF6X0FfMDE=":
    case "VWF6X0FfMDFfQw==":
    case "VWF6X0FybW9yZWRfQw==":
    case "VWF6X0JfMDE=":
    case "VWF6X0JfMDFfZXNwb3J0c19D":
    case "VWF6X0JfMDFfQw==":
    case "VWF6X0NfMDE=":
    case "VWF6X0NfMDFfQw==":    
        e = vapp.showCar ? uazImg : null;
        break;
    case "BP_Motorglider_C":
    case "BP_Motorglider_C":
    case "BP_Motorglider_Blue_C":
    case "BP_Motorglider_Green_C":
    case "BP_Motorglider_Orange_C":
    case "BP_Motorglider_Red_C":
    case "BP_Motorglider_Teal_C":
    case "QlBfTW90b3JnbGlkZXJfQw==":
    case "QlBfTW90b3JnbGlkZXJfQw==":
    case "QlBfTW90b3JnbGlkZXJfQmx1ZV9D":
    case "QlBfTW90b3JnbGlkZXJfR3JlZW5fQw==":
    case "QlBfTW90b3JnbGlkZXJfT3JhbmdlX0M=":
    case "QlBfTW90b3JnbGlkZXJfUmVkX0M=":
    case "QlBfTW90b3JnbGlkZXJfVGVhbF9D":    
        e = vapp.showCar ? gliderImg : null
        break;
    case "AquaRail_A_01_C":
    case "AquaRail_A_02_C":
    case "AquaRail_A_03_C":
    case "QXF1YVJhaWxfQV8wMV9D":
    case "QXF1YVJhaWxfQV8wMl9D":
    case "QXF1YVJhaWxfQV8wM19D":    
        e = vapp.showCar ? Aquarail : null
        break;   
    case "BP_ATV_C":
    case "QlBfQVRWX0M=":    
        e = vapp.showCar ? Quad : null
        break;  
    case "BP_BRDM_C":
    case "QlBfQlJETV9D":    
        e = vapp.showCar ? BRDM : null
        break;
    case "BP_CoupeRB_C":
    case "QlBfQ291cGVSQl9D":    
        e = vapp.showCar ? Coupe : null
        break;  
    case "BP_M_Rony_A_01_C":
    case "BP_M_Rony_A_02_C":
    case "BP_M_Rony_A_03_C":
    case "QlBfTV9Sb255X0FfMDFfQw==":
    case "QlBfTV9Sb255X0FfMDJfQw==":
    case "QlBfTV9Sb255X0FfMDNfQw==":    
        e = vapp.showCar ? Rony : null
        break;   
    case "BP_Niva_01_C":
    case "BP_Niva_02_C":
    case "BP_Niva_03_C":
    case "BP_Niva_04_C":
    case "BP_Niva_05_C":
    case "BP_Niva_06_C": 
    case "BP_Niva_07_C":
    case "QlBfTml2YV8wMV9D":
    case "QlBfTml2YV8wMl9D":
    case "QlBfTml2YV8wM19D":
    case "QlBfTml2YV8wNF9D":
    case "QlBfTml2YV8wNV9D":
    case "QlBfTml2YV8wNl9D":
    case "QlBfTml2YV8wN19D":    
        e = vapp.showCar ? Zima : null
        break; 
    case "BP_PonyCoupe_C":
    case "QlBfUG9ueUNvdXBlX0M=":    
        e = vapp.showCar ? PonyCoupe : null
        break;   
    case "BP_Scooter_01_A_C":
    case "BP_Scooter_02_A_C":
    case "BP_Scooter_03_A_C": 
    case "BP_Scooter_04_A_C":
    case "QlBfU2Nvb3Rlcl8wMV9BX0M=":
    case "QlBfU2Nvb3Rlcl8wMl9BX0M=":
    case "QlBfU2Nvb3Rlcl8wM19BX0M=":
    case "QlBfU2Nvb3Rlcl8wNF9BX0M=":    
        e = vapp.showCar ? Scooter : null
        break;       
    case "BP_Snowbike_01_C": 
    case "BP_Snowbike_02_C":   
    case "BP_Snowmobile_01_C":      
    case "BP_Snowmobile_02_C":     
    case "BP_Snowmobile_03_C":
    case "QlBfU25vd2Jpa2VfMDFfQw==":
    case "QlBfU25vd2Jpa2VfMDJfQw==":
    case "QlBfU25vd21vYmlsZV8wMV9D":
    case "QlBfU25vd21vYmlsZV8wMl9D":
    case "QlBfU25vd21vYmlsZV8wM19D":    
        e = vapp.showCar ? Snowbike : null
        break;  
    case "BP_TukTukTuk_A_01_C":
    case "BP_TukTukTuk_A_02_C":
    case "BP_TukTukTuk_A_03_C":
    case "QlBfVHVrVHVrVHVrX0FfMDFfQw==":
    case "QlBfVHVrVHVrVHVrX0FfMDJfQw==":
    case "QlBfVHVrVHVrVHVrX0FfMDNfQw==":    
        e = vapp.showCar ? Tukshai : null
        break;           
    }
    return e
}
