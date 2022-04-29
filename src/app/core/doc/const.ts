export enum ControlType {
  NoneType = 'none',
  Switch = 'switch',
  Param = 'input',
  Color = 'color',
  Common = 'common',
  Select = 'select',
  Multi = 'multi',
  String = 'string',
  Empty = 'empty',
}

export const Param_File_Map: Map<string, ControlType> = new Map([
  [ "auto_enter",         ControlType.Switch  ],
  [ "color_table",        ControlType.Param   ],
  [ "color2arr_lock",     ControlType.Color   ],
  [ "color2arr",          ControlType.Color   ],
  [ "consumer_control",   ControlType.Select  ],
  [ "general_keys",       ControlType.Common  ],
  [ "indicator_light",    ControlType.Select  ],
  [ "joystick_key",       ControlType.Select  ],
  [ "joystick",           ControlType.Select  ],
  [ "kb_led_off",         ControlType.Select  ],
  [ "kb_led_on",          ControlType.Select  ],
  [ "keep_off_time",      ControlType.Param   ],
  [ "keep_on_time",       ControlType.Param   ],
  [ "keys_switch",        ControlType.Select  ],
  [ "led_ctrl",           ControlType.Select  ],
  [ "led_mode_color",     ControlType.Select  ],
  [ "led_mode_speed",     ControlType.Select  ],
  [ "led_submode",        ControlType.Select  ],
  [ "modifier_keys",      ControlType.Multi   ],
  [ "mouse_keys",         ControlType.Multi   ],
  [ "mouse_scroll",       ControlType.Param   ],
  [ "mouse_x",            ControlType.Param   ],
  [ "mouse_xy",           ControlType.Select  ],
  [ "mouse_y",            ControlType.Param   ],
  [ "mu_keys",            ControlType.Select  ],
  [ "no_more",            ControlType.Empty   ],
  [ "ok_string",          ControlType.Select  ],
  [ "parameter",          ControlType.Select  ],
  [ "pwd_interval_time",  ControlType.Param   ],
  [ "pwd",                ControlType.Select  ],
  [ "reg",                ControlType.Select  ],
  [ "signed_char",        ControlType.Param   ],
  [ "smjb",               ControlType.Param   ],
  [ "u8",                 ControlType.Param   ],
  [ "u8roll",             ControlType.Param   ],
  [ "u8rollx256",         ControlType.Param   ],
  [ "u8rollx8",           ControlType.Param   ],
  [ "u16",                ControlType.Param   ],
  [ "x1",                 ControlType.Param   ],
  [ "x256",               ControlType.Param   ],
  [ "unicode_text_2",     ControlType.String  ],
  [ "mini_opt_1",         ControlType.Multi   ],
  [ "key_delay",          ControlType.Param   ],
  [ "mini_opt_2",         ControlType.Multi   ],
  [ "std_opt_HID_report", ControlType.Multi   ],
]);

export const General_Keys: GeneralKey[] = [
  { code: 41,  name: "ESC",        midPointY: 950,   midPointX: 950,   widget: 1800,  height: 1800, radius: 100 },
  { code: 58,  name: "F1",         midPointY: 950,   midPointX: 4760,  widget: 1800,  height: 1800, radius: 100 },
  { code: 59,  name: "F2",         midPointY: 950,   midPointX: 6665,  widget: 1800,  height: 1800, radius: 100 },
  { code: 60,  name: "F3",         midPointY: 950,   midPointX: 8570,  widget: 1800,  height: 1800, radius: 100 },
  { code: 61,  name: "F4",         midPointY: 950,   midPointX: 10475, widget: 1800,  height: 1800, radius: 100 },
  { code: 62,  name: "F5",         midPointY: 950,   midPointX: 13333, widget: 1800,  height: 1800, radius: 100 },
  { code: 63,  name: "F6",         midPointY: 950,   midPointX: 15238, widget: 1800,  height: 1800, radius: 100 },
  { code: 64,  name: "F7",         midPointY: 950,   midPointX: 17143, widget: 1800,  height: 1800, radius: 100 },
  { code: 65,  name: "F8",         midPointY: 950,   midPointX: 19048, widget: 1800,  height: 1800, radius: 100 },
  { code: 66,  name: "F9",         midPointY: 950,   midPointX: 21905, widget: 1800,  height: 1800, radius: 100 },
  { code: 67,  name: "F10",        midPointY: 950,   midPointX: 23810, widget: 1800,  height: 1800, radius: 100 },
  { code: 68,  name: "F11",        midPointY: 950,   midPointX: 25715, widget: 1800,  height: 1800, radius: 100 },
  { code: 69,  name: "F12",        midPointY: 950,   midPointX: 27620, widget: 1800,  height: 1800, radius: 100 },
  { code: 70,  name: "PS",         midPointY: 950,   midPointX: 30001, widget: 1800,  height: 1800, radius: 100 },
  { code: 71,  name: "SL",         midPointY: 950,   midPointX: 31906, widget: 1800,  height: 1800, radius: 100 },
  { code: 72,  name: "Pause",      midPointY: 950,   midPointX: 33811, widget: 1800,  height: 1800, radius: 100 },
  { code: 53,  name: ".~",         midPointY: 3808,  midPointX: 950,   widget: 1800,  height: 1800, radius: 100 },
  { code: 30,  name: "1!",         midPointY: 3808,  midPointX: 2855,  widget: 1800,  height: 1800, radius: 100 },
  { code: 31,  name: "2@",         midPointY: 3808,  midPointX: 4760,  widget: 1800,  height: 1800, radius: 100 },
  { code: 32,  name: "3#",         midPointY: 3808,  midPointX: 6665,  widget: 1800,  height: 1800, radius: 100 },
  { code: 33,  name: "4$",         midPointY: 3808,  midPointX: 8570,  widget: 1800,  height: 1800, radius: 100 },
  { code: 34,  name: "5%",         midPointY: 3808,  midPointX: 10475, widget: 1800,  height: 1800, radius: 100 },
  { code: 35,  name: "6^",         midPointY: 3808,  midPointX: 12380, widget: 1800,  height: 1800, radius: 100 },
  { code: 36,  name: "7&",         midPointY: 3808,  midPointX: 14285, widget: 1800,  height: 1800, radius: 100 },
  { code: 37,  name: "8*",         midPointY: 3808,  midPointX: 16190, widget: 1800,  height: 1800, radius: 100 },
  { code: 38,  name: "9(",         midPointY: 3808,  midPointX: 18095, widget: 1800,  height: 1800, radius: 100 },
  { code: 39,  name: "0)",         midPointY: 3808,  midPointX: 20000, widget: 1800,  height: 1800, radius: 100 },
  { code: 45,  name: "- _",        midPointY: 3808,  midPointX: 21905, widget: 1800,  height: 1800, radius: 100 },
  { code: 46,  name: "+ =",        midPointY: 3808,  midPointX: 23810, widget: 1800,  height: 1800, radius: 100 },
  { code: 42,  name: "Back Space", midPointY: 3808,  midPointX: 26668, widget: 3700,  height: 1800, radius: 100 },
  { code: 73,  name: "Ins",        midPointY: 3808,  midPointX: 30001, widget: 1800,  height: 1800, radius: 100 },
  { code: 74,  name: "Home",       midPointY: 3808,  midPointX: 31906, widget: 1800,  height: 1800, radius: 100 },
  { code: 75,  name: "PGUP",       midPointY: 3808,  midPointX: 33811, widget: 1800,  height: 1800, radius: 100 },
  { code: 83,  name: "NumLock",    midPointY: 3808,  midPointX: 36192, widget: 1800,  height: 1800, radius: 100 },
  { code: 84,  name: "/",          midPointY: 3808,  midPointX: 38097, widget: 1800,  height: 1800, radius: 100 },
  { code: 85,  name: "*",          midPointY: 3808,  midPointX: 40002, widget: 1800,  height: 1800, radius: 100 },
  { code: 86,  name: "-",          midPointY: 3808,  midPointX: 41907, widget: 1800,  height: 1800, radius: 100 },
  { code: 43,  name: "T A B",      midPointY: 5713,  midPointX: 1426,  widget: 2750,  height: 1800, radius: 100 },
  { code: 20,  name: "Qq",         midPointY: 5713,  midPointX: 3808,  widget: 1800,  height: 1800, radius: 100 },
  { code: 26,  name: "Ww",         midPointY: 5713,  midPointX: 5713,  widget: 1800,  height: 1800, radius: 100 },
  { code: 8,   name: "Ee",         midPointY: 5713,  midPointX: 7618,  widget: 1800,  height: 1800, radius: 100 },
  { code: 21,  name: "Rr",         midPointY: 5713,  midPointX: 9523,  widget: 1800,  height: 1800, radius: 100 },
  { code: 23,  name: "Tt",         midPointY: 5713,  midPointX: 11428, widget: 1800,  height: 1800, radius: 100 },
  { code: 28,  name: "Yy",         midPointY: 5713,  midPointX: 13333, widget: 1800,  height: 1800, radius: 100 },
  { code: 24,  name: "Uu",         midPointY: 5713,  midPointX: 15238, widget: 1800,  height: 1800, radius: 100 },
  { code: 12,  name: "Ii",         midPointY: 5713,  midPointX: 17143, widget: 1800,  height: 1800, radius: 100 },
  { code: 18,  name: "Oo",         midPointY: 5713,  midPointX: 19048, widget: 1800,  height: 1800, radius: 100 },
  { code: 19,  name: "Pp",         midPointY: 5713,  midPointX: 20953, widget: 1800,  height: 1800, radius: 100 },
  { code: 47,  name: "[{",         midPointY: 5713,  midPointX: 22858, widget: 1800,  height: 1800, radius: 100 },
  { code: 48,  name: "]}",         midPointY: 5713,  midPointX: 24763, widget: 1800,  height: 1800, radius: 100 },
  { code: 49,  name: "\\|",        midPointY: 5713,  midPointX: 27144, widget: 2750,  height: 1800, radius: 100 },
  { code: 76,  name: "Del",        midPointY: 5713,  midPointX: 30001, widget: 1800,  height: 1800, radius: 100 },
  { code: 77,  name: "End",        midPointY: 5713,  midPointX: 31906, widget: 1800,  height: 1800, radius: 100 },
  { code: 78,  name: "PGDN",       midPointY: 5713,  midPointX: 33811, widget: 1800,  height: 1800, radius: 100 },
  { code: 95,  name: "7n",         midPointY: 5713,  midPointX: 36192, widget: 1800,  height: 1800, radius: 100 },
  { code: 96,  name: "8n",         midPointY: 5713,  midPointX: 38097, widget: 1800,  height: 1800, radius: 100 },
  { code: 97,  name: "9n",         midPointY: 5713,  midPointX: 40002, widget: 1800,  height: 1800, radius: 100 },
  { code: 87,  name: "+",          midPointY: 6665,  midPointX: 41907, widget: 1800,  height: 3700, radius: 100 },
  { code: 57,  name: "CapsLock",   midPointY: 7618,  midPointX: 1664,  widget: 3225,  height: 1800, radius: 100 },
  { code: 4,   name: "Aa",         midPointY: 7618,  midPointX: 4284,  widget: 1800,  height: 1800, radius: 100 },
  { code: 22,  name: "Ss",         midPointY: 7618,  midPointX: 6189,  widget: 1800,  height: 1800, radius: 100 },
  { code: 7,   name: "Dd",         midPointY: 7618,  midPointX: 8094,  widget: 1800,  height: 1800, radius: 100 },
  { code: 9,   name: "Ff",         midPointY: 7618,  midPointX: 9999,  widget: 1800,  height: 1800, radius: 100 },
  { code: 10,  name: "Gg",         midPointY: 7618,  midPointX: 11904, widget: 1800,  height: 1800, radius: 100 },
  { code: 11,  name: "Hh",         midPointY: 7618,  midPointX: 13809, widget: 1800,  height: 1800, radius: 100 },
  { code: 13,  name: "Jj",         midPointY: 7618,  midPointX: 15714, widget: 1800,  height: 1800, radius: 100 },
  { code: 14,  name: "Kk",         midPointY: 7618,  midPointX: 17619, widget: 1800,  height: 1800, radius: 100 },
  { code: 15,  name: "Ll",         midPointY: 7618,  midPointX: 19524, widget: 1800,  height: 1800, radius: 100 },
  { code: 51,  name: ";:",         midPointY: 7618,  midPointX: 21429, widget: 1800,  height: 1800, radius: 100 },
  { code: 52,  name: "'",          midPointY: 7618,  midPointX: 23334, widget: 1800,  height: 1800, radius: 100 },
  { code: 40,  name: "Enter",      midPointY: 7618,  midPointX: 26429, widget: 4175,  height: 1800, radius: 100 },
  { code: 92,  name: "4n",         midPointY: 7618,  midPointX: 36192, widget: 1800,  height: 1800, radius: 100 },
  { code: 93,  name: "5n",         midPointY: 7618,  midPointX: 38097, widget: 1800,  height: 1800, radius: 100 },
  { code: 94,  name: "6n",         midPointY: 7618,  midPointX: 40002, widget: 1800,  height: 1800, radius: 100 },
  { code: 29,  name: "Zz",         midPointY: 9523,  midPointX: 5236,  widget: 1800,  height: 1800, radius: 100 },
  { code: 27,  name: "Xx",         midPointY: 9523,  midPointX: 7141,  widget: 1800,  height: 1800, radius: 100 },
  { code: 6,   name: "Cc",         midPointY: 9523,  midPointX: 9046,  widget: 1800,  height: 1800, radius: 100 },
  { code: 25,  name: "Vv",         midPointY: 9523,  midPointX: 10951, widget: 1800,  height: 1800, radius: 100 },
  { code: 5,   name: "Bb",         midPointY: 9523,  midPointX: 12856, widget: 1800,  height: 1800, radius: 100 },
  { code: 17,  name: "Nn",         midPointY: 9523,  midPointX: 14761, widget: 1800,  height: 1800, radius: 100 },
  { code: 16,  name: "Mm",         midPointY: 9523,  midPointX: 16666, widget: 1800,  height: 1800, radius: 100 },
  { code: 54,  name: ",<",         midPointY: 9523,  midPointX: 18571, widget: 1800,  height: 1800, radius: 100 },
  { code: 55,  name: ".>",         midPointY: 9523,  midPointX: 20476, widget: 1800,  height: 1800, radius: 100 },
  { code: 56,  name: "/?",         midPointY: 9523,  midPointX: 22381, widget: 1800,  height: 1800, radius: 100 },
  { code: 82,  name: "↑",          midPointY: 9523,  midPointX: 31906, widget: 1800,  height: 1800, radius: 100 },
  { code: 89,  name: "1n",         midPointY: 9523,  midPointX: 36192, widget: 1800,  height: 1800, radius: 100 },
  { code: 90,  name: "2n",         midPointY: 9523,  midPointX: 38097, widget: 1800,  height: 1800, radius: 100 },
  { code: 91,  name: "3n",         midPointY: 9523,  midPointX: 40002, widget: 1800,  height: 1800, radius: 100 },
  { code: 44,  name: "SpaceBar",   midPointY: 11428, midPointX: 13094, widget: 11776, height: 1800, radius: 100 },
  { code: 101, name: "MENU",       midPointY: 11428, midPointX: 20238, widget: 2275,  height: 1800, radius: 100 },
  { code: 80,  name: "←",          midPointY: 11428, midPointX: 30001, widget: 1800,  height: 1800, radius: 100 },
  { code: 81,  name: "↓",          midPointY: 11428, midPointX: 31906, widget: 1800,  height: 1800, radius: 100 },
  { code: 79,  name: "→",          midPointY: 11428, midPointX: 33811, widget: 1800,  height: 1800, radius: 100 },
  { code: 98,  name: "0n",         midPointY: 11428, midPointX: 37145, widget: 3700,  height: 1800, radius: 100 },
  { code: 99,  name: ".",          midPointY: 11428, midPointX: 40002, widget: 1800,  height: 1800, radius: 100 },
  { code: 88,  name: "EnterN",     midPointY: 10475, midPointX: 41907, widget: 1800,  height: 3700, radius: 100 },
];


export const Linux_Keys: LinuxKey[] = [
  { code: 50,  name: "Non-US#and~"            },
  { code: 100, name: "Non-US\\and|"           },
  { code: 102, name: "Power"                  },
  { code: 103, name: "="                      },
  { code: 104, name: "F13"                    },
  { code: 105, name: "F14"                    },
  { code: 106, name: "F15"                    },
  { code: 107, name: "F16"                    },
  { code: 108, name: "F17"                    },
  { code: 109, name: "F18"                    },
  { code: 110, name: "F19"                    },
  { code: 111, name: "F20"                    },
  { code: 112, name: "F21"                    },
  { code: 113, name: "F22"                    },
  { code: 114, name: "F23"                    },
  { code: 115, name: "F24"                    },
  { code: 116, name: "Execute"                },
  { code: 117, name: "Help"                   },
  { code: 118, name: "Menu"                   },
  { code: 119, name: "Select"                 },
  { code: 120, name: "Stop"                   },
  { code: 121, name: "Again"                  },
  { code: 122, name: "Undo"                   },
  { code: 123, name: "Cut"                    },
  { code: 124, name: "Copy"                   },
  { code: 125, name: "Paste"                  },
  { code: 126, name: "Find"                   },
  { code: 127, name: "Mute"                   },
  { code: 128, name: "VolumeUp"               },
  { code: 129, name: "VolumeDown"             },
  { code: 130, name: "LockingCaps"            },
  { code: 131, name: "LockingNum"             },
  { code: 132, name: "LockingScroll"          },
  { code: 133, name: "Comma"                  },
  { code: 134, name: "EqualSign"              },
  { code: 135, name: "International1"         },
  { code: 136, name: "International2"         },
  { code: 137, name: "International3"         },
  { code: 138, name: "International4"         },
  { code: 139, name: "International5"         },
  { code: 140, name: "International6"         },
  { code: 141, name: "International7"         },
  { code: 142, name: "International8"         },
  { code: 143, name: "International9"         },
  { code: 144, name: "LANG1"                  },
  { code: 145, name: "LANG2"                  },
  { code: 146, name: "LANG3"                  },
  { code: 147, name: "LANG4"                  },
  { code: 148, name: "LANG5"                  },
  { code: 149, name: "LANG6"                  },
  { code: 150, name: "LANG7"                  },
  { code: 151, name: "LANG8"                  },
  { code: 152, name: "LANG9"                  },
  { code: 153, name: "AlternateErase"         },
  { code: 154, name: "SysReq/Attention"       },
  { code: 155, name: "Cancel"                 },
  { code: 156, name: "Clear"                  },
  { code: 157, name: "Prior"                  },
  { code: 158, name: "Return"                 },
  { code: 159, name: "Separator"              },
  { code: 160, name: "Out"                    },
  { code: 161, name: "Oper"                   },
  { code: 162, name: "Clear/Again"            },
  { code: 163, name: "CrSel/Props"            },
  { code: 164, name: "ExSel"                  },
  { code: 176, name: "00"                     },
  { code: 177, name: "000"                    },
  { code: 178, name: "ThousandsSeparator"     },
  { code: 179, name: "DecimalSeparator"       },
  { code: 180, name: "CurrencyUnit"           },
  { code: 181, name: "CurrencySub-unit"       },
  { code: 182, name: "("                      },
  { code: 183, name: ")"                      },
  { code: 184, name: "{"                      },
  { code: 185, name: "}"                      },
  { code: 186, name: "Tab"                    },
  { code: 187, name: "Backspace"              },
  { code: 188, name: "A"                      },
  { code: 189, name: "B"                      },
  { code: 190, name: "C"                      },
  { code: 191, name: "D"                      },
  { code: 192, name: "E"                      },
  { code: 193, name: "F"                      },
  { code: 194, name: "XOR"                    },
  { code: 195, name: "^"                      },
  { code: 196, name: "%"                      },
  { code: 197, name: "<"                      },
  { code: 198, name: ">"                      },
  { code: 199, name: "&"                      },
  { code: 200, name: "&&"                     },
  { code: 201, name: "|"                      },
  { code: 202, name: "||"                     },
  { code: 203, name: ":"                      },
  { code: 204, name: "#"                      },
  { code: 205, name: "Space"                  },
  { code: 206, name: "@"                      },
  { code: 207, name: "!"                      },
  { code: 208, name: "MemoryStore"            },
  { code: 209, name: "MemoryRecall"           },
  { code: 210, name: "MemoryClear"            },
  { code: 211, name: "MemoryAdd"              },
  { code: 212, name: "MemorySubtract"         },
  { code: 213, name: "MemoryMultiply"         },
  { code: 214, name: "MemoryDivide"           },
  { code: 215, name: "+/-"                    },
  { code: 216, name: "Clear"                  },
  { code: 217, name: "ClearEntry"             },
  { code: 219, name: "Octal"                  },
  { code: 220, name: "Decimal"                },
  { code: 221, name: "Hexadecimal"            },
  { code: 224, name: "LeftControl"            },
  { code: 225, name: "LeftShift"              },
  { code: 226, name: "LeftAlt"                },
  { code: 227, name: "LeftGUI"                },
  { code: 228, name: "RightControl"           },
  { code: 229, name: "RightShift"             },
  { code: 230, name: "RightAlt"               },
  { code: 231, name: "RightGUI"               },
];
