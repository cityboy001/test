
export const macarons = {
        // 榛樿鑹叉澘
        color: [
            '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
            '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
            '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
            '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
        ],

        // 鍥捐〃鏍囬
        title: {
            textStyle: {
                fontWeight: 'normal',
                color: '#008acd'          // 涓绘爣棰樻枃瀛楅鑹�
            }
        },

        // 鍊煎煙
        dataRange: {
            itemWidth: 15,
            color: ['#5ab1ef','#e0ffff']
        },

        // 宸ュ叿绠�
        toolbox: {
            color : ['#1e90ff', '#1e90ff', '#1e90ff', '#1e90ff'],
            effectiveColor : '#ff4500'
        },

        // 鎻愮ず妗�
        tooltip: {
            backgroundColor: 'rgba(50,50,50,0.5)',     // 鎻愮ず鑳屾櫙棰滆壊锛岄粯璁や负閫忔槑搴︿负0.7鐨勯粦鑹�
            axisPointer : {            // 鍧愭爣杞存寚绀哄櫒锛屽潗鏍囪酱瑙﹀彂鏈夋晥
                type : 'line',         // 榛樿涓虹洿绾匡紝鍙€変负锛�'line' | 'shadow'
                lineStyle : {          // 鐩寸嚎鎸囩ず鍣ㄦ牱寮忚缃�
                    color: '#008acd'
                },
                crossStyle: {
                    color: '#008acd'
                },
                shadowStyle : {                     // 闃村奖鎸囩ず鍣ㄦ牱寮忚缃�
                    color: 'rgba(200,200,200,0.2)'
                }
            }
        },

        // 鍖哄煙缂╂斁鎺у埗鍣�
        dataZoom: {
            dataBackgroundColor: '#efefff',            // 鏁版嵁鑳屾櫙棰滆壊
            fillerColor: 'rgba(182,162,222,0.2)',   // 濉厖棰滆壊
            handleColor: '#008acd'    // 鎵嬫焺棰滆壊
        },

        // 缃戞牸
        grid: {
            borderColor: '#eee'
        },

        // 绫荤洰杞�
        categoryAxis: {
            axisLine: {            // 鍧愭爣杞寸嚎
                lineStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                    color: '#008acd'
                }
            },
            splitLine: {           // 鍒嗛殧绾�
                lineStyle: {       // 灞炴€ineStyle锛堣瑙乴ineStyle锛夋帶鍒剁嚎鏉℃牱寮�
                    color: ['#eee']
                }
            }
        },

        // 鏁板€煎瀷鍧愭爣杞撮粯璁ゅ弬鏁�
        valueAxis: {
            axisLine: {            // 鍧愭爣杞寸嚎
                lineStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                    color: '#008acd'
                }
            },
            splitArea : {
                show : true,
                areaStyle : {
                    color: ['rgba(250,250,250,0.1)','rgba(200,200,200,0.1)']
                }
            },
            splitLine: {           // 鍒嗛殧绾�
                lineStyle: {       // 灞炴€ineStyle锛堣瑙乴ineStyle锛夋帶鍒剁嚎鏉℃牱寮�
                    color: ['#eee']
                }
            }
        },

        polar : {
            axisLine: {            // 鍧愭爣杞寸嚎
                lineStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                    color: '#ddd'
                }
            },
            splitArea : {
                show : true,
                areaStyle : {
                    color: ['rgba(250,250,250,0.2)','rgba(200,200,200,0.2)']
                }
            },
            splitLine : {
                lineStyle : {
                    color : '#ddd'
                }
            }
        },

        timeline : {
            lineStyle : {
                color : '#008acd'
            },
            controlStyle : {
                normal : { color : '#008acd'},
                emphasis : { color : '#008acd'}
            },
            symbol : 'emptyCircle',
            symbolSize : 3
        },

        // 鏌卞舰鍥鹃粯璁ゅ弬鏁�
        bar: {
            itemStyle: {
                normal: {
                    barBorderRadius: 5
                },
                emphasis: {
                    barBorderRadius: 5
                }
            }
        },

        // 鎶樼嚎鍥鹃粯璁ゅ弬鏁�
        line: {
            smooth : true,
            symbol: 'emptyCircle',  // 鎷愮偣鍥惧舰绫诲瀷
            symbolSize: 3           // 鎷愮偣鍥惧舰澶у皬
        },

        // K绾垮浘榛樿鍙傛暟
        k: {
            itemStyle: {
                normal: {
                    color: '#d87a80',       // 闃崇嚎濉厖棰滆壊
                    color0: '#2ec7c9',      // 闃寸嚎濉厖棰滆壊
                    lineStyle: {
                        color: '#d87a80',   // 闃崇嚎杈规棰滆壊
                        color0: '#2ec7c9'   // 闃寸嚎杈规棰滆壊
                    }
                }
            }
        },

        // 鏁ｇ偣鍥鹃粯璁ゅ弬鏁�
        scatter: {
            symbol: 'circle',    // 鍥惧舰绫诲瀷
            symbolSize: 4        // 鍥惧舰澶у皬锛屽崐瀹斤紙鍗婂緞锛夊弬鏁帮紝褰撳浘褰负鏂瑰悜鎴栬彵褰㈠垯鎬诲搴︿负symbolSize * 2
        },

        // 闆疯揪鍥鹃粯璁ゅ弬鏁�
        radar : {
            symbol: 'emptyCircle',    // 鍥惧舰绫诲瀷
            symbolSize:3
            //symbol: null,         // 鎷愮偣鍥惧舰绫诲瀷
            //symbolRotate : null,  // 鍥惧舰鏃嬭浆鎺у埗
        },

        map: {
            itemStyle: {
                normal: {
                    areaStyle: {
                        color: '#ddd'
                    },
                    label: {
                        textStyle: {
                            color: '#d87a80'
                        }
                    }
                },
                emphasis: {                 // 涔熸槸閫変腑鏍峰紡
                    areaStyle: {
                        color: '#fe994e'
                    }
                }
            }
        },

        force : {
            itemStyle: {
                normal: {
                    linkStyle : {
                        color : '#1e90ff'
                    }
                }
            }
        },

        chord : {
            itemStyle : {
                normal : {
                    borderWidth: 1,
                    borderColor: 'rgba(128, 128, 128, 0.5)',
                    chordStyle : {
                        lineStyle : {
                            color : 'rgba(128, 128, 128, 0.5)'
                        }
                    }
                },
                emphasis : {
                    borderWidth: 1,
                    borderColor: 'rgba(128, 128, 128, 0.5)',
                    chordStyle : {
                        lineStyle : {
                            color : 'rgba(128, 128, 128, 0.5)'
                        }
                    }
                }
            }
        },

        gauge : {
            axisLine: {            // 鍧愭爣杞寸嚎
                lineStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                    color: [[0.2, '#2ec7c9'],[0.8, '#5ab1ef'],[1, '#d87a80']],
                    width: 10
                }
            },
            axisTick: {            // 鍧愭爣杞村皬鏍囪
                splitNumber: 10,   // 姣忎唤split缁嗗垎澶氬皯娈�
                length :15,        // 灞炴€ength鎺у埗绾块暱
                lineStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                    color: 'auto'
                }
            },
            splitLine: {           // 鍒嗛殧绾�
                length :22,         // 灞炴€ength鎺у埗绾块暱
                lineStyle: {       // 灞炴€ineStyle锛堣瑙乴ineStyle锛夋帶鍒剁嚎鏉℃牱寮�
                    color: 'auto'
                }
            },
            pointer : {
                width : 5
            }
        },

        textStyle: {
            fontFamily: '寰蒋闆呴粦, Arial, Verdana, sans-serif'
        }
    };


export const blue = {
        // 榛樿鑹叉澘
        color: [
            '#1790cf','#1bb2d8','#99d2dd','#88b0bb',
            '#1c7099','#038cc4','#75abd0','#afd6dd'
        ],

        // 鍥捐〃鏍囬
        title: {
            textStyle: {
                fontWeight: 'normal',
                color: '#1790cf'
            }
        },

        // 鍊煎煙
        dataRange: {
            color:['#1178ad','#72bbd0']
        },

        // 宸ュ叿绠�
        toolbox: {
            color : ['#1790cf','#1790cf','#1790cf','#1790cf']
        },

        // 鎻愮ず妗�
        tooltip: {
            backgroundColor: 'rgba(0,0,0,0.5)',
            axisPointer : {            // 鍧愭爣杞存寚绀哄櫒锛屽潗鏍囪酱瑙﹀彂鏈夋晥
                type : 'line',         // 榛樿涓虹洿绾匡紝鍙€変负锛�'line' | 'shadow'
                lineStyle : {          // 鐩寸嚎鎸囩ず鍣ㄦ牱寮忚缃�
                    color: '#1790cf',
                    type: 'dashed'
                },
                crossStyle: {
                    color: '#1790cf'
                },
                shadowStyle : {                     // 闃村奖鎸囩ず鍣ㄦ牱寮忚缃�
                    color: 'rgba(200,200,200,0.3)'
                }
            }
        },

        // 鍖哄煙缂╂斁鎺у埗鍣�
        dataZoom: {
            dataBackgroundColor: '#eee',            // 鏁版嵁鑳屾櫙棰滆壊
            fillerColor: 'rgba(144,197,237,0.2)',   // 濉厖棰滆壊
            handleColor: '#1790cf'     // 鎵嬫焺棰滆壊
        },

        // 缃戞牸
        grid: {
            borderWidth: 0
        },

        // 绫荤洰杞�
        categoryAxis: {
            axisLine: {            // 鍧愭爣杞寸嚎
                lineStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                    color: '#1790cf'
                }
            },
            splitLine: {           // 鍒嗛殧绾�
                lineStyle: {       // 灞炴€ineStyle锛堣瑙乴ineStyle锛夋帶鍒剁嚎鏉℃牱寮�
                    color: ['#eee']
                }
            }
        },

        // 鏁板€煎瀷鍧愭爣杞撮粯璁ゅ弬鏁�
        valueAxis: {
            axisLine: {            // 鍧愭爣杞寸嚎
                lineStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                    color: '#1790cf'
                }
            },
            splitArea : {
                show : true,
                areaStyle : {
                    color: ['rgba(250,250,250,0.1)','rgba(200,200,200,0.1)']
                }
            },
            splitLine: {           // 鍒嗛殧绾�
                lineStyle: {       // 灞炴€ineStyle锛堣瑙乴ineStyle锛夋帶鍒剁嚎鏉℃牱寮�
                    color: ['#eee']
                }
            }
        },

        timeline : {
            lineStyle : {
                color : '#1790cf'
            },
            controlStyle : {
                normal : { color : '#1790cf'},
                emphasis : { color : '#1790cf'}
            }
        },

        // K绾垮浘榛樿鍙傛暟
        k: {
            itemStyle: {
                normal: {
                    color: '#1bb2d8',          // 闃崇嚎濉厖棰滆壊
                    color0: '#99d2dd',      // 闃寸嚎濉厖棰滆壊
                    lineStyle: {
                        width: 1,
                        color: '#1c7099',   // 闃崇嚎杈规棰滆壊
                        color0: '#88b0bb'   // 闃寸嚎杈规棰滆壊
                    }
                }
            }
        },

        map: {
            itemStyle: {
                normal: {
                    areaStyle: {
                        color: '#ddd'
                    },
                    label: {
                        textStyle: {
                            color: '#c12e34'
                        }
                    }
                },
                emphasis: {                 // 涔熸槸閫変腑鏍峰紡
                    areaStyle: {
                        color: '#99d2dd'
                    },
                    label: {
                        textStyle: {
                            color: '#c12e34'
                        }
                    }
                }
            }
        },

        force : {
            itemStyle: {
                normal: {
                    linkStyle : {
                        color : '#1790cf'
                    }
                }
            }
        },

        chord : {
            padding : 4,
            itemStyle : {
                normal : {
                    borderWidth: 1,
                    borderColor: 'rgba(128, 128, 128, 0.5)',
                    chordStyle : {
                        lineStyle : {
                            color : 'rgba(128, 128, 128, 0.5)'
                        }
                    }
                },
                emphasis : {
                    borderWidth: 1,
                    borderColor: 'rgba(128, 128, 128, 0.5)',
                    chordStyle : {
                        lineStyle : {
                            color : 'rgba(128, 128, 128, 0.5)'
                        }
                    }
                }
            }
        },

        gauge : {
            axisLine: {            // 鍧愭爣杞寸嚎
                show: true,        // 榛樿鏄剧ず锛屽睘鎬how鎺у埗鏄剧ず涓庡惁
                lineStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                    color: [[0.2, '#1bb2d8'],[0.8, '#1790cf'],[1, '#1c7099']],
                    width: 8
                }
            },
            axisTick: {            // 鍧愭爣杞村皬鏍囪
                splitNumber: 10,   // 姣忎唤split缁嗗垎澶氬皯娈�
                length :12,        // 灞炴€ength鎺у埗绾块暱
                lineStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                    color: 'auto'
                }
            },
            axisLabel: {           // 鍧愭爣杞存枃鏈爣绛撅紝璇﹁axis.axisLabel
                textStyle: {       // 鍏朵綑灞炴€ч粯璁や娇鐢ㄥ叏灞€鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                    color: 'auto'
                }
            },
            splitLine: {           // 鍒嗛殧绾�
                length : 18,         // 灞炴€ength鎺у埗绾块暱
                lineStyle: {       // 灞炴€ineStyle锛堣瑙乴ineStyle锛夋帶鍒剁嚎鏉℃牱寮�
                    color: 'auto'
                }
            },
            pointer : {
                length : '90%',
                color : 'auto'
            },
            title : {
                textStyle: {       // 鍏朵綑灞炴€ч粯璁や娇鐢ㄥ叏灞€鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                    color: '#333'
                }
            },
            detail : {
                textStyle: {       // 鍏朵綑灞炴€ч粯璁や娇鐢ㄥ叏灞€鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                    color: 'auto'
                }
            }
        },

        textStyle: {
            fontFamily: '寰蒋闆呴粦, Arial, Verdana, sans-serif'
        }
    };


export const macarons2 = {
    // 鍏ㄥ浘榛樿鑳屾櫙
    // backgroundColor: 'rgba(0,0,0,0)',

    // 榛樿鑹叉澘
    color: ['#ed9678','#e7dac9','#cb8e85','#f3f39d','#c8e49c',
        '#f16d7a','#f3d999','#d3758f','#dcc392','#2e4783',
        '#82b6e9','#ff6347','#a092f1','#0a915d','#eaf889',
        '#6699FF','#ff6666','#3cb371','#d5b158','#38b6b6'],

    // 鍊煎煙
    dataRange: {
        color:['#cb8e85','#e7dac9'],//棰滆壊
        //text:['楂�','浣�'],         // 鏂囨湰锛岄粯璁や负鏁板€兼枃鏈�
        textStyle: {
            color: '#333'          // 鍊煎煙鏂囧瓧棰滆壊
        }
    },


    // 鏌卞舰鍥鹃粯璁ゅ弬鏁�
    bar: {
        barMinHeight: 0,          // 鏈€灏忛珮搴︽敼涓�0
        // barWidth: null,        // 榛樿鑷€傚簲
        barGap: '30%',            // 鏌遍棿璺濈锛岄粯璁や负鏌卞舰瀹藉害鐨�30%锛屽彲璁惧浐瀹氬€�
        barCategoryGap : '20%',   // 绫荤洰闂存煴褰㈣窛绂伙紝榛樿涓虹被鐩棿璺濈殑20%锛屽彲璁惧浐瀹氬€�
        itemStyle: {
            normal: {
                // color: '鍚勫紓',
                barBorderColor: '#fff',       // 鏌辨潯杈圭嚎
                barBorderRadius: 0,           // 鏌辨潯杈圭嚎鍦嗚锛屽崟浣峱x锛岄粯璁や负0
                barBorderWidth: 1,            // 鏌辨潯杈圭嚎绾垮锛屽崟浣峱x锛岄粯璁や负1
                label: {
                    show: false
                    // position: 榛樿鑷€傚簲锛屾按骞冲竷灞€涓�'top'锛屽瀭鐩村竷灞€涓�'right'锛屽彲閫変负
                    //           'inside'|'left'|'right'|'top'|'bottom'
                    // textStyle: null      // 榛樿浣跨敤鍏ㄥ眬鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                }
            },
            emphasis: {
                // color: '鍚勫紓',
                barBorderColor: 'rgba(0,0,0,0)',   // 鏌辨潯杈圭嚎
                barBorderRadius: 0,                // 鏌辨潯杈圭嚎鍦嗚锛屽崟浣峱x锛岄粯璁や负0
                barBorderWidth: 1,                 // 鏌辨潯杈圭嚎绾垮锛屽崟浣峱x锛岄粯璁や负1
                label: {
                    show: false
                    // position: 榛樿鑷€傚簲锛屾按骞冲竷灞€涓�'top'锛屽瀭鐩村竷灞€涓�'right'锛屽彲閫変负
                    //           'inside'|'left'|'right'|'top'|'bottom'
                    // textStyle: null      // 榛樿浣跨敤鍏ㄥ眬鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                }
            }
        }
    },

    // 鎶樼嚎鍥鹃粯璁ゅ弬鏁�
    line: {
        itemStyle: {
            normal: {
                // color: 鍚勫紓,
                label: {
                    show: false
                    // position: 榛樿鑷€傚簲锛屾按骞冲竷灞€涓�'top'锛屽瀭鐩村竷灞€涓�'right'锛屽彲閫変负
                    //           'inside'|'left'|'right'|'top'|'bottom'
                    // textStyle: null      // 榛樿浣跨敤鍏ㄥ眬鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                },
                lineStyle: {
                    width: 2,
                    type: 'solid',
                    shadowColor : 'rgba(0,0,0,0)', //榛樿閫忔槑
                    shadowBlur: 5,
                    shadowOffsetX: 3,
                    shadowOffsetY: 3
                }
            },
            emphasis: {
                // color: 鍚勫紓,
                label: {
                    show: false
                    // position: 榛樿鑷€傚簲锛屾按骞冲竷灞€涓�'top'锛屽瀭鐩村竷灞€涓�'right'锛屽彲閫変负
                    //           'inside'|'left'|'right'|'top'|'bottom'
                    // textStyle: null      // 榛樿浣跨敤鍏ㄥ眬鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                }
            }
        },
        //smooth : false,
        //symbol: null,         // 鎷愮偣鍥惧舰绫诲瀷
        symbolSize: 2,          // 鎷愮偣鍥惧舰澶у皬
        //symbolRotate : null,  // 鎷愮偣鍥惧舰鏃嬭浆鎺у埗
        showAllSymbol: false    // 鏍囧織鍥惧舰榛樿鍙湁涓昏酱鏄剧ず锛堥殢涓昏酱鏍囩闂撮殧闅愯棌绛栫暐锛�
    },

    // K绾垮浘榛樿鍙傛暟
    k: {
        // barWidth : null          // 榛樿鑷€傚簲
        // barMaxWidth : null       // 榛樿鑷€傚簲
        itemStyle: {
            normal: {
                color: '#fe9778',          // 闃崇嚎濉厖棰滆壊
                color0: '#e7dac9',      // 闃寸嚎濉厖棰滆壊
                lineStyle: {
                    width: 1,
                    color: '#f78766',   // 闃崇嚎杈规棰滆壊
                    color0: '#f1ccb8'   // 闃寸嚎杈规棰滆壊
                }
            },
            emphasis: {
                // color: 鍚勫紓,
                // color0: 鍚勫紓
            }
        }
    },

    // 楗煎浘榛樿鍙傛暟
    pie: {
        center : ['50%', '50%'],    // 榛樿鍏ㄥ眬灞呬腑
        radius : [0, '75%'],
        clockWise : false,          // 榛樿閫嗘椂閽�
        startAngle: 90,
        minAngle: 0,                // 鏈€灏忚搴︽敼涓�0
        selectedOffset: 10,         // 閫変腑鏄墖鍖哄亸绉婚噺
        itemStyle: {
            normal: {
                // color: 鍚勫紓,
                borderColor: '#fff',
                borderWidth: 1,
                label: {
                    show: true,
                    position: 'outer',
                    textStyle: {color: '#1b1b1b'},
                    lineStyle: {color: '#1b1b1b'}
                    // textStyle: null      // 榛樿浣跨敤鍏ㄥ眬鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                },
                labelLine: {
                    show: true,
                    length: 20,
                    lineStyle: {
                        // color: 鍚勫紓,
                        width: 1,
                        type: 'solid'
                    }
                }
            }
        }
    },

    map: {
        mapType: 'china',   // 鍚勭渷鐨刴apType鏆傛椂閮界敤涓枃
        mapLocation: {
            x : 'center',
            y : 'center'
            // width    // 鑷€傚簲
            // height   // 鑷€傚簲
        },
        showLegendSymbol : true,       // 鏄剧ず鍥句緥棰滆壊鏍囪瘑锛堢郴鍒楁爣璇嗙殑灏忓渾鐐癸級锛屽瓨鍦╨egend鏃剁敓鏁�
        itemStyle: {
            normal: {
                // color: 鍚勫紓,
                borderColor: '#fff',
                borderWidth: 1,
                areaStyle: {
                    color: '#ccc'//rgba(135,206,250,0.8)
                },
                label: {
                    show: false,
                    textStyle: {
                        color: 'rgba(139,69,19,1)'
                    }
                }
            },
            emphasis: {                 // 涔熸槸閫変腑鏍峰紡
                // color: 鍚勫紓,
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 1,
                areaStyle: {
                    color: '#f3f39d'
                },
                label: {
                    show: false,
                    textStyle: {
                        color: 'rgba(139,69,19,1)'
                    }
                }
            }
        }
    },

    force : {
        itemStyle: {
            normal: {
                // color: 鍚勫紓,
                label: {
                    show: false
                    // textStyle: null      // 榛樿浣跨敤鍏ㄥ眬鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                },
                nodeStyle : {
                    brushType : 'both',
                    strokeColor : '#a17e6e'
                },
                linkStyle : {
                    strokeColor : '#a17e6e'
                }
            },
            emphasis: {
                // color: 鍚勫紓,
                label: {
                    show: false
                    // textStyle: null      // 榛樿浣跨敤鍏ㄥ眬鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                },
                nodeStyle : {},
                linkStyle : {}
            }
        }
    },

    gauge : {
        axisLine: {            // 鍧愭爣杞寸嚎
            show: true,        // 榛樿鏄剧ず锛屽睘鎬how鎺у埗鏄剧ず涓庡惁
            lineStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                color: [[0.2, '#ed9678'],[0.8, '#e7dac9'],[1, '#cb8e85']],
                width: 8
            }
        },
        axisTick: {            // 鍧愭爣杞村皬鏍囪
            splitNumber: 10,   // 姣忎唤split缁嗗垎澶氬皯娈�
            length :12,        // 灞炴€ength鎺у埗绾块暱
            lineStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                color: 'auto'
            }
        },
        axisLabel: {           // 鍧愭爣杞存枃鏈爣绛撅紝璇﹁axis.axisLabel
            textStyle: {       // 鍏朵綑灞炴€ч粯璁や娇鐢ㄥ叏灞€鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                color: 'auto'
            }
        },
        splitLine: {           // 鍒嗛殧绾�
            length : 18,         // 灞炴€ength鎺у埗绾块暱
            lineStyle: {       // 灞炴€ineStyle锛堣瑙乴ineStyle锛夋帶鍒剁嚎鏉℃牱寮�
                color: 'auto'
            }
        },
        pointer : {
            length : '90%',
            color : 'auto'
        },
        title : {
            textStyle: {       // 鍏朵綑灞炴€ч粯璁や娇鐢ㄥ叏灞€鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                color: '#333'
            }
        },
        detail : {
            textStyle: {       // 鍏朵綑灞炴€ч粯璁や娇鐢ㄥ叏灞€鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                color: 'auto'
            }
        }
    }
};