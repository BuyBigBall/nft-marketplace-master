const  ERC20TOKENABI = 
{
	"deploy": {
		"VM:-": {
			"linkReferences": {},
			"autoDeployLib": true
		},
		"main:1": {
			"linkReferences": {},
			"autoDeployLib": true
		},
		"ropsten:3": {
			"linkReferences": {},
			"autoDeployLib": true
		},
		"rinkeby:4": {
			"linkReferences": {},
			"autoDeployLib": true
		},
		"kovan:42": {
			"linkReferences": {},
			"autoDeployLib": true
		},
		"görli:5": {
			"linkReferences": {},
			"autoDeployLib": true
		},
		"Custom": {
			"linkReferences": {},
			"autoDeployLib": true
		}
	},
	"data": {
		"bytecode": {
			"functionDebugData": {
				"@_449": {
					"entryPoint": null,
					"id": 449,
					"parameterSlots": 0,
					"returnSlots": 0
				},
				"@_53": {
					"entryPoint": null,
					"id": 53,
					"parameterSlots": 0,
					"returnSlots": 0
				},
				"@_msgSender_10": {
					"entryPoint": null,
					"id": 10,
					"parameterSlots": 0,
					"returnSlots": 1
				},
				"abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed": {
					"entryPoint": null,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"checked_exp_helper": {
					"entryPoint": 462,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 2
				},
				"checked_exp_t_uint256_t_uint8": {
					"entryPoint": 535,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"checked_exp_unsigned": {
					"entryPoint": 559,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"checked_mul_t_uint256": {
					"entryPoint": 741,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"extract_byte_array_length": {
					"entryPoint": 775,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"panic_error_0x11": {
					"entryPoint": 836,
					"id": null,
					"parameterSlots": 0,
					"returnSlots": 0
				}
			},
			"generatedSources": [
				{
					"ast": {
						"nodeType": "YulBlock",
						"src": "0:2266:1",
						"statements": [
							{
								"nodeType": "YulBlock",
								"src": "6:3:1",
								"statements": []
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "115:76:1",
									"statements": [
										{
											"nodeType": "YulAssignment",
											"src": "125:26:1",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "137:9:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "148:2:1",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "133:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "133:18:1"
											},
											"variableNames": [
												{
													"name": "tail",
													"nodeType": "YulIdentifier",
													"src": "125:4:1"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "167:9:1"
													},
													{
														"name": "value0",
														"nodeType": "YulIdentifier",
														"src": "178:6:1"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "160:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "160:25:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "160:25:1"
										}
									]
								},
								"name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nodeType": "YulTypedName",
										"src": "84:9:1",
										"type": ""
									},
									{
										"name": "value0",
										"nodeType": "YulTypedName",
										"src": "95:6:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nodeType": "YulTypedName",
										"src": "106:4:1",
										"type": ""
									}
								],
								"src": "14:177:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "260:358:1",
									"statements": [
										{
											"nodeType": "YulVariableDeclaration",
											"src": "270:16:1",
											"value": {
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "285:1:1",
												"type": "",
												"value": "1"
											},
											"variables": [
												{
													"name": "power_1",
													"nodeType": "YulTypedName",
													"src": "274:7:1",
													"type": ""
												}
											]
										},
										{
											"nodeType": "YulAssignment",
											"src": "295:16:1",
											"value": {
												"name": "power_1",
												"nodeType": "YulIdentifier",
												"src": "304:7:1"
											},
											"variableNames": [
												{
													"name": "power",
													"nodeType": "YulIdentifier",
													"src": "295:5:1"
												}
											]
										},
										{
											"nodeType": "YulAssignment",
											"src": "320:13:1",
											"value": {
												"name": "_base",
												"nodeType": "YulIdentifier",
												"src": "328:5:1"
											},
											"variableNames": [
												{
													"name": "base",
													"nodeType": "YulIdentifier",
													"src": "320:4:1"
												}
											]
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "384:228:1",
												"statements": [
													{
														"body": {
															"nodeType": "YulBlock",
															"src": "429:22:1",
															"statements": [
																{
																	"expression": {
																		"arguments": [],
																		"functionName": {
																			"name": "panic_error_0x11",
																			"nodeType": "YulIdentifier",
																			"src": "431:16:1"
																		},
																		"nodeType": "YulFunctionCall",
																		"src": "431:18:1"
																	},
																	"nodeType": "YulExpressionStatement",
																	"src": "431:18:1"
																}
															]
														},
														"condition": {
															"arguments": [
																{
																	"name": "base",
																	"nodeType": "YulIdentifier",
																	"src": "404:4:1"
																},
																{
																	"arguments": [
																		{
																			"arguments": [
																				{
																					"kind": "number",
																					"nodeType": "YulLiteral",
																					"src": "418:1:1",
																					"type": "",
																					"value": "0"
																				}
																			],
																			"functionName": {
																				"name": "not",
																				"nodeType": "YulIdentifier",
																				"src": "414:3:1"
																			},
																			"nodeType": "YulFunctionCall",
																			"src": "414:6:1"
																		},
																		{
																			"name": "base",
																			"nodeType": "YulIdentifier",
																			"src": "422:4:1"
																		}
																	],
																	"functionName": {
																		"name": "div",
																		"nodeType": "YulIdentifier",
																		"src": "410:3:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "410:17:1"
																}
															],
															"functionName": {
																"name": "gt",
																"nodeType": "YulIdentifier",
																"src": "401:2:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "401:27:1"
														},
														"nodeType": "YulIf",
														"src": "398:53:1"
													},
													{
														"body": {
															"nodeType": "YulBlock",
															"src": "490:29:1",
															"statements": [
																{
																	"nodeType": "YulAssignment",
																	"src": "492:25:1",
																	"value": {
																		"arguments": [
																			{
																				"name": "power",
																				"nodeType": "YulIdentifier",
																				"src": "505:5:1"
																			},
																			{
																				"name": "base",
																				"nodeType": "YulIdentifier",
																				"src": "512:4:1"
																			}
																		],
																		"functionName": {
																			"name": "mul",
																			"nodeType": "YulIdentifier",
																			"src": "501:3:1"
																		},
																		"nodeType": "YulFunctionCall",
																		"src": "501:16:1"
																	},
																	"variableNames": [
																		{
																			"name": "power",
																			"nodeType": "YulIdentifier",
																			"src": "492:5:1"
																		}
																	]
																}
															]
														},
														"condition": {
															"arguments": [
																{
																	"name": "exponent",
																	"nodeType": "YulIdentifier",
																	"src": "471:8:1"
																},
																{
																	"name": "power_1",
																	"nodeType": "YulIdentifier",
																	"src": "481:7:1"
																}
															],
															"functionName": {
																"name": "and",
																"nodeType": "YulIdentifier",
																"src": "467:3:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "467:22:1"
														},
														"nodeType": "YulIf",
														"src": "464:55:1"
													},
													{
														"nodeType": "YulAssignment",
														"src": "532:23:1",
														"value": {
															"arguments": [
																{
																	"name": "base",
																	"nodeType": "YulIdentifier",
																	"src": "544:4:1"
																},
																{
																	"name": "base",
																	"nodeType": "YulIdentifier",
																	"src": "550:4:1"
																}
															],
															"functionName": {
																"name": "mul",
																"nodeType": "YulIdentifier",
																"src": "540:3:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "540:15:1"
														},
														"variableNames": [
															{
																"name": "base",
																"nodeType": "YulIdentifier",
																"src": "532:4:1"
															}
														]
													},
													{
														"nodeType": "YulAssignment",
														"src": "568:34:1",
														"value": {
															"arguments": [
																{
																	"name": "power_1",
																	"nodeType": "YulIdentifier",
																	"src": "584:7:1"
																},
																{
																	"name": "exponent",
																	"nodeType": "YulIdentifier",
																	"src": "593:8:1"
																}
															],
															"functionName": {
																"name": "shr",
																"nodeType": "YulIdentifier",
																"src": "580:3:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "580:22:1"
														},
														"variableNames": [
															{
																"name": "exponent",
																"nodeType": "YulIdentifier",
																"src": "568:8:1"
															}
														]
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "exponent",
														"nodeType": "YulIdentifier",
														"src": "353:8:1"
													},
													{
														"name": "power_1",
														"nodeType": "YulIdentifier",
														"src": "363:7:1"
													}
												],
												"functionName": {
													"name": "gt",
													"nodeType": "YulIdentifier",
													"src": "350:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "350:21:1"
											},
											"nodeType": "YulForLoop",
											"post": {
												"nodeType": "YulBlock",
												"src": "372:3:1",
												"statements": []
											},
											"pre": {
												"nodeType": "YulBlock",
												"src": "346:3:1",
												"statements": []
											},
											"src": "342:270:1"
										}
									]
								},
								"name": "checked_exp_helper",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "_base",
										"nodeType": "YulTypedName",
										"src": "224:5:1",
										"type": ""
									},
									{
										"name": "exponent",
										"nodeType": "YulTypedName",
										"src": "231:8:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "power",
										"nodeType": "YulTypedName",
										"src": "244:5:1",
										"type": ""
									},
									{
										"name": "base",
										"nodeType": "YulTypedName",
										"src": "251:4:1",
										"type": ""
									}
								],
								"src": "196:422:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "691:72:1",
									"statements": [
										{
											"nodeType": "YulAssignment",
											"src": "701:56:1",
											"value": {
												"arguments": [
													{
														"name": "base",
														"nodeType": "YulIdentifier",
														"src": "731:4:1"
													},
													{
														"arguments": [
															{
																"name": "exponent",
																"nodeType": "YulIdentifier",
																"src": "741:8:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "751:4:1",
																"type": "",
																"value": "0xff"
															}
														],
														"functionName": {
															"name": "and",
															"nodeType": "YulIdentifier",
															"src": "737:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "737:19:1"
													}
												],
												"functionName": {
													"name": "checked_exp_unsigned",
													"nodeType": "YulIdentifier",
													"src": "710:20:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "710:47:1"
											},
											"variableNames": [
												{
													"name": "power",
													"nodeType": "YulIdentifier",
													"src": "701:5:1"
												}
											]
										}
									]
								},
								"name": "checked_exp_t_uint256_t_uint8",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "base",
										"nodeType": "YulTypedName",
										"src": "662:4:1",
										"type": ""
									},
									{
										"name": "exponent",
										"nodeType": "YulTypedName",
										"src": "668:8:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "power",
										"nodeType": "YulTypedName",
										"src": "681:5:1",
										"type": ""
									}
								],
								"src": "623:140:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "827:747:1",
									"statements": [
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "865:52:1",
												"statements": [
													{
														"nodeType": "YulAssignment",
														"src": "879:10:1",
														"value": {
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "888:1:1",
															"type": "",
															"value": "1"
														},
														"variableNames": [
															{
																"name": "power",
																"nodeType": "YulIdentifier",
																"src": "879:5:1"
															}
														]
													},
													{
														"nodeType": "YulLeave",
														"src": "902:5:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "exponent",
														"nodeType": "YulIdentifier",
														"src": "847:8:1"
													}
												],
												"functionName": {
													"name": "iszero",
													"nodeType": "YulIdentifier",
													"src": "840:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "840:16:1"
											},
											"nodeType": "YulIf",
											"src": "837:80:1"
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "950:52:1",
												"statements": [
													{
														"nodeType": "YulAssignment",
														"src": "964:10:1",
														"value": {
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "973:1:1",
															"type": "",
															"value": "0"
														},
														"variableNames": [
															{
																"name": "power",
																"nodeType": "YulIdentifier",
																"src": "964:5:1"
															}
														]
													},
													{
														"nodeType": "YulLeave",
														"src": "987:5:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "base",
														"nodeType": "YulIdentifier",
														"src": "936:4:1"
													}
												],
												"functionName": {
													"name": "iszero",
													"nodeType": "YulIdentifier",
													"src": "929:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "929:12:1"
											},
											"nodeType": "YulIf",
											"src": "926:76:1"
										},
										{
											"cases": [
												{
													"body": {
														"nodeType": "YulBlock",
														"src": "1038:52:1",
														"statements": [
															{
																"nodeType": "YulAssignment",
																"src": "1052:10:1",
																"value": {
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "1061:1:1",
																	"type": "",
																	"value": "1"
																},
																"variableNames": [
																	{
																		"name": "power",
																		"nodeType": "YulIdentifier",
																		"src": "1052:5:1"
																	}
																]
															},
															{
																"nodeType": "YulLeave",
																"src": "1075:5:1"
															}
														]
													},
													"nodeType": "YulCase",
													"src": "1031:59:1",
													"value": {
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1036:1:1",
														"type": "",
														"value": "1"
													}
												},
												{
													"body": {
														"nodeType": "YulBlock",
														"src": "1106:123:1",
														"statements": [
															{
																"body": {
																	"nodeType": "YulBlock",
																	"src": "1141:22:1",
																	"statements": [
																		{
																			"expression": {
																				"arguments": [],
																				"functionName": {
																					"name": "panic_error_0x11",
																					"nodeType": "YulIdentifier",
																					"src": "1143:16:1"
																				},
																				"nodeType": "YulFunctionCall",
																				"src": "1143:18:1"
																			},
																			"nodeType": "YulExpressionStatement",
																			"src": "1143:18:1"
																		}
																	]
																},
																"condition": {
																	"arguments": [
																		{
																			"name": "exponent",
																			"nodeType": "YulIdentifier",
																			"src": "1126:8:1"
																		},
																		{
																			"kind": "number",
																			"nodeType": "YulLiteral",
																			"src": "1136:3:1",
																			"type": "",
																			"value": "255"
																		}
																	],
																	"functionName": {
																		"name": "gt",
																		"nodeType": "YulIdentifier",
																		"src": "1123:2:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "1123:17:1"
																},
																"nodeType": "YulIf",
																"src": "1120:43:1"
															},
															{
																"nodeType": "YulAssignment",
																"src": "1176:25:1",
																"value": {
																	"arguments": [
																		{
																			"name": "exponent",
																			"nodeType": "YulIdentifier",
																			"src": "1189:8:1"
																		},
																		{
																			"kind": "number",
																			"nodeType": "YulLiteral",
																			"src": "1199:1:1",
																			"type": "",
																			"value": "1"
																		}
																	],
																	"functionName": {
																		"name": "shl",
																		"nodeType": "YulIdentifier",
																		"src": "1185:3:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "1185:16:1"
																},
																"variableNames": [
																	{
																		"name": "power",
																		"nodeType": "YulIdentifier",
																		"src": "1176:5:1"
																	}
																]
															},
															{
																"nodeType": "YulLeave",
																"src": "1214:5:1"
															}
														]
													},
													"nodeType": "YulCase",
													"src": "1099:130:1",
													"value": {
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1104:1:1",
														"type": "",
														"value": "2"
													}
												}
											],
											"expression": {
												"name": "base",
												"nodeType": "YulIdentifier",
												"src": "1018:4:1"
											},
											"nodeType": "YulSwitch",
											"src": "1011:218:1"
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "1327:70:1",
												"statements": [
													{
														"nodeType": "YulAssignment",
														"src": "1341:28:1",
														"value": {
															"arguments": [
																{
																	"name": "base",
																	"nodeType": "YulIdentifier",
																	"src": "1354:4:1"
																},
																{
																	"name": "exponent",
																	"nodeType": "YulIdentifier",
																	"src": "1360:8:1"
																}
															],
															"functionName": {
																"name": "exp",
																"nodeType": "YulIdentifier",
																"src": "1350:3:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "1350:19:1"
														},
														"variableNames": [
															{
																"name": "power",
																"nodeType": "YulIdentifier",
																"src": "1341:5:1"
															}
														]
													},
													{
														"nodeType": "YulLeave",
														"src": "1382:5:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "base",
																		"nodeType": "YulIdentifier",
																		"src": "1251:4:1"
																	},
																	{
																		"kind": "number",
																		"nodeType": "YulLiteral",
																		"src": "1257:2:1",
																		"type": "",
																		"value": "11"
																	}
																],
																"functionName": {
																	"name": "lt",
																	"nodeType": "YulIdentifier",
																	"src": "1248:2:1"
																},
																"nodeType": "YulFunctionCall",
																"src": "1248:12:1"
															},
															{
																"arguments": [
																	{
																		"name": "exponent",
																		"nodeType": "YulIdentifier",
																		"src": "1265:8:1"
																	},
																	{
																		"kind": "number",
																		"nodeType": "YulLiteral",
																		"src": "1275:2:1",
																		"type": "",
																		"value": "78"
																	}
																],
																"functionName": {
																	"name": "lt",
																	"nodeType": "YulIdentifier",
																	"src": "1262:2:1"
																},
																"nodeType": "YulFunctionCall",
																"src": "1262:16:1"
															}
														],
														"functionName": {
															"name": "and",
															"nodeType": "YulIdentifier",
															"src": "1244:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "1244:35:1"
													},
													{
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "base",
																		"nodeType": "YulIdentifier",
																		"src": "1288:4:1"
																	},
																	{
																		"kind": "number",
																		"nodeType": "YulLiteral",
																		"src": "1294:3:1",
																		"type": "",
																		"value": "307"
																	}
																],
																"functionName": {
																	"name": "lt",
																	"nodeType": "YulIdentifier",
																	"src": "1285:2:1"
																},
																"nodeType": "YulFunctionCall",
																"src": "1285:13:1"
															},
															{
																"arguments": [
																	{
																		"name": "exponent",
																		"nodeType": "YulIdentifier",
																		"src": "1303:8:1"
																	},
																	{
																		"kind": "number",
																		"nodeType": "YulLiteral",
																		"src": "1313:2:1",
																		"type": "",
																		"value": "32"
																	}
																],
																"functionName": {
																	"name": "lt",
																	"nodeType": "YulIdentifier",
																	"src": "1300:2:1"
																},
																"nodeType": "YulFunctionCall",
																"src": "1300:16:1"
															}
														],
														"functionName": {
															"name": "and",
															"nodeType": "YulIdentifier",
															"src": "1281:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "1281:36:1"
													}
												],
												"functionName": {
													"name": "or",
													"nodeType": "YulIdentifier",
													"src": "1241:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1241:77:1"
											},
											"nodeType": "YulIf",
											"src": "1238:159:1"
										},
										{
											"nodeType": "YulVariableDeclaration",
											"src": "1406:57:1",
											"value": {
												"arguments": [
													{
														"name": "base",
														"nodeType": "YulIdentifier",
														"src": "1448:4:1"
													},
													{
														"name": "exponent",
														"nodeType": "YulIdentifier",
														"src": "1454:8:1"
													}
												],
												"functionName": {
													"name": "checked_exp_helper",
													"nodeType": "YulIdentifier",
													"src": "1429:18:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1429:34:1"
											},
											"variables": [
												{
													"name": "power_1",
													"nodeType": "YulTypedName",
													"src": "1410:7:1",
													"type": ""
												},
												{
													"name": "base_1",
													"nodeType": "YulTypedName",
													"src": "1419:6:1",
													"type": ""
												}
											]
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "1508:22:1",
												"statements": [
													{
														"expression": {
															"arguments": [],
															"functionName": {
																"name": "panic_error_0x11",
																"nodeType": "YulIdentifier",
																"src": "1510:16:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "1510:18:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "1510:18:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "power_1",
														"nodeType": "YulIdentifier",
														"src": "1478:7:1"
													},
													{
														"arguments": [
															{
																"arguments": [
																	{
																		"kind": "number",
																		"nodeType": "YulLiteral",
																		"src": "1495:1:1",
																		"type": "",
																		"value": "0"
																	}
																],
																"functionName": {
																	"name": "not",
																	"nodeType": "YulIdentifier",
																	"src": "1491:3:1"
																},
																"nodeType": "YulFunctionCall",
																"src": "1491:6:1"
															},
															{
																"name": "base_1",
																"nodeType": "YulIdentifier",
																"src": "1499:6:1"
															}
														],
														"functionName": {
															"name": "div",
															"nodeType": "YulIdentifier",
															"src": "1487:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "1487:19:1"
													}
												],
												"functionName": {
													"name": "gt",
													"nodeType": "YulIdentifier",
													"src": "1475:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1475:32:1"
											},
											"nodeType": "YulIf",
											"src": "1472:58:1"
										},
										{
											"nodeType": "YulAssignment",
											"src": "1539:29:1",
											"value": {
												"arguments": [
													{
														"name": "power_1",
														"nodeType": "YulIdentifier",
														"src": "1552:7:1"
													},
													{
														"name": "base_1",
														"nodeType": "YulIdentifier",
														"src": "1561:6:1"
													}
												],
												"functionName": {
													"name": "mul",
													"nodeType": "YulIdentifier",
													"src": "1548:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1548:20:1"
											},
											"variableNames": [
												{
													"name": "power",
													"nodeType": "YulIdentifier",
													"src": "1539:5:1"
												}
											]
										}
									]
								},
								"name": "checked_exp_unsigned",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "base",
										"nodeType": "YulTypedName",
										"src": "798:4:1",
										"type": ""
									},
									{
										"name": "exponent",
										"nodeType": "YulTypedName",
										"src": "804:8:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "power",
										"nodeType": "YulTypedName",
										"src": "817:5:1",
										"type": ""
									}
								],
								"src": "768:806:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "1631:116:1",
									"statements": [
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "1690:22:1",
												"statements": [
													{
														"expression": {
															"arguments": [],
															"functionName": {
																"name": "panic_error_0x11",
																"nodeType": "YulIdentifier",
																"src": "1692:16:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "1692:18:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "1692:18:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "x",
																		"nodeType": "YulIdentifier",
																		"src": "1662:1:1"
																	}
																],
																"functionName": {
																	"name": "iszero",
																	"nodeType": "YulIdentifier",
																	"src": "1655:6:1"
																},
																"nodeType": "YulFunctionCall",
																"src": "1655:9:1"
															}
														],
														"functionName": {
															"name": "iszero",
															"nodeType": "YulIdentifier",
															"src": "1648:6:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "1648:17:1"
													},
													{
														"arguments": [
															{
																"name": "y",
																"nodeType": "YulIdentifier",
																"src": "1670:1:1"
															},
															{
																"arguments": [
																	{
																		"arguments": [
																			{
																				"kind": "number",
																				"nodeType": "YulLiteral",
																				"src": "1681:1:1",
																				"type": "",
																				"value": "0"
																			}
																		],
																		"functionName": {
																			"name": "not",
																			"nodeType": "YulIdentifier",
																			"src": "1677:3:1"
																		},
																		"nodeType": "YulFunctionCall",
																		"src": "1677:6:1"
																	},
																	{
																		"name": "x",
																		"nodeType": "YulIdentifier",
																		"src": "1685:1:1"
																	}
																],
																"functionName": {
																	"name": "div",
																	"nodeType": "YulIdentifier",
																	"src": "1673:3:1"
																},
																"nodeType": "YulFunctionCall",
																"src": "1673:14:1"
															}
														],
														"functionName": {
															"name": "gt",
															"nodeType": "YulIdentifier",
															"src": "1667:2:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "1667:21:1"
													}
												],
												"functionName": {
													"name": "and",
													"nodeType": "YulIdentifier",
													"src": "1644:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1644:45:1"
											},
											"nodeType": "YulIf",
											"src": "1641:71:1"
										},
										{
											"nodeType": "YulAssignment",
											"src": "1721:20:1",
											"value": {
												"arguments": [
													{
														"name": "x",
														"nodeType": "YulIdentifier",
														"src": "1736:1:1"
													},
													{
														"name": "y",
														"nodeType": "YulIdentifier",
														"src": "1739:1:1"
													}
												],
												"functionName": {
													"name": "mul",
													"nodeType": "YulIdentifier",
													"src": "1732:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1732:9:1"
											},
											"variableNames": [
												{
													"name": "product",
													"nodeType": "YulIdentifier",
													"src": "1721:7:1"
												}
											]
										}
									]
								},
								"name": "checked_mul_t_uint256",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "x",
										"nodeType": "YulTypedName",
										"src": "1610:1:1",
										"type": ""
									},
									{
										"name": "y",
										"nodeType": "YulTypedName",
										"src": "1613:1:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "product",
										"nodeType": "YulTypedName",
										"src": "1619:7:1",
										"type": ""
									}
								],
								"src": "1579:168:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "1807:325:1",
									"statements": [
										{
											"nodeType": "YulAssignment",
											"src": "1817:22:1",
											"value": {
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1831:1:1",
														"type": "",
														"value": "1"
													},
													{
														"name": "data",
														"nodeType": "YulIdentifier",
														"src": "1834:4:1"
													}
												],
												"functionName": {
													"name": "shr",
													"nodeType": "YulIdentifier",
													"src": "1827:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1827:12:1"
											},
											"variableNames": [
												{
													"name": "length",
													"nodeType": "YulIdentifier",
													"src": "1817:6:1"
												}
											]
										},
										{
											"nodeType": "YulVariableDeclaration",
											"src": "1848:38:1",
											"value": {
												"arguments": [
													{
														"name": "data",
														"nodeType": "YulIdentifier",
														"src": "1878:4:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1884:1:1",
														"type": "",
														"value": "1"
													}
												],
												"functionName": {
													"name": "and",
													"nodeType": "YulIdentifier",
													"src": "1874:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1874:12:1"
											},
											"variables": [
												{
													"name": "outOfPlaceEncoding",
													"nodeType": "YulTypedName",
													"src": "1852:18:1",
													"type": ""
												}
											]
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "1925:31:1",
												"statements": [
													{
														"nodeType": "YulAssignment",
														"src": "1927:27:1",
														"value": {
															"arguments": [
																{
																	"name": "length",
																	"nodeType": "YulIdentifier",
																	"src": "1941:6:1"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "1949:4:1",
																	"type": "",
																	"value": "0x7f"
																}
															],
															"functionName": {
																"name": "and",
																"nodeType": "YulIdentifier",
																"src": "1937:3:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "1937:17:1"
														},
														"variableNames": [
															{
																"name": "length",
																"nodeType": "YulIdentifier",
																"src": "1927:6:1"
															}
														]
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "outOfPlaceEncoding",
														"nodeType": "YulIdentifier",
														"src": "1905:18:1"
													}
												],
												"functionName": {
													"name": "iszero",
													"nodeType": "YulIdentifier",
													"src": "1898:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1898:26:1"
											},
											"nodeType": "YulIf",
											"src": "1895:61:1"
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "2015:111:1",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "2036:1:1",
																	"type": "",
																	"value": "0"
																},
																{
																	"arguments": [
																		{
																			"kind": "number",
																			"nodeType": "YulLiteral",
																			"src": "2043:3:1",
																			"type": "",
																			"value": "224"
																		},
																		{
																			"kind": "number",
																			"nodeType": "YulLiteral",
																			"src": "2048:10:1",
																			"type": "",
																			"value": "0x4e487b71"
																		}
																	],
																	"functionName": {
																		"name": "shl",
																		"nodeType": "YulIdentifier",
																		"src": "2039:3:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "2039:20:1"
																}
															],
															"functionName": {
																"name": "mstore",
																"nodeType": "YulIdentifier",
																"src": "2029:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "2029:31:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "2029:31:1"
													},
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "2080:1:1",
																	"type": "",
																	"value": "4"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "2083:4:1",
																	"type": "",
																	"value": "0x22"
																}
															],
															"functionName": {
																"name": "mstore",
																"nodeType": "YulIdentifier",
																"src": "2073:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "2073:15:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "2073:15:1"
													},
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "2108:1:1",
																	"type": "",
																	"value": "0"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "2111:4:1",
																	"type": "",
																	"value": "0x24"
																}
															],
															"functionName": {
																"name": "revert",
																"nodeType": "YulIdentifier",
																"src": "2101:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "2101:15:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "2101:15:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "outOfPlaceEncoding",
														"nodeType": "YulIdentifier",
														"src": "1971:18:1"
													},
													{
														"arguments": [
															{
																"name": "length",
																"nodeType": "YulIdentifier",
																"src": "1994:6:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "2002:2:1",
																"type": "",
																"value": "32"
															}
														],
														"functionName": {
															"name": "lt",
															"nodeType": "YulIdentifier",
															"src": "1991:2:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "1991:14:1"
													}
												],
												"functionName": {
													"name": "eq",
													"nodeType": "YulIdentifier",
													"src": "1968:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1968:38:1"
											},
											"nodeType": "YulIf",
											"src": "1965:161:1"
										}
									]
								},
								"name": "extract_byte_array_length",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "data",
										"nodeType": "YulTypedName",
										"src": "1787:4:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "length",
										"nodeType": "YulTypedName",
										"src": "1796:6:1",
										"type": ""
									}
								],
								"src": "1752:380:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "2169:95:1",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "2186:1:1",
														"type": "",
														"value": "0"
													},
													{
														"arguments": [
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "2193:3:1",
																"type": "",
																"value": "224"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "2198:10:1",
																"type": "",
																"value": "0x4e487b71"
															}
														],
														"functionName": {
															"name": "shl",
															"nodeType": "YulIdentifier",
															"src": "2189:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "2189:20:1"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "2179:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "2179:31:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "2179:31:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "2226:1:1",
														"type": "",
														"value": "4"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "2229:4:1",
														"type": "",
														"value": "0x11"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "2219:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "2219:15:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "2219:15:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "2250:1:1",
														"type": "",
														"value": "0"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "2253:4:1",
														"type": "",
														"value": "0x24"
													}
												],
												"functionName": {
													"name": "revert",
													"nodeType": "YulIdentifier",
													"src": "2243:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "2243:15:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "2243:15:1"
										}
									]
								},
								"name": "panic_error_0x11",
								"nodeType": "YulFunctionDefinition",
								"src": "2137:127:1"
							}
						]
					},
					"contents": "{\n    { }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function checked_exp_helper(_base, exponent) -> power, base\n    {\n        let power_1 := 1\n        power := power_1\n        base := _base\n        for { } gt(exponent, power_1) { }\n        {\n            if gt(base, div(not(0), base)) { panic_error_0x11() }\n            if and(exponent, power_1) { power := mul(power, base) }\n            base := mul(base, base)\n            exponent := shr(power_1, exponent)\n        }\n    }\n    function checked_exp_t_uint256_t_uint8(base, exponent) -> power\n    {\n        power := checked_exp_unsigned(base, and(exponent, 0xff))\n    }\n    function checked_exp_unsigned(base, exponent) -> power\n    {\n        if iszero(exponent)\n        {\n            power := 1\n            leave\n        }\n        if iszero(base)\n        {\n            power := 0\n            leave\n        }\n        switch base\n        case 1 {\n            power := 1\n            leave\n        }\n        case 2 {\n            if gt(exponent, 255) { panic_error_0x11() }\n            power := shl(exponent, 1)\n            leave\n        }\n        if or(and(lt(base, 11), lt(exponent, 78)), and(lt(base, 307), lt(exponent, 32)))\n        {\n            power := exp(base, exponent)\n            leave\n        }\n        let power_1, base_1 := checked_exp_helper(base, exponent)\n        if gt(power_1, div(not(0), base_1)) { panic_error_0x11() }\n        power := mul(power_1, base_1)\n    }\n    function checked_mul_t_uint256(x, y) -> product\n    {\n        if and(iszero(iszero(x)), gt(y, div(not(0), x))) { panic_error_0x11() }\n        product := mul(x, y)\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := shr(1, data)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n}",
					"id": 1,
					"language": "Yul",
					"name": "#utility.yul"
				}
			],
			"linkReferences": {},
			"object": "60c060405260086080819052672a32b9ba21b7b4b760c11b60a09081526200002b916003919062000128565b506040805180820190915260038082526254544360e81b6020909201918252620000589160049162000128565b506005805460ff191660099081179091556200007690600a62000217565b620000859062989680620002e5565b6006553480156200009557600080fd5b50600080546001600160a01b031916339081178255604051909182917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35060065433600081815260016020908152604080832085905551938452919290917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a36200035a565b828054620001369062000307565b90600052602060002090601f0160209004810192826200015a5760008555620001a5565b82601f106200017557805160ff1916838001178555620001a5565b82800160010185558215620001a5579182015b82811115620001a557825182559160200191906001019062000188565b50620001b3929150620001b7565b5090565b5b80821115620001b35760008155600101620001b8565b600181815b808511156200020f578160001904821115620001f357620001f362000344565b808516156200020157918102915b93841c9390800290620001d3565b509250929050565b60006200022860ff8416836200022f565b9392505050565b6000826200024057506001620002df565b816200024f57506000620002df565b8160018114620002685760028114620002735762000293565b6001915050620002df565b60ff84111562000287576200028762000344565b50506001821b620002df565b5060208310610133831016604e8410600b8410161715620002b8575081810a620002df565b620002c48383620001ce565b8060001904821115620002db57620002db62000344565b0290505b92915050565b600081600019048311821515161562000302576200030262000344565b500290565b600181811c908216806200031c57607f821691505b602082108114156200033e57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b610d48806200036a6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063893d20e811610097578063a457c2d711610066578063a457c2d714610217578063a9059cbb1461022a578063dd62ed3e1461023d578063f2fde38b1461027657600080fd5b8063893d20e8146101c65780638da5cb5b146101eb57806395d89b41146101fc578063a0712d681461020457600080fd5b8063313ce567116100d3578063313ce5671461016b578063395093511461018057806370a0823114610193578063715018a6146101bc57600080fd5b806306fdde0314610105578063095ea7b31461012357806318160ddd1461014657806323b872dd14610158575b600080fd5b61010d610289565b60405161011a9190610b95565b60405180910390f35b610136610131366004610b52565b61031b565b604051901515815260200161011a565b6006545b60405190815260200161011a565b610136610166366004610b16565b610331565b60055460405160ff909116815260200161011a565b61013661018e366004610b52565b61039a565b61014a6101a1366004610ac8565b6001600160a01b031660009081526001602052604090205490565b6101c46103d0565b005b6000546001600160a01b03165b6040516001600160a01b03909116815260200161011a565b6000546001600160a01b03166101d3565b61010d61044d565b610136610212366004610b7c565b61045c565b610136610225366004610b52565b61049a565b610136610238366004610b52565b6104e9565b61014a61024b366004610ae3565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6101c4610284366004610ac8565b6104f6565b60606003805461029890610c4e565b80601f01602080910402602001604051908101604052809291908181526020018280546102c490610c4e565b80156103115780601f106102e657610100808354040283529160200191610311565b820191906000526020600020905b8154815290600101906020018083116102f457829003601f168201915b5050505050905090565b60006103283384846105e0565b50600192915050565b600061033e848484610755565b610390843361038b85604051806060016040528060288152602001610cc6602891396001600160a01b038a166000908152600260209081526040808320338452909152902054919061092b565b6105e0565b5060019392505050565b3360008181526002602090815260408083206001600160a01b0387168452909152812054909161032891859061038b9086610965565b6000546001600160a01b031633146104035760405162461bcd60e51b81526004016103fa90610bea565b60405180910390fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b60606004805461029890610c4e565b600080546001600160a01b031633146104875760405162461bcd60e51b81526004016103fa90610bea565b61049133836109cb565b5060015b919050565b6000610328338461038b85604051806060016040528060258152602001610cee602591393360009081526002602090815260408083206001600160a01b038d168452909152902054919061092b565b6000610328338484610755565b6000546001600160a01b031633146105205760405162461bcd60e51b81526004016103fa90610bea565b6001600160a01b0381166105855760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103fa565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0383166106425760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103fa565b6001600160a01b0382166106a35760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103fa565b600081116106f35760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20617070726f766520616d6f756e74206973207a65726f00000060448201526064016103fa565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166107b95760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103fa565b6001600160a01b03821661081b5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103fa565b6000811161086b5760405162461bcd60e51b815260206004820152601e60248201527f45524332303a207472616e7366657220616d6f756e74206973207a65726f000060448201526064016103fa565b6108a881604051806060016040528060268152602001610ca0602691396001600160a01b038616600090815260016020526040902054919061092b565b6001600160a01b0380851660009081526001602052604080822093909355908416815220546108d79082610965565b6001600160a01b0380841660008181526001602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906107489085815260200190565b6000818484111561094f5760405162461bcd60e51b81526004016103fa9190610b95565b50600061095c8486610c37565b95945050505050565b6000806109728385610c1f565b9050838110156109c45760405162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f77000000000060448201526064016103fa565b9392505050565b6001600160a01b038216610a215760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103fa565b600654610a2e9082610965565b6006556001600160a01b038216600090815260016020526040902054610a549082610965565b6001600160a01b0383166000818152600160205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610aa59085815260200190565b60405180910390a35050565b80356001600160a01b038116811461049557600080fd5b600060208284031215610ada57600080fd5b6109c482610ab1565b60008060408385031215610af657600080fd5b610aff83610ab1565b9150610b0d60208401610ab1565b90509250929050565b600080600060608486031215610b2b57600080fd5b610b3484610ab1565b9250610b4260208501610ab1565b9150604084013590509250925092565b60008060408385031215610b6557600080fd5b610b6e83610ab1565b946020939093013593505050565b600060208284031215610b8e57600080fd5b5035919050565b600060208083528351808285015260005b81811015610bc257858101830151858201604001528201610ba6565b81811115610bd4576000604083870101525b50601f01601f1916929092016040019392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60008219821115610c3257610c32610c89565b500190565b600082821015610c4957610c49610c89565b500390565b600181811c90821680610c6257607f821691505b60208210811415610c8357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfe45524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220adc3290b01cb6e7a5dc94cf3c89b1b739a15d81cfb4d831dafba5a8474e5f6b964736f6c63430008070033",
			"opcodes": "PUSH1 0xC0 PUSH1 0x40 MSTORE PUSH1 0x8 PUSH1 0x80 DUP2 SWAP1 MSTORE PUSH8 0x2A32B9BA21B7B4B7 PUSH1 0xC1 SHL PUSH1 0xA0 SWAP1 DUP2 MSTORE PUSH3 0x2B SWAP2 PUSH1 0x3 SWAP2 SWAP1 PUSH3 0x128 JUMP JUMPDEST POP PUSH1 0x40 DUP1 MLOAD DUP1 DUP3 ADD SWAP1 SWAP2 MSTORE PUSH1 0x3 DUP1 DUP3 MSTORE PUSH3 0x545443 PUSH1 0xE8 SHL PUSH1 0x20 SWAP1 SWAP3 ADD SWAP2 DUP3 MSTORE PUSH3 0x58 SWAP2 PUSH1 0x4 SWAP2 PUSH3 0x128 JUMP JUMPDEST POP PUSH1 0x5 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0x9 SWAP1 DUP2 OR SWAP1 SWAP2 SSTORE PUSH3 0x76 SWAP1 PUSH1 0xA PUSH3 0x217 JUMP JUMPDEST PUSH3 0x85 SWAP1 PUSH3 0x989680 PUSH3 0x2E5 JUMP JUMPDEST PUSH1 0x6 SSTORE CALLVALUE DUP1 ISZERO PUSH3 0x95 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT AND CALLER SWAP1 DUP2 OR DUP3 SSTORE PUSH1 0x40 MLOAD SWAP1 SWAP2 DUP3 SWAP2 PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 SWAP1 DUP3 SWAP1 LOG3 POP PUSH1 0x6 SLOAD CALLER PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 DUP6 SWAP1 SSTORE MLOAD SWAP4 DUP5 MSTORE SWAP2 SWAP3 SWAP1 SWAP2 PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF SWAP2 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 PUSH3 0x35A JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH3 0x136 SWAP1 PUSH3 0x307 JUMP JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH3 0x15A JUMPI PUSH1 0x0 DUP6 SSTORE PUSH3 0x1A5 JUMP JUMPDEST DUP3 PUSH1 0x1F LT PUSH3 0x175 JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH3 0x1A5 JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH3 0x1A5 JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH3 0x1A5 JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH3 0x188 JUMP JUMPDEST POP PUSH3 0x1B3 SWAP3 SWAP2 POP PUSH3 0x1B7 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST JUMPDEST DUP1 DUP3 GT ISZERO PUSH3 0x1B3 JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH3 0x1B8 JUMP JUMPDEST PUSH1 0x1 DUP2 DUP2 JUMPDEST DUP1 DUP6 GT ISZERO PUSH3 0x20F JUMPI DUP2 PUSH1 0x0 NOT DIV DUP3 GT ISZERO PUSH3 0x1F3 JUMPI PUSH3 0x1F3 PUSH3 0x344 JUMP JUMPDEST DUP1 DUP6 AND ISZERO PUSH3 0x201 JUMPI SWAP2 DUP2 MUL SWAP2 JUMPDEST SWAP4 DUP5 SHR SWAP4 SWAP1 DUP1 MUL SWAP1 PUSH3 0x1D3 JUMP JUMPDEST POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x228 PUSH1 0xFF DUP5 AND DUP4 PUSH3 0x22F JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH3 0x240 JUMPI POP PUSH1 0x1 PUSH3 0x2DF JUMP JUMPDEST DUP2 PUSH3 0x24F JUMPI POP PUSH1 0x0 PUSH3 0x2DF JUMP JUMPDEST DUP2 PUSH1 0x1 DUP2 EQ PUSH3 0x268 JUMPI PUSH1 0x2 DUP2 EQ PUSH3 0x273 JUMPI PUSH3 0x293 JUMP JUMPDEST PUSH1 0x1 SWAP2 POP POP PUSH3 0x2DF JUMP JUMPDEST PUSH1 0xFF DUP5 GT ISZERO PUSH3 0x287 JUMPI PUSH3 0x287 PUSH3 0x344 JUMP JUMPDEST POP POP PUSH1 0x1 DUP3 SHL PUSH3 0x2DF JUMP JUMPDEST POP PUSH1 0x20 DUP4 LT PUSH2 0x133 DUP4 LT AND PUSH1 0x4E DUP5 LT PUSH1 0xB DUP5 LT AND OR ISZERO PUSH3 0x2B8 JUMPI POP DUP2 DUP2 EXP PUSH3 0x2DF JUMP JUMPDEST PUSH3 0x2C4 DUP4 DUP4 PUSH3 0x1CE JUMP JUMPDEST DUP1 PUSH1 0x0 NOT DIV DUP3 GT ISZERO PUSH3 0x2DB JUMPI PUSH3 0x2DB PUSH3 0x344 JUMP JUMPDEST MUL SWAP1 POP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 PUSH1 0x0 NOT DIV DUP4 GT DUP3 ISZERO ISZERO AND ISZERO PUSH3 0x302 JUMPI PUSH3 0x302 PUSH3 0x344 JUMP JUMPDEST POP MUL SWAP1 JUMP JUMPDEST PUSH1 0x1 DUP2 DUP2 SHR SWAP1 DUP3 AND DUP1 PUSH3 0x31C JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 EQ ISZERO PUSH3 0x33E JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH2 0xD48 DUP1 PUSH3 0x36A PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x100 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x893D20E8 GT PUSH2 0x97 JUMPI DUP1 PUSH4 0xA457C2D7 GT PUSH2 0x66 JUMPI DUP1 PUSH4 0xA457C2D7 EQ PUSH2 0x217 JUMPI DUP1 PUSH4 0xA9059CBB EQ PUSH2 0x22A JUMPI DUP1 PUSH4 0xDD62ED3E EQ PUSH2 0x23D JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x276 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 PUSH4 0x893D20E8 EQ PUSH2 0x1C6 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x1EB JUMPI DUP1 PUSH4 0x95D89B41 EQ PUSH2 0x1FC JUMPI DUP1 PUSH4 0xA0712D68 EQ PUSH2 0x204 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 PUSH4 0x313CE567 GT PUSH2 0xD3 JUMPI DUP1 PUSH4 0x313CE567 EQ PUSH2 0x16B JUMPI DUP1 PUSH4 0x39509351 EQ PUSH2 0x180 JUMPI DUP1 PUSH4 0x70A08231 EQ PUSH2 0x193 JUMPI DUP1 PUSH4 0x715018A6 EQ PUSH2 0x1BC JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 PUSH4 0x6FDDE03 EQ PUSH2 0x105 JUMPI DUP1 PUSH4 0x95EA7B3 EQ PUSH2 0x123 JUMPI DUP1 PUSH4 0x18160DDD EQ PUSH2 0x146 JUMPI DUP1 PUSH4 0x23B872DD EQ PUSH2 0x158 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x10D PUSH2 0x289 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x11A SWAP2 SWAP1 PUSH2 0xB95 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x136 PUSH2 0x131 CALLDATASIZE PUSH1 0x4 PUSH2 0xB52 JUMP JUMPDEST PUSH2 0x31B JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x11A JUMP JUMPDEST PUSH1 0x6 SLOAD JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x11A JUMP JUMPDEST PUSH2 0x136 PUSH2 0x166 CALLDATASIZE PUSH1 0x4 PUSH2 0xB16 JUMP JUMPDEST PUSH2 0x331 JUMP JUMPDEST PUSH1 0x5 SLOAD PUSH1 0x40 MLOAD PUSH1 0xFF SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x11A JUMP JUMPDEST PUSH2 0x136 PUSH2 0x18E CALLDATASIZE PUSH1 0x4 PUSH2 0xB52 JUMP JUMPDEST PUSH2 0x39A JUMP JUMPDEST PUSH2 0x14A PUSH2 0x1A1 CALLDATASIZE PUSH1 0x4 PUSH2 0xAC8 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD SWAP1 JUMP JUMPDEST PUSH2 0x1C4 PUSH2 0x3D0 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x11A JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH2 0x1D3 JUMP JUMPDEST PUSH2 0x10D PUSH2 0x44D JUMP JUMPDEST PUSH2 0x136 PUSH2 0x212 CALLDATASIZE PUSH1 0x4 PUSH2 0xB7C JUMP JUMPDEST PUSH2 0x45C JUMP JUMPDEST PUSH2 0x136 PUSH2 0x225 CALLDATASIZE PUSH1 0x4 PUSH2 0xB52 JUMP JUMPDEST PUSH2 0x49A JUMP JUMPDEST PUSH2 0x136 PUSH2 0x238 CALLDATASIZE PUSH1 0x4 PUSH2 0xB52 JUMP JUMPDEST PUSH2 0x4E9 JUMP JUMPDEST PUSH2 0x14A PUSH2 0x24B CALLDATASIZE PUSH1 0x4 PUSH2 0xAE3 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP2 DUP3 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP4 SWAP1 SWAP5 AND DUP3 MSTORE SWAP2 SWAP1 SWAP2 MSTORE KECCAK256 SLOAD SWAP1 JUMP JUMPDEST PUSH2 0x1C4 PUSH2 0x284 CALLDATASIZE PUSH1 0x4 PUSH2 0xAC8 JUMP JUMPDEST PUSH2 0x4F6 JUMP JUMPDEST PUSH1 0x60 PUSH1 0x3 DUP1 SLOAD PUSH2 0x298 SWAP1 PUSH2 0xC4E JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0x2C4 SWAP1 PUSH2 0xC4E JUMP JUMPDEST DUP1 ISZERO PUSH2 0x311 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x2E6 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x311 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x2F4 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH2 0x328 CALLER DUP5 DUP5 PUSH2 0x5E0 JUMP JUMPDEST POP PUSH1 0x1 SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x33E DUP5 DUP5 DUP5 PUSH2 0x755 JUMP JUMPDEST PUSH2 0x390 DUP5 CALLER PUSH2 0x38B DUP6 PUSH1 0x40 MLOAD DUP1 PUSH1 0x60 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x28 DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0xCC6 PUSH1 0x28 SWAP2 CODECOPY PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP11 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 CALLER DUP5 MSTORE SWAP1 SWAP2 MSTORE SWAP1 KECCAK256 SLOAD SWAP2 SWAP1 PUSH2 0x92B JUMP JUMPDEST PUSH2 0x5E0 JUMP JUMPDEST POP PUSH1 0x1 SWAP4 SWAP3 POP POP POP JUMP JUMPDEST CALLER PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP8 AND DUP5 MSTORE SWAP1 SWAP2 MSTORE DUP2 KECCAK256 SLOAD SWAP1 SWAP2 PUSH2 0x328 SWAP2 DUP6 SWAP1 PUSH2 0x38B SWAP1 DUP7 PUSH2 0x965 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND CALLER EQ PUSH2 0x403 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x3FA SWAP1 PUSH2 0xBEA JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 SWAP2 AND SWAP1 PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 SWAP1 DUP4 SWAP1 LOG3 PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT AND SWAP1 SSTORE JUMP JUMPDEST PUSH1 0x60 PUSH1 0x4 DUP1 SLOAD PUSH2 0x298 SWAP1 PUSH2 0xC4E JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND CALLER EQ PUSH2 0x487 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x3FA SWAP1 PUSH2 0xBEA JUMP JUMPDEST PUSH2 0x491 CALLER DUP4 PUSH2 0x9CB JUMP JUMPDEST POP PUSH1 0x1 JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x328 CALLER DUP5 PUSH2 0x38B DUP6 PUSH1 0x40 MLOAD DUP1 PUSH1 0x60 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x25 DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0xCEE PUSH1 0x25 SWAP2 CODECOPY CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP14 AND DUP5 MSTORE SWAP1 SWAP2 MSTORE SWAP1 KECCAK256 SLOAD SWAP2 SWAP1 PUSH2 0x92B JUMP JUMPDEST PUSH1 0x0 PUSH2 0x328 CALLER DUP5 DUP5 PUSH2 0x755 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND CALLER EQ PUSH2 0x520 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x3FA SWAP1 PUSH2 0xBEA JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND PUSH2 0x585 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x26 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4F776E61626C653A206E6577206F776E657220697320746865207A65726F2061 PUSH1 0x44 DUP3 ADD MSTORE PUSH6 0x646472657373 PUSH1 0xD0 SHL PUSH1 0x64 DUP3 ADD MSTORE PUSH1 0x84 ADD PUSH2 0x3FA JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP1 DUP6 AND SWAP4 SWAP3 AND SWAP2 PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 SWAP2 LOG3 PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP3 SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND PUSH2 0x642 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 DUP1 DUP3 ADD MSTORE PUSH32 0x45524332303A20617070726F76652066726F6D20746865207A65726F20616464 PUSH1 0x44 DUP3 ADD MSTORE PUSH4 0x72657373 PUSH1 0xE0 SHL PUSH1 0x64 DUP3 ADD MSTORE PUSH1 0x84 ADD PUSH2 0x3FA JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND PUSH2 0x6A3 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x22 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x45524332303A20617070726F766520746F20746865207A65726F206164647265 PUSH1 0x44 DUP3 ADD MSTORE PUSH2 0x7373 PUSH1 0xF0 SHL PUSH1 0x64 DUP3 ADD MSTORE PUSH1 0x84 ADD PUSH2 0x3FA JUMP JUMPDEST PUSH1 0x0 DUP2 GT PUSH2 0x6F3 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x1D PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x45524332303A20617070726F766520616D6F756E74206973207A65726F000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x3FA JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 DUP2 AND PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP5 DUP8 AND DUP1 DUP5 MSTORE SWAP5 DUP3 MSTORE SWAP2 DUP3 SWAP1 KECCAK256 DUP6 SWAP1 SSTORE SWAP1 MLOAD DUP5 DUP2 MSTORE PUSH32 0x8C5BE1E5EBEC7D5BD14F71427D1E84F3DD0314C0F7B2291E5B200AC8C7C3B925 SWAP2 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND PUSH2 0x7B9 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x25 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x45524332303A207472616E736665722066726F6D20746865207A65726F206164 PUSH1 0x44 DUP3 ADD MSTORE PUSH5 0x6472657373 PUSH1 0xD8 SHL PUSH1 0x64 DUP3 ADD MSTORE PUSH1 0x84 ADD PUSH2 0x3FA JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND PUSH2 0x81B JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x23 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x45524332303A207472616E7366657220746F20746865207A65726F2061646472 PUSH1 0x44 DUP3 ADD MSTORE PUSH3 0x657373 PUSH1 0xE8 SHL PUSH1 0x64 DUP3 ADD MSTORE PUSH1 0x84 ADD PUSH2 0x3FA JUMP JUMPDEST PUSH1 0x0 DUP2 GT PUSH2 0x86B JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x1E PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x45524332303A207472616E7366657220616D6F756E74206973207A65726F0000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x3FA JUMP JUMPDEST PUSH2 0x8A8 DUP2 PUSH1 0x40 MLOAD DUP1 PUSH1 0x60 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x26 DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0xCA0 PUSH1 0x26 SWAP2 CODECOPY PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP7 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD SWAP2 SWAP1 PUSH2 0x92B JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP1 DUP6 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 DUP1 DUP3 KECCAK256 SWAP4 SWAP1 SWAP4 SSTORE SWAP1 DUP5 AND DUP2 MSTORE KECCAK256 SLOAD PUSH2 0x8D7 SWAP1 DUP3 PUSH2 0x965 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP1 DUP5 AND PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 DUP2 SWAP1 KECCAK256 SWAP4 SWAP1 SWAP4 SSTORE SWAP2 MLOAD SWAP1 DUP6 AND SWAP1 PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF SWAP1 PUSH2 0x748 SWAP1 DUP6 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP2 DUP5 DUP5 GT ISZERO PUSH2 0x94F JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x3FA SWAP2 SWAP1 PUSH2 0xB95 JUMP JUMPDEST POP PUSH1 0x0 PUSH2 0x95C DUP5 DUP7 PUSH2 0xC37 JUMP JUMPDEST SWAP6 SWAP5 POP POP POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x972 DUP4 DUP6 PUSH2 0xC1F JUMP JUMPDEST SWAP1 POP DUP4 DUP2 LT ISZERO PUSH2 0x9C4 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x1B PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x536166654D6174683A206164646974696F6E206F766572666C6F770000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x3FA JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND PUSH2 0xA21 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x1F PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x45524332303A206D696E7420746F20746865207A65726F206164647265737300 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x3FA JUMP JUMPDEST PUSH1 0x6 SLOAD PUSH2 0xA2E SWAP1 DUP3 PUSH2 0x965 JUMP JUMPDEST PUSH1 0x6 SSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH2 0xA54 SWAP1 DUP3 PUSH2 0x965 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 DUP1 DUP3 KECCAK256 SWAP4 SWAP1 SWAP4 SSTORE SWAP2 MLOAD SWAP1 SWAP2 SWAP1 PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF SWAP1 PUSH2 0xAA5 SWAP1 DUP6 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST DUP1 CALLDATALOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH2 0x495 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xADA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x9C4 DUP3 PUSH2 0xAB1 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0xAF6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xAFF DUP4 PUSH2 0xAB1 JUMP JUMPDEST SWAP2 POP PUSH2 0xB0D PUSH1 0x20 DUP5 ADD PUSH2 0xAB1 JUMP JUMPDEST SWAP1 POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0xB2B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xB34 DUP5 PUSH2 0xAB1 JUMP JUMPDEST SWAP3 POP PUSH2 0xB42 PUSH1 0x20 DUP6 ADD PUSH2 0xAB1 JUMP JUMPDEST SWAP2 POP PUSH1 0x40 DUP5 ADD CALLDATALOAD SWAP1 POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0xB65 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xB6E DUP4 PUSH2 0xAB1 JUMP JUMPDEST SWAP5 PUSH1 0x20 SWAP4 SWAP1 SWAP4 ADD CALLDATALOAD SWAP4 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xB8E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP1 DUP4 MSTORE DUP4 MLOAD DUP1 DUP3 DUP6 ADD MSTORE PUSH1 0x0 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0xBC2 JUMPI DUP6 DUP2 ADD DUP4 ADD MLOAD DUP6 DUP3 ADD PUSH1 0x40 ADD MSTORE DUP3 ADD PUSH2 0xBA6 JUMP JUMPDEST DUP2 DUP2 GT ISZERO PUSH2 0xBD4 JUMPI PUSH1 0x0 PUSH1 0x40 DUP4 DUP8 ADD ADD MSTORE JUMPDEST POP PUSH1 0x1F ADD PUSH1 0x1F NOT AND SWAP3 SWAP1 SWAP3 ADD PUSH1 0x40 ADD SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE DUP2 DUP2 ADD MSTORE PUSH32 0x4F776E61626C653A2063616C6C6572206973206E6F7420746865206F776E6572 PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 NOT DUP3 GT ISZERO PUSH2 0xC32 JUMPI PUSH2 0xC32 PUSH2 0xC89 JUMP JUMPDEST POP ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 LT ISZERO PUSH2 0xC49 JUMPI PUSH2 0xC49 PUSH2 0xC89 JUMP JUMPDEST POP SUB SWAP1 JUMP JUMPDEST PUSH1 0x1 DUP2 DUP2 SHR SWAP1 DUP3 AND DUP1 PUSH2 0xC62 JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 EQ ISZERO PUSH2 0xC83 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT INVALID GASLIMIT MSTORE NUMBER ORIGIN ADDRESS GASPRICE KECCAK256 PUSH21 0x72616E7366657220616D6F756E7420657863656564 PUSH20 0x2062616C616E636545524332303A207472616E73 PUSH7 0x657220616D6F75 PUSH15 0x74206578636565647320616C6C6F77 PUSH2 0x6E63 PUSH6 0x45524332303A KECCAK256 PUSH5 0x6563726561 PUSH20 0x656420616C6C6F77616E63652062656C6F77207A PUSH6 0x726FA2646970 PUSH7 0x7358221220ADC3 0x29 SIGNEXTEND ADD 0xCB PUSH15 0x7A5DC94CF3C89B1B739A15D81CFB4D DUP4 SAR 0xAF 0xBA GAS DUP5 PUSH21 0xE5F6B964736F6C6343000807003300000000000000 ",
			"sourceMap": "3885:33:0:-:0;3668:4465;3885:33;;3668:4465;3885:33;;;-1:-1:-1;;;3885:33:0;;;;;;;;;;:::i;:::-;-1:-1:-1;3925:30:0;;;;;;;;;;;;;-1:-1:-1;;;3925:30:0;;;;;;;;;;;;:::i;:::-;-1:-1:-1;3962:27:0;;;-1:-1:-1;;3962:27:0;3988:1;3962:27;;;;;;4039:15;;:2;:15;:::i;:::-;4027:28;;:8;:28;:::i;:::-;3996:59;;4064:137;;;;;;;;;-1:-1:-1;519:17:0;562:18;;-1:-1:-1;;;;;;562:18:0;187:10;562:18;;;;;596:43;;187:10;;;;596:43;;519:17;;596:43;-1:-1:-1;4115:12:0;;187:10;4089:23;;;;:9;:23;;;;;;;;:38;;;4145:48;160:25:1;;;187:10:0;;4089:23;;4145:48;;133:18:1;4145:48:0;;;;;;;3668:4465;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3668:4465:0;;;-1:-1:-1;3668:4465:0;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;196:422:1;285:1;328:5;285:1;342:270;363:7;353:8;350:21;342:270;;;422:4;418:1;414:6;410:17;404:4;401:27;398:53;;;431:18;;:::i;:::-;481:7;471:8;467:22;464:55;;;501:16;;;;464:55;580:22;;;;540:15;;;;342:270;;;346:3;196:422;;;;;:::o;623:140::-;681:5;710:47;751:4;741:8;737:19;731:4;710:47;:::i;:::-;701:56;623:140;-1:-1:-1;;;623:140:1:o;768:806::-;817:5;847:8;837:80;;-1:-1:-1;888:1:1;902:5;;837:80;936:4;926:76;;-1:-1:-1;973:1:1;987:5;;926:76;1018:4;1036:1;1031:59;;;;1104:1;1099:130;;;;1011:218;;1031:59;1061:1;1052:10;;1075:5;;;1099:130;1136:3;1126:8;1123:17;1120:43;;;1143:18;;:::i;:::-;-1:-1:-1;;1199:1:1;1185:16;;1214:5;;1011:218;;1313:2;1303:8;1300:16;1294:3;1288:4;1285:13;1281:36;1275:2;1265:8;1262:16;1257:2;1251:4;1248:12;1244:35;1241:77;1238:159;;;-1:-1:-1;1350:19:1;;;1382:5;;1238:159;1429:34;1454:8;1448:4;1429:34;:::i;:::-;1499:6;1495:1;1491:6;1487:19;1478:7;1475:32;1472:58;;;1510:18;;:::i;:::-;1548:20;;-1:-1:-1;768:806:1;;;;;:::o;1579:168::-;1619:7;1685:1;1681;1677:6;1673:14;1670:1;1667:21;1662:1;1655:9;1648:17;1644:45;1641:71;;;1692:18;;:::i;:::-;-1:-1:-1;1732:9:1;;1579:168::o;1752:380::-;1831:1;1827:12;;;;1874;;;1895:61;;1949:4;1941:6;1937:17;1927:27;;1895:61;2002:2;1994:6;1991:14;1971:18;1968:38;1965:161;;;2048:10;2043:3;2039:20;2036:1;2029:31;2083:4;2080:1;2073:15;2111:4;2108:1;2101:15;1965:161;;1752:380;;;:::o;2137:127::-;2198:10;2193:3;2189:20;2186:1;2179:31;2229:4;2226:1;2219:15;2253:4;2250:1;2243:15;2137:127;3668:4465:0;;;;;;"
		},
		"deployedBytecode": {
			"functionDebugData": {
				"@_approve_791": {
					"entryPoint": 1504,
					"id": 791,
					"parameterSlots": 3,
					"returnSlots": 0
				},
				"@_mint_836": {
					"entryPoint": 2507,
					"id": 836,
					"parameterSlots": 2,
					"returnSlots": 0
				},
				"@_msgSender_10": {
					"entryPoint": null,
					"id": 10,
					"parameterSlots": 0,
					"returnSlots": 1
				},
				"@_transfer_740": {
					"entryPoint": 1877,
					"id": 740,
					"parameterSlots": 3,
					"returnSlots": 0
				},
				"@add_232": {
					"entryPoint": 2405,
					"id": 232,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"@allowance_524": {
					"entryPoint": null,
					"id": 524,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"@approve_564": {
					"entryPoint": 795,
					"id": 564,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"@balanceOf_507": {
					"entryPoint": null,
					"id": 507,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"@decimals_485": {
					"entryPoint": null,
					"id": 485,
					"parameterSlots": 0,
					"returnSlots": 1
				},
				"@decreaseAllowance_656": {
					"entryPoint": 1178,
					"id": 656,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"@getOwner_458": {
					"entryPoint": null,
					"id": 458,
					"parameterSlots": 0,
					"returnSlots": 1
				},
				"@increaseAllowance_628": {
					"entryPoint": 922,
					"id": 628,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"@mint_674": {
					"entryPoint": 1116,
					"id": 674,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"@name_467": {
					"entryPoint": 649,
					"id": 467,
					"parameterSlots": 0,
					"returnSlots": 1
				},
				"@owner_61": {
					"entryPoint": null,
					"id": 61,
					"parameterSlots": 0,
					"returnSlots": 1
				},
				"@renounceOwnership_94": {
					"entryPoint": 976,
					"id": 94,
					"parameterSlots": 0,
					"returnSlots": 0
				},
				"@sub_275": {
					"entryPoint": 2347,
					"id": 275,
					"parameterSlots": 3,
					"returnSlots": 1
				},
				"@symbol_476": {
					"entryPoint": 1101,
					"id": 476,
					"parameterSlots": 0,
					"returnSlots": 1
				},
				"@totalSupply_494": {
					"entryPoint": null,
					"id": 494,
					"parameterSlots": 0,
					"returnSlots": 1
				},
				"@transferFrom_601": {
					"entryPoint": 817,
					"id": 601,
					"parameterSlots": 3,
					"returnSlots": 1
				},
				"@transferOwnership_121": {
					"entryPoint": 1270,
					"id": 121,
					"parameterSlots": 1,
					"returnSlots": 0
				},
				"@transfer_544": {
					"entryPoint": 1257,
					"id": 544,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"abi_decode_address": {
					"entryPoint": 2737,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"abi_decode_tuple_t_address": {
					"entryPoint": 2760,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"abi_decode_tuple_t_addresst_address": {
					"entryPoint": 2787,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 2
				},
				"abi_decode_tuple_t_addresst_addresst_uint256": {
					"entryPoint": 2838,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 3
				},
				"abi_decode_tuple_t_addresst_uint256": {
					"entryPoint": 2898,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 2
				},
				"abi_decode_tuple_t_uint256": {
					"entryPoint": 2940,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"abi_encode_tuple_t_address__to_t_address__fromStack_reversed": {
					"entryPoint": null,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed": {
					"entryPoint": null,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed": {
					"entryPoint": 2965,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed": {
					"entryPoint": null,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed": {
					"entryPoint": null,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed": {
					"entryPoint": null,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"abi_encode_tuple_t_stringliteral_30cc447bcc13b3e22b45cef0dd9b0b514842d836dd9b6eb384e20dedfb47723a__to_t_string_memory_ptr__fromStack_reversed": {
					"entryPoint": null,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"abi_encode_tuple_t_stringliteral_65a60c5aacc50cefd03487296966acabbb8c0215e83a6f8d62fe006506c6d5f9__to_t_string_memory_ptr__fromStack_reversed": {
					"entryPoint": null,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed": {
					"entryPoint": 3050,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed": {
					"entryPoint": null,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed": {
					"entryPoint": null,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"abi_encode_tuple_t_stringliteral_f68711a37cba874d0c88e835ade3f7574ea6c0b11ec90f1370a2d4f45a82072a__to_t_string_memory_ptr__fromStack_reversed": {
					"entryPoint": null,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed": {
					"entryPoint": null,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed": {
					"entryPoint": null,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed": {
					"entryPoint": null,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"checked_add_t_uint256": {
					"entryPoint": 3103,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"checked_sub_t_uint256": {
					"entryPoint": 3127,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"extract_byte_array_length": {
					"entryPoint": 3150,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"panic_error_0x11": {
					"entryPoint": 3209,
					"id": null,
					"parameterSlots": 0,
					"returnSlots": 0
				}
			},
			"generatedSources": [
				{
					"ast": {
						"nodeType": "YulBlock",
						"src": "0:7394:1",
						"statements": [
							{
								"nodeType": "YulBlock",
								"src": "6:3:1",
								"statements": []
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "63:124:1",
									"statements": [
										{
											"nodeType": "YulAssignment",
											"src": "73:29:1",
											"value": {
												"arguments": [
													{
														"name": "offset",
														"nodeType": "YulIdentifier",
														"src": "95:6:1"
													}
												],
												"functionName": {
													"name": "calldataload",
													"nodeType": "YulIdentifier",
													"src": "82:12:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "82:20:1"
											},
											"variableNames": [
												{
													"name": "value",
													"nodeType": "YulIdentifier",
													"src": "73:5:1"
												}
											]
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "165:16:1",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "174:1:1",
																	"type": "",
																	"value": "0"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "177:1:1",
																	"type": "",
																	"value": "0"
																}
															],
															"functionName": {
																"name": "revert",
																"nodeType": "YulIdentifier",
																"src": "167:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "167:12:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "167:12:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "value",
																"nodeType": "YulIdentifier",
																"src": "124:5:1"
															},
															{
																"arguments": [
																	{
																		"name": "value",
																		"nodeType": "YulIdentifier",
																		"src": "135:5:1"
																	},
																	{
																		"arguments": [
																			{
																				"arguments": [
																					{
																						"kind": "number",
																						"nodeType": "YulLiteral",
																						"src": "150:3:1",
																						"type": "",
																						"value": "160"
																					},
																					{
																						"kind": "number",
																						"nodeType": "YulLiteral",
																						"src": "155:1:1",
																						"type": "",
																						"value": "1"
																					}
																				],
																				"functionName": {
																					"name": "shl",
																					"nodeType": "YulIdentifier",
																					"src": "146:3:1"
																				},
																				"nodeType": "YulFunctionCall",
																				"src": "146:11:1"
																			},
																			{
																				"kind": "number",
																				"nodeType": "YulLiteral",
																				"src": "159:1:1",
																				"type": "",
																				"value": "1"
																			}
																		],
																		"functionName": {
																			"name": "sub",
																			"nodeType": "YulIdentifier",
																			"src": "142:3:1"
																		},
																		"nodeType": "YulFunctionCall",
																		"src": "142:19:1"
																	}
																],
																"functionName": {
																	"name": "and",
																	"nodeType": "YulIdentifier",
																	"src": "131:3:1"
																},
																"nodeType": "YulFunctionCall",
																"src": "131:31:1"
															}
														],
														"functionName": {
															"name": "eq",
															"nodeType": "YulIdentifier",
															"src": "121:2:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "121:42:1"
													}
												],
												"functionName": {
													"name": "iszero",
													"nodeType": "YulIdentifier",
													"src": "114:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "114:50:1"
											},
											"nodeType": "YulIf",
											"src": "111:70:1"
										}
									]
								},
								"name": "abi_decode_address",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "offset",
										"nodeType": "YulTypedName",
										"src": "42:6:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "value",
										"nodeType": "YulTypedName",
										"src": "53:5:1",
										"type": ""
									}
								],
								"src": "14:173:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "262:116:1",
									"statements": [
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "308:16:1",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "317:1:1",
																	"type": "",
																	"value": "0"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "320:1:1",
																	"type": "",
																	"value": "0"
																}
															],
															"functionName": {
																"name": "revert",
																"nodeType": "YulIdentifier",
																"src": "310:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "310:12:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "310:12:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "dataEnd",
																"nodeType": "YulIdentifier",
																"src": "283:7:1"
															},
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "292:9:1"
															}
														],
														"functionName": {
															"name": "sub",
															"nodeType": "YulIdentifier",
															"src": "279:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "279:23:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "304:2:1",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "slt",
													"nodeType": "YulIdentifier",
													"src": "275:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "275:32:1"
											},
											"nodeType": "YulIf",
											"src": "272:52:1"
										},
										{
											"nodeType": "YulAssignment",
											"src": "333:39:1",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "362:9:1"
													}
												],
												"functionName": {
													"name": "abi_decode_address",
													"nodeType": "YulIdentifier",
													"src": "343:18:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "343:29:1"
											},
											"variableNames": [
												{
													"name": "value0",
													"nodeType": "YulIdentifier",
													"src": "333:6:1"
												}
											]
										}
									]
								},
								"name": "abi_decode_tuple_t_address",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nodeType": "YulTypedName",
										"src": "228:9:1",
										"type": ""
									},
									{
										"name": "dataEnd",
										"nodeType": "YulTypedName",
										"src": "239:7:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "value0",
										"nodeType": "YulTypedName",
										"src": "251:6:1",
										"type": ""
									}
								],
								"src": "192:186:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "470:173:1",
									"statements": [
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "516:16:1",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "525:1:1",
																	"type": "",
																	"value": "0"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "528:1:1",
																	"type": "",
																	"value": "0"
																}
															],
															"functionName": {
																"name": "revert",
																"nodeType": "YulIdentifier",
																"src": "518:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "518:12:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "518:12:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "dataEnd",
																"nodeType": "YulIdentifier",
																"src": "491:7:1"
															},
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "500:9:1"
															}
														],
														"functionName": {
															"name": "sub",
															"nodeType": "YulIdentifier",
															"src": "487:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "487:23:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "512:2:1",
														"type": "",
														"value": "64"
													}
												],
												"functionName": {
													"name": "slt",
													"nodeType": "YulIdentifier",
													"src": "483:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "483:32:1"
											},
											"nodeType": "YulIf",
											"src": "480:52:1"
										},
										{
											"nodeType": "YulAssignment",
											"src": "541:39:1",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "570:9:1"
													}
												],
												"functionName": {
													"name": "abi_decode_address",
													"nodeType": "YulIdentifier",
													"src": "551:18:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "551:29:1"
											},
											"variableNames": [
												{
													"name": "value0",
													"nodeType": "YulIdentifier",
													"src": "541:6:1"
												}
											]
										},
										{
											"nodeType": "YulAssignment",
											"src": "589:48:1",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "622:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "633:2:1",
																"type": "",
																"value": "32"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "618:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "618:18:1"
													}
												],
												"functionName": {
													"name": "abi_decode_address",
													"nodeType": "YulIdentifier",
													"src": "599:18:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "599:38:1"
											},
											"variableNames": [
												{
													"name": "value1",
													"nodeType": "YulIdentifier",
													"src": "589:6:1"
												}
											]
										}
									]
								},
								"name": "abi_decode_tuple_t_addresst_address",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nodeType": "YulTypedName",
										"src": "428:9:1",
										"type": ""
									},
									{
										"name": "dataEnd",
										"nodeType": "YulTypedName",
										"src": "439:7:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "value0",
										"nodeType": "YulTypedName",
										"src": "451:6:1",
										"type": ""
									},
									{
										"name": "value1",
										"nodeType": "YulTypedName",
										"src": "459:6:1",
										"type": ""
									}
								],
								"src": "383:260:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "752:224:1",
									"statements": [
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "798:16:1",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "807:1:1",
																	"type": "",
																	"value": "0"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "810:1:1",
																	"type": "",
																	"value": "0"
																}
															],
															"functionName": {
																"name": "revert",
																"nodeType": "YulIdentifier",
																"src": "800:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "800:12:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "800:12:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "dataEnd",
																"nodeType": "YulIdentifier",
																"src": "773:7:1"
															},
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "782:9:1"
															}
														],
														"functionName": {
															"name": "sub",
															"nodeType": "YulIdentifier",
															"src": "769:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "769:23:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "794:2:1",
														"type": "",
														"value": "96"
													}
												],
												"functionName": {
													"name": "slt",
													"nodeType": "YulIdentifier",
													"src": "765:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "765:32:1"
											},
											"nodeType": "YulIf",
											"src": "762:52:1"
										},
										{
											"nodeType": "YulAssignment",
											"src": "823:39:1",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "852:9:1"
													}
												],
												"functionName": {
													"name": "abi_decode_address",
													"nodeType": "YulIdentifier",
													"src": "833:18:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "833:29:1"
											},
											"variableNames": [
												{
													"name": "value0",
													"nodeType": "YulIdentifier",
													"src": "823:6:1"
												}
											]
										},
										{
											"nodeType": "YulAssignment",
											"src": "871:48:1",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "904:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "915:2:1",
																"type": "",
																"value": "32"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "900:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "900:18:1"
													}
												],
												"functionName": {
													"name": "abi_decode_address",
													"nodeType": "YulIdentifier",
													"src": "881:18:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "881:38:1"
											},
											"variableNames": [
												{
													"name": "value1",
													"nodeType": "YulIdentifier",
													"src": "871:6:1"
												}
											]
										},
										{
											"nodeType": "YulAssignment",
											"src": "928:42:1",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "955:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "966:2:1",
																"type": "",
																"value": "64"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "951:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "951:18:1"
													}
												],
												"functionName": {
													"name": "calldataload",
													"nodeType": "YulIdentifier",
													"src": "938:12:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "938:32:1"
											},
											"variableNames": [
												{
													"name": "value2",
													"nodeType": "YulIdentifier",
													"src": "928:6:1"
												}
											]
										}
									]
								},
								"name": "abi_decode_tuple_t_addresst_addresst_uint256",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nodeType": "YulTypedName",
										"src": "702:9:1",
										"type": ""
									},
									{
										"name": "dataEnd",
										"nodeType": "YulTypedName",
										"src": "713:7:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "value0",
										"nodeType": "YulTypedName",
										"src": "725:6:1",
										"type": ""
									},
									{
										"name": "value1",
										"nodeType": "YulTypedName",
										"src": "733:6:1",
										"type": ""
									},
									{
										"name": "value2",
										"nodeType": "YulTypedName",
										"src": "741:6:1",
										"type": ""
									}
								],
								"src": "648:328:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "1068:167:1",
									"statements": [
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "1114:16:1",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "1123:1:1",
																	"type": "",
																	"value": "0"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "1126:1:1",
																	"type": "",
																	"value": "0"
																}
															],
															"functionName": {
																"name": "revert",
																"nodeType": "YulIdentifier",
																"src": "1116:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "1116:12:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "1116:12:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "dataEnd",
																"nodeType": "YulIdentifier",
																"src": "1089:7:1"
															},
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "1098:9:1"
															}
														],
														"functionName": {
															"name": "sub",
															"nodeType": "YulIdentifier",
															"src": "1085:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "1085:23:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1110:2:1",
														"type": "",
														"value": "64"
													}
												],
												"functionName": {
													"name": "slt",
													"nodeType": "YulIdentifier",
													"src": "1081:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1081:32:1"
											},
											"nodeType": "YulIf",
											"src": "1078:52:1"
										},
										{
											"nodeType": "YulAssignment",
											"src": "1139:39:1",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "1168:9:1"
													}
												],
												"functionName": {
													"name": "abi_decode_address",
													"nodeType": "YulIdentifier",
													"src": "1149:18:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1149:29:1"
											},
											"variableNames": [
												{
													"name": "value0",
													"nodeType": "YulIdentifier",
													"src": "1139:6:1"
												}
											]
										},
										{
											"nodeType": "YulAssignment",
											"src": "1187:42:1",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "1214:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "1225:2:1",
																"type": "",
																"value": "32"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "1210:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "1210:18:1"
													}
												],
												"functionName": {
													"name": "calldataload",
													"nodeType": "YulIdentifier",
													"src": "1197:12:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1197:32:1"
											},
											"variableNames": [
												{
													"name": "value1",
													"nodeType": "YulIdentifier",
													"src": "1187:6:1"
												}
											]
										}
									]
								},
								"name": "abi_decode_tuple_t_addresst_uint256",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nodeType": "YulTypedName",
										"src": "1026:9:1",
										"type": ""
									},
									{
										"name": "dataEnd",
										"nodeType": "YulTypedName",
										"src": "1037:7:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "value0",
										"nodeType": "YulTypedName",
										"src": "1049:6:1",
										"type": ""
									},
									{
										"name": "value1",
										"nodeType": "YulTypedName",
										"src": "1057:6:1",
										"type": ""
									}
								],
								"src": "981:254:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "1310:110:1",
									"statements": [
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "1356:16:1",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "1365:1:1",
																	"type": "",
																	"value": "0"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "1368:1:1",
																	"type": "",
																	"value": "0"
																}
															],
															"functionName": {
																"name": "revert",
																"nodeType": "YulIdentifier",
																"src": "1358:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "1358:12:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "1358:12:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "dataEnd",
																"nodeType": "YulIdentifier",
																"src": "1331:7:1"
															},
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "1340:9:1"
															}
														],
														"functionName": {
															"name": "sub",
															"nodeType": "YulIdentifier",
															"src": "1327:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "1327:23:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1352:2:1",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "slt",
													"nodeType": "YulIdentifier",
													"src": "1323:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1323:32:1"
											},
											"nodeType": "YulIf",
											"src": "1320:52:1"
										},
										{
											"nodeType": "YulAssignment",
											"src": "1381:33:1",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "1404:9:1"
													}
												],
												"functionName": {
													"name": "calldataload",
													"nodeType": "YulIdentifier",
													"src": "1391:12:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1391:23:1"
											},
											"variableNames": [
												{
													"name": "value0",
													"nodeType": "YulIdentifier",
													"src": "1381:6:1"
												}
											]
										}
									]
								},
								"name": "abi_decode_tuple_t_uint256",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nodeType": "YulTypedName",
										"src": "1276:9:1",
										"type": ""
									},
									{
										"name": "dataEnd",
										"nodeType": "YulTypedName",
										"src": "1287:7:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "value0",
										"nodeType": "YulTypedName",
										"src": "1299:6:1",
										"type": ""
									}
								],
								"src": "1240:180:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "1526:102:1",
									"statements": [
										{
											"nodeType": "YulAssignment",
											"src": "1536:26:1",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "1548:9:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1559:2:1",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "1544:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1544:18:1"
											},
											"variableNames": [
												{
													"name": "tail",
													"nodeType": "YulIdentifier",
													"src": "1536:4:1"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "1578:9:1"
													},
													{
														"arguments": [
															{
																"name": "value0",
																"nodeType": "YulIdentifier",
																"src": "1593:6:1"
															},
															{
																"arguments": [
																	{
																		"arguments": [
																			{
																				"kind": "number",
																				"nodeType": "YulLiteral",
																				"src": "1609:3:1",
																				"type": "",
																				"value": "160"
																			},
																			{
																				"kind": "number",
																				"nodeType": "YulLiteral",
																				"src": "1614:1:1",
																				"type": "",
																				"value": "1"
																			}
																		],
																		"functionName": {
																			"name": "shl",
																			"nodeType": "YulIdentifier",
																			"src": "1605:3:1"
																		},
																		"nodeType": "YulFunctionCall",
																		"src": "1605:11:1"
																	},
																	{
																		"kind": "number",
																		"nodeType": "YulLiteral",
																		"src": "1618:1:1",
																		"type": "",
																		"value": "1"
																	}
																],
																"functionName": {
																	"name": "sub",
																	"nodeType": "YulIdentifier",
																	"src": "1601:3:1"
																},
																"nodeType": "YulFunctionCall",
																"src": "1601:19:1"
															}
														],
														"functionName": {
															"name": "and",
															"nodeType": "YulIdentifier",
															"src": "1589:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "1589:32:1"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "1571:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1571:51:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "1571:51:1"
										}
									]
								},
								"name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nodeType": "YulTypedName",
										"src": "1495:9:1",
										"type": ""
									},
									{
										"name": "value0",
										"nodeType": "YulTypedName",
										"src": "1506:6:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nodeType": "YulTypedName",
										"src": "1517:4:1",
										"type": ""
									}
								],
								"src": "1425:203:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "1728:92:1",
									"statements": [
										{
											"nodeType": "YulAssignment",
											"src": "1738:26:1",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "1750:9:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1761:2:1",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "1746:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1746:18:1"
											},
											"variableNames": [
												{
													"name": "tail",
													"nodeType": "YulIdentifier",
													"src": "1738:4:1"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "1780:9:1"
													},
													{
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "value0",
																		"nodeType": "YulIdentifier",
																		"src": "1805:6:1"
																	}
																],
																"functionName": {
																	"name": "iszero",
																	"nodeType": "YulIdentifier",
																	"src": "1798:6:1"
																},
																"nodeType": "YulFunctionCall",
																"src": "1798:14:1"
															}
														],
														"functionName": {
															"name": "iszero",
															"nodeType": "YulIdentifier",
															"src": "1791:6:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "1791:22:1"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "1773:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1773:41:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "1773:41:1"
										}
									]
								},
								"name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nodeType": "YulTypedName",
										"src": "1697:9:1",
										"type": ""
									},
									{
										"name": "value0",
										"nodeType": "YulTypedName",
										"src": "1708:6:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nodeType": "YulTypedName",
										"src": "1719:4:1",
										"type": ""
									}
								],
								"src": "1633:187:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "1946:476:1",
									"statements": [
										{
											"nodeType": "YulVariableDeclaration",
											"src": "1956:12:1",
											"value": {
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "1966:2:1",
												"type": "",
												"value": "32"
											},
											"variables": [
												{
													"name": "_1",
													"nodeType": "YulTypedName",
													"src": "1960:2:1",
													"type": ""
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "1984:9:1"
													},
													{
														"name": "_1",
														"nodeType": "YulIdentifier",
														"src": "1995:2:1"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "1977:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1977:21:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "1977:21:1"
										},
										{
											"nodeType": "YulVariableDeclaration",
											"src": "2007:27:1",
											"value": {
												"arguments": [
													{
														"name": "value0",
														"nodeType": "YulIdentifier",
														"src": "2027:6:1"
													}
												],
												"functionName": {
													"name": "mload",
													"nodeType": "YulIdentifier",
													"src": "2021:5:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "2021:13:1"
											},
											"variables": [
												{
													"name": "length",
													"nodeType": "YulTypedName",
													"src": "2011:6:1",
													"type": ""
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "2054:9:1"
															},
															{
																"name": "_1",
																"nodeType": "YulIdentifier",
																"src": "2065:2:1"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "2050:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "2050:18:1"
													},
													{
														"name": "length",
														"nodeType": "YulIdentifier",
														"src": "2070:6:1"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "2043:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "2043:34:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "2043:34:1"
										},
										{
											"nodeType": "YulVariableDeclaration",
											"src": "2086:10:1",
											"value": {
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2095:1:1",
												"type": "",
												"value": "0"
											},
											"variables": [
												{
													"name": "i",
													"nodeType": "YulTypedName",
													"src": "2090:1:1",
													"type": ""
												}
											]
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "2155:90:1",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"arguments": [
																		{
																			"arguments": [
																				{
																					"name": "headStart",
																					"nodeType": "YulIdentifier",
																					"src": "2184:9:1"
																				},
																				{
																					"name": "i",
																					"nodeType": "YulIdentifier",
																					"src": "2195:1:1"
																				}
																			],
																			"functionName": {
																				"name": "add",
																				"nodeType": "YulIdentifier",
																				"src": "2180:3:1"
																			},
																			"nodeType": "YulFunctionCall",
																			"src": "2180:17:1"
																		},
																		{
																			"kind": "number",
																			"nodeType": "YulLiteral",
																			"src": "2199:2:1",
																			"type": "",
																			"value": "64"
																		}
																	],
																	"functionName": {
																		"name": "add",
																		"nodeType": "YulIdentifier",
																		"src": "2176:3:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "2176:26:1"
																},
																{
																	"arguments": [
																		{
																			"arguments": [
																				{
																					"arguments": [
																						{
																							"name": "value0",
																							"nodeType": "YulIdentifier",
																							"src": "2218:6:1"
																						},
																						{
																							"name": "i",
																							"nodeType": "YulIdentifier",
																							"src": "2226:1:1"
																						}
																					],
																					"functionName": {
																						"name": "add",
																						"nodeType": "YulIdentifier",
																						"src": "2214:3:1"
																					},
																					"nodeType": "YulFunctionCall",
																					"src": "2214:14:1"
																				},
																				{
																					"name": "_1",
																					"nodeType": "YulIdentifier",
																					"src": "2230:2:1"
																				}
																			],
																			"functionName": {
																				"name": "add",
																				"nodeType": "YulIdentifier",
																				"src": "2210:3:1"
																			},
																			"nodeType": "YulFunctionCall",
																			"src": "2210:23:1"
																		}
																	],
																	"functionName": {
																		"name": "mload",
																		"nodeType": "YulIdentifier",
																		"src": "2204:5:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "2204:30:1"
																}
															],
															"functionName": {
																"name": "mstore",
																"nodeType": "YulIdentifier",
																"src": "2169:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "2169:66:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "2169:66:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "i",
														"nodeType": "YulIdentifier",
														"src": "2116:1:1"
													},
													{
														"name": "length",
														"nodeType": "YulIdentifier",
														"src": "2119:6:1"
													}
												],
												"functionName": {
													"name": "lt",
													"nodeType": "YulIdentifier",
													"src": "2113:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "2113:13:1"
											},
											"nodeType": "YulForLoop",
											"post": {
												"nodeType": "YulBlock",
												"src": "2127:19:1",
												"statements": [
													{
														"nodeType": "YulAssignment",
														"src": "2129:15:1",
														"value": {
															"arguments": [
																{
																	"name": "i",
																	"nodeType": "YulIdentifier",
																	"src": "2138:1:1"
																},
																{
																	"name": "_1",
																	"nodeType": "YulIdentifier",
																	"src": "2141:2:1"
																}
															],
															"functionName": {
																"name": "add",
																"nodeType": "YulIdentifier",
																"src": "2134:3:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "2134:10:1"
														},
														"variableNames": [
															{
																"name": "i",
																"nodeType": "YulIdentifier",
																"src": "2129:1:1"
															}
														]
													}
												]
											},
											"pre": {
												"nodeType": "YulBlock",
												"src": "2109:3:1",
												"statements": []
											},
											"src": "2105:140:1"
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "2279:66:1",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"arguments": [
																		{
																			"arguments": [
																				{
																					"name": "headStart",
																					"nodeType": "YulIdentifier",
																					"src": "2308:9:1"
																				},
																				{
																					"name": "length",
																					"nodeType": "YulIdentifier",
																					"src": "2319:6:1"
																				}
																			],
																			"functionName": {
																				"name": "add",
																				"nodeType": "YulIdentifier",
																				"src": "2304:3:1"
																			},
																			"nodeType": "YulFunctionCall",
																			"src": "2304:22:1"
																		},
																		{
																			"kind": "number",
																			"nodeType": "YulLiteral",
																			"src": "2328:2:1",
																			"type": "",
																			"value": "64"
																		}
																	],
																	"functionName": {
																		"name": "add",
																		"nodeType": "YulIdentifier",
																		"src": "2300:3:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "2300:31:1"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "2333:1:1",
																	"type": "",
																	"value": "0"
																}
															],
															"functionName": {
																"name": "mstore",
																"nodeType": "YulIdentifier",
																"src": "2293:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "2293:42:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "2293:42:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "i",
														"nodeType": "YulIdentifier",
														"src": "2260:1:1"
													},
													{
														"name": "length",
														"nodeType": "YulIdentifier",
														"src": "2263:6:1"
													}
												],
												"functionName": {
													"name": "gt",
													"nodeType": "YulIdentifier",
													"src": "2257:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "2257:13:1"
											},
											"nodeType": "YulIf",
											"src": "2254:91:1"
										},
										{
											"nodeType": "YulAssignment",
											"src": "2354:62:1",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "2370:9:1"
															},
															{
																"arguments": [
																	{
																		"arguments": [
																			{
																				"name": "length",
																				"nodeType": "YulIdentifier",
																				"src": "2389:6:1"
																			},
																			{
																				"kind": "number",
																				"nodeType": "YulLiteral",
																				"src": "2397:2:1",
																				"type": "",
																				"value": "31"
																			}
																		],
																		"functionName": {
																			"name": "add",
																			"nodeType": "YulIdentifier",
																			"src": "2385:3:1"
																		},
																		"nodeType": "YulFunctionCall",
																		"src": "2385:15:1"
																	},
																	{
																		"arguments": [
																			{
																				"kind": "number",
																				"nodeType": "YulLiteral",
																				"src": "2406:2:1",
																				"type": "",
																				"value": "31"
																			}
																		],
																		"functionName": {
																			"name": "not",
																			"nodeType": "YulIdentifier",
																			"src": "2402:3:1"
																		},
																		"nodeType": "YulFunctionCall",
																		"src": "2402:7:1"
																	}
																],
																"functionName": {
																	"name": "and",
																	"nodeType": "YulIdentifier",
																	"src": "2381:3:1"
																},
																"nodeType": "YulFunctionCall",
																"src": "2381:29:1"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "2366:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "2366:45:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "2413:2:1",
														"type": "",
														"value": "64"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "2362:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "2362:54:1"
											},
											"variableNames": [
												{
													"name": "tail",
													"nodeType": "YulIdentifier",
													"src": "2354:4:1"
												}
											]
										}
									]
								},
								"name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nodeType": "YulTypedName",
										"src": "1915:9:1",
										"type": ""
									},
									{
										"name": "value0",
										"nodeType": "YulTypedName",
										"src": "1926:6:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nodeType": "YulTypedName",
										"src": "1937:4:1",
										"type": ""
									}
								],
								"src": "1825:597:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "2601:225:1",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "2618:9:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "2629:2:1",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "2611:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "2611:21:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "2611:21:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "2652:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "2663:2:1",
																"type": "",
																"value": "32"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "2648:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "2648:18:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "2668:2:1",
														"type": "",
														"value": "35"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "2641:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "2641:30:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "2641:30:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "2691:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "2702:2:1",
																"type": "",
																"value": "64"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "2687:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "2687:18:1"
													},
													{
														"hexValue": "45524332303a207472616e7366657220746f20746865207a65726f2061646472",
														"kind": "string",
														"nodeType": "YulLiteral",
														"src": "2707:34:1",
														"type": "",
														"value": "ERC20: transfer to the zero addr"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "2680:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "2680:62:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "2680:62:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "2762:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "2773:2:1",
																"type": "",
																"value": "96"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "2758:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "2758:18:1"
													},
													{
														"hexValue": "657373",
														"kind": "string",
														"nodeType": "YulLiteral",
														"src": "2778:5:1",
														"type": "",
														"value": "ess"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "2751:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "2751:33:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "2751:33:1"
										},
										{
											"nodeType": "YulAssignment",
											"src": "2793:27:1",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "2805:9:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "2816:3:1",
														"type": "",
														"value": "128"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "2801:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "2801:19:1"
											},
											"variableNames": [
												{
													"name": "tail",
													"nodeType": "YulIdentifier",
													"src": "2793:4:1"
												}
											]
										}
									]
								},
								"name": "abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nodeType": "YulTypedName",
										"src": "2578:9:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nodeType": "YulTypedName",
										"src": "2592:4:1",
										"type": ""
									}
								],
								"src": "2427:399:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "3005:228:1",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "3022:9:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "3033:2:1",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "3015:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "3015:21:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "3015:21:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "3056:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "3067:2:1",
																"type": "",
																"value": "32"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "3052:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "3052:18:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "3072:2:1",
														"type": "",
														"value": "38"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "3045:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "3045:30:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "3045:30:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "3095:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "3106:2:1",
																"type": "",
																"value": "64"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "3091:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "3091:18:1"
													},
													{
														"hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061",
														"kind": "string",
														"nodeType": "YulLiteral",
														"src": "3111:34:1",
														"type": "",
														"value": "Ownable: new owner is the zero a"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "3084:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "3084:62:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "3084:62:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "3166:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "3177:2:1",
																"type": "",
																"value": "96"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "3162:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "3162:18:1"
													},
													{
														"hexValue": "646472657373",
														"kind": "string",
														"nodeType": "YulLiteral",
														"src": "3182:8:1",
														"type": "",
														"value": "ddress"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "3155:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "3155:36:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "3155:36:1"
										},
										{
											"nodeType": "YulAssignment",
											"src": "3200:27:1",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "3212:9:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "3223:3:1",
														"type": "",
														"value": "128"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "3208:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "3208:19:1"
											},
											"variableNames": [
												{
													"name": "tail",
													"nodeType": "YulIdentifier",
													"src": "3200:4:1"
												}
											]
										}
									]
								},
								"name": "abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nodeType": "YulTypedName",
										"src": "2982:9:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nodeType": "YulTypedName",
										"src": "2996:4:1",
										"type": ""
									}
								],
								"src": "2831:402:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "3412:224:1",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "3429:9:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "3440:2:1",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "3422:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "3422:21:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "3422:21:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "3463:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "3474:2:1",
																"type": "",
																"value": "32"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "3459:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "3459:18:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "3479:2:1",
														"type": "",
														"value": "34"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "3452:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "3452:30:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "3452:30:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "3502:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "3513:2:1",
																"type": "",
																"value": "64"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "3498:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "3498:18:1"
													},
													{
														"hexValue": "45524332303a20617070726f766520746f20746865207a65726f206164647265",
														"kind": "string",
														"nodeType": "YulLiteral",
														"src": "3518:34:1",
														"type": "",
														"value": "ERC20: approve to the zero addre"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "3491:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "3491:62:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "3491:62:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "3573:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "3584:2:1",
																"type": "",
																"value": "96"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "3569:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "3569:18:1"
													},
													{
														"hexValue": "7373",
														"kind": "string",
														"nodeType": "YulLiteral",
														"src": "3589:4:1",
														"type": "",
														"value": "ss"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "3562:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "3562:32:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "3562:32:1"
										},
										{
											"nodeType": "YulAssignment",
											"src": "3603:27:1",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "3615:9:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "3626:3:1",
														"type": "",
														"value": "128"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "3611:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "3611:19:1"
											},
											"variableNames": [
												{
													"name": "tail",
													"nodeType": "YulIdentifier",
													"src": "3603:4:1"
												}
											]
										}
									]
								},
								"name": "abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nodeType": "YulTypedName",
										"src": "3389:9:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nodeType": "YulTypedName",
										"src": "3403:4:1",
										"type": ""
									}
								],
								"src": "3238:398:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "3815:177:1",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "3832:9:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "3843:2:1",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "3825:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "3825:21:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "3825:21:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "3866:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "3877:2:1",
																"type": "",
																"value": "32"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "3862:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "3862:18:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "3882:2:1",
														"type": "",
														"value": "27"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "3855:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "3855:30:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "3855:30:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "3905:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "3916:2:1",
																"type": "",
																"value": "64"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "3901:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "3901:18:1"
													},
													{
														"hexValue": "536166654d6174683a206164646974696f6e206f766572666c6f77",
														"kind": "string",
														"nodeType": "YulLiteral",
														"src": "3921:29:1",
														"type": "",
														"value": "SafeMath: addition overflow"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "3894:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "3894:57:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "3894:57:1"
										},
										{
											"nodeType": "YulAssignment",
											"src": "3960:26:1",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "3972:9:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "3983:2:1",
														"type": "",
														"value": "96"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "3968:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "3968:18:1"
											},
											"variableNames": [
												{
													"name": "tail",
													"nodeType": "YulIdentifier",
													"src": "3960:4:1"
												}
											]
										}
									]
								},
								"name": "abi_encode_tuple_t_stringliteral_30cc447bcc13b3e22b45cef0dd9b0b514842d836dd9b6eb384e20dedfb47723a__to_t_string_memory_ptr__fromStack_reversed",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nodeType": "YulTypedName",
										"src": "3792:9:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nodeType": "YulTypedName",
										"src": "3806:4:1",
										"type": ""
									}
								],
								"src": "3641:351:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "4171:179:1",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "4188:9:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "4199:2:1",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "4181:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "4181:21:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "4181:21:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "4222:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "4233:2:1",
																"type": "",
																"value": "32"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "4218:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "4218:18:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "4238:2:1",
														"type": "",
														"value": "29"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "4211:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "4211:30:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "4211:30:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "4261:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "4272:2:1",
																"type": "",
																"value": "64"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "4257:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "4257:18:1"
													},
													{
														"hexValue": "45524332303a20617070726f766520616d6f756e74206973207a65726f",
														"kind": "string",
														"nodeType": "YulLiteral",
														"src": "4277:31:1",
														"type": "",
														"value": "ERC20: approve amount is zero"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "4250:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "4250:59:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "4250:59:1"
										},
										{
											"nodeType": "YulAssignment",
											"src": "4318:26:1",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "4330:9:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "4341:2:1",
														"type": "",
														"value": "96"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "4326:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "4326:18:1"
											},
											"variableNames": [
												{
													"name": "tail",
													"nodeType": "YulIdentifier",
													"src": "4318:4:1"
												}
											]
										}
									]
								},
								"name": "abi_encode_tuple_t_stringliteral_65a60c5aacc50cefd03487296966acabbb8c0215e83a6f8d62fe006506c6d5f9__to_t_string_memory_ptr__fromStack_reversed",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nodeType": "YulTypedName",
										"src": "4148:9:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nodeType": "YulTypedName",
										"src": "4162:4:1",
										"type": ""
									}
								],
								"src": "3997:353:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "4529:182:1",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "4546:9:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "4557:2:1",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "4539:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "4539:21:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "4539:21:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "4580:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "4591:2:1",
																"type": "",
																"value": "32"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "4576:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "4576:18:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "4596:2:1",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "4569:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "4569:30:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "4569:30:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "4619:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "4630:2:1",
																"type": "",
																"value": "64"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "4615:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "4615:18:1"
													},
													{
														"hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
														"kind": "string",
														"nodeType": "YulLiteral",
														"src": "4635:34:1",
														"type": "",
														"value": "Ownable: caller is not the owner"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "4608:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "4608:62:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "4608:62:1"
										},
										{
											"nodeType": "YulAssignment",
											"src": "4679:26:1",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "4691:9:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "4702:2:1",
														"type": "",
														"value": "96"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "4687:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "4687:18:1"
											},
											"variableNames": [
												{
													"name": "tail",
													"nodeType": "YulIdentifier",
													"src": "4679:4:1"
												}
											]
										}
									]
								},
								"name": "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nodeType": "YulTypedName",
										"src": "4506:9:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nodeType": "YulTypedName",
										"src": "4520:4:1",
										"type": ""
									}
								],
								"src": "4355:356:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "4890:227:1",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "4907:9:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "4918:2:1",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "4900:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "4900:21:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "4900:21:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "4941:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "4952:2:1",
																"type": "",
																"value": "32"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "4937:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "4937:18:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "4957:2:1",
														"type": "",
														"value": "37"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "4930:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "4930:30:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "4930:30:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "4980:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "4991:2:1",
																"type": "",
																"value": "64"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "4976:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "4976:18:1"
													},
													{
														"hexValue": "45524332303a207472616e736665722066726f6d20746865207a65726f206164",
														"kind": "string",
														"nodeType": "YulLiteral",
														"src": "4996:34:1",
														"type": "",
														"value": "ERC20: transfer from the zero ad"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "4969:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "4969:62:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "4969:62:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "5051:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "5062:2:1",
																"type": "",
																"value": "96"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "5047:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "5047:18:1"
													},
													{
														"hexValue": "6472657373",
														"kind": "string",
														"nodeType": "YulLiteral",
														"src": "5067:7:1",
														"type": "",
														"value": "dress"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "5040:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "5040:35:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "5040:35:1"
										},
										{
											"nodeType": "YulAssignment",
											"src": "5084:27:1",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "5096:9:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "5107:3:1",
														"type": "",
														"value": "128"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "5092:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "5092:19:1"
											},
											"variableNames": [
												{
													"name": "tail",
													"nodeType": "YulIdentifier",
													"src": "5084:4:1"
												}
											]
										}
									]
								},
								"name": "abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nodeType": "YulTypedName",
										"src": "4867:9:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nodeType": "YulTypedName",
										"src": "4881:4:1",
										"type": ""
									}
								],
								"src": "4716:401:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "5296:226:1",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "5313:9:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "5324:2:1",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "5306:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "5306:21:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "5306:21:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "5347:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "5358:2:1",
																"type": "",
																"value": "32"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "5343:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "5343:18:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "5363:2:1",
														"type": "",
														"value": "36"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "5336:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "5336:30:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "5336:30:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "5386:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "5397:2:1",
																"type": "",
																"value": "64"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "5382:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "5382:18:1"
													},
													{
														"hexValue": "45524332303a20617070726f76652066726f6d20746865207a65726f20616464",
														"kind": "string",
														"nodeType": "YulLiteral",
														"src": "5402:34:1",
														"type": "",
														"value": "ERC20: approve from the zero add"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "5375:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "5375:62:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "5375:62:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "5457:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "5468:2:1",
																"type": "",
																"value": "96"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "5453:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "5453:18:1"
													},
													{
														"hexValue": "72657373",
														"kind": "string",
														"nodeType": "YulLiteral",
														"src": "5473:6:1",
														"type": "",
														"value": "ress"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "5446:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "5446:34:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "5446:34:1"
										},
										{
											"nodeType": "YulAssignment",
											"src": "5489:27:1",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "5501:9:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "5512:3:1",
														"type": "",
														"value": "128"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "5497:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "5497:19:1"
											},
											"variableNames": [
												{
													"name": "tail",
													"nodeType": "YulIdentifier",
													"src": "5489:4:1"
												}
											]
										}
									]
								},
								"name": "abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nodeType": "YulTypedName",
										"src": "5273:9:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nodeType": "YulTypedName",
										"src": "5287:4:1",
										"type": ""
									}
								],
								"src": "5122:400:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "5701:180:1",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "5718:9:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "5729:2:1",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "5711:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "5711:21:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "5711:21:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "5752:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "5763:2:1",
																"type": "",
																"value": "32"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "5748:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "5748:18:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "5768:2:1",
														"type": "",
														"value": "30"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "5741:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "5741:30:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "5741:30:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "5791:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "5802:2:1",
																"type": "",
																"value": "64"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "5787:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "5787:18:1"
													},
													{
														"hexValue": "45524332303a207472616e7366657220616d6f756e74206973207a65726f",
														"kind": "string",
														"nodeType": "YulLiteral",
														"src": "5807:32:1",
														"type": "",
														"value": "ERC20: transfer amount is zero"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "5780:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "5780:60:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "5780:60:1"
										},
										{
											"nodeType": "YulAssignment",
											"src": "5849:26:1",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "5861:9:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "5872:2:1",
														"type": "",
														"value": "96"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "5857:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "5857:18:1"
											},
											"variableNames": [
												{
													"name": "tail",
													"nodeType": "YulIdentifier",
													"src": "5849:4:1"
												}
											]
										}
									]
								},
								"name": "abi_encode_tuple_t_stringliteral_f68711a37cba874d0c88e835ade3f7574ea6c0b11ec90f1370a2d4f45a82072a__to_t_string_memory_ptr__fromStack_reversed",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nodeType": "YulTypedName",
										"src": "5678:9:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nodeType": "YulTypedName",
										"src": "5692:4:1",
										"type": ""
									}
								],
								"src": "5527:354:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "6060:181:1",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "6077:9:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "6088:2:1",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "6070:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "6070:21:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "6070:21:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "6111:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "6122:2:1",
																"type": "",
																"value": "32"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "6107:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "6107:18:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "6127:2:1",
														"type": "",
														"value": "31"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "6100:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "6100:30:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "6100:30:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "6150:9:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "6161:2:1",
																"type": "",
																"value": "64"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "6146:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "6146:18:1"
													},
													{
														"hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
														"kind": "string",
														"nodeType": "YulLiteral",
														"src": "6166:33:1",
														"type": "",
														"value": "ERC20: mint to the zero address"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "6139:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "6139:61:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "6139:61:1"
										},
										{
											"nodeType": "YulAssignment",
											"src": "6209:26:1",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "6221:9:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "6232:2:1",
														"type": "",
														"value": "96"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "6217:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "6217:18:1"
											},
											"variableNames": [
												{
													"name": "tail",
													"nodeType": "YulIdentifier",
													"src": "6209:4:1"
												}
											]
										}
									]
								},
								"name": "abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nodeType": "YulTypedName",
										"src": "6037:9:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nodeType": "YulTypedName",
										"src": "6051:4:1",
										"type": ""
									}
								],
								"src": "5886:355:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "6347:76:1",
									"statements": [
										{
											"nodeType": "YulAssignment",
											"src": "6357:26:1",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "6369:9:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "6380:2:1",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "6365:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "6365:18:1"
											},
											"variableNames": [
												{
													"name": "tail",
													"nodeType": "YulIdentifier",
													"src": "6357:4:1"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "6399:9:1"
													},
													{
														"name": "value0",
														"nodeType": "YulIdentifier",
														"src": "6410:6:1"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "6392:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "6392:25:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "6392:25:1"
										}
									]
								},
								"name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nodeType": "YulTypedName",
										"src": "6316:9:1",
										"type": ""
									},
									{
										"name": "value0",
										"nodeType": "YulTypedName",
										"src": "6327:6:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nodeType": "YulTypedName",
										"src": "6338:4:1",
										"type": ""
									}
								],
								"src": "6246:177:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "6525:87:1",
									"statements": [
										{
											"nodeType": "YulAssignment",
											"src": "6535:26:1",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "6547:9:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "6558:2:1",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "6543:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "6543:18:1"
											},
											"variableNames": [
												{
													"name": "tail",
													"nodeType": "YulIdentifier",
													"src": "6535:4:1"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "6577:9:1"
													},
													{
														"arguments": [
															{
																"name": "value0",
																"nodeType": "YulIdentifier",
																"src": "6592:6:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "6600:4:1",
																"type": "",
																"value": "0xff"
															}
														],
														"functionName": {
															"name": "and",
															"nodeType": "YulIdentifier",
															"src": "6588:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "6588:17:1"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "6570:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "6570:36:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "6570:36:1"
										}
									]
								},
								"name": "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nodeType": "YulTypedName",
										"src": "6494:9:1",
										"type": ""
									},
									{
										"name": "value0",
										"nodeType": "YulTypedName",
										"src": "6505:6:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nodeType": "YulTypedName",
										"src": "6516:4:1",
										"type": ""
									}
								],
								"src": "6428:184:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "6665:80:1",
									"statements": [
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "6692:22:1",
												"statements": [
													{
														"expression": {
															"arguments": [],
															"functionName": {
																"name": "panic_error_0x11",
																"nodeType": "YulIdentifier",
																"src": "6694:16:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "6694:18:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "6694:18:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "x",
														"nodeType": "YulIdentifier",
														"src": "6681:1:1"
													},
													{
														"arguments": [
															{
																"name": "y",
																"nodeType": "YulIdentifier",
																"src": "6688:1:1"
															}
														],
														"functionName": {
															"name": "not",
															"nodeType": "YulIdentifier",
															"src": "6684:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "6684:6:1"
													}
												],
												"functionName": {
													"name": "gt",
													"nodeType": "YulIdentifier",
													"src": "6678:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "6678:13:1"
											},
											"nodeType": "YulIf",
											"src": "6675:39:1"
										},
										{
											"nodeType": "YulAssignment",
											"src": "6723:16:1",
											"value": {
												"arguments": [
													{
														"name": "x",
														"nodeType": "YulIdentifier",
														"src": "6734:1:1"
													},
													{
														"name": "y",
														"nodeType": "YulIdentifier",
														"src": "6737:1:1"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "6730:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "6730:9:1"
											},
											"variableNames": [
												{
													"name": "sum",
													"nodeType": "YulIdentifier",
													"src": "6723:3:1"
												}
											]
										}
									]
								},
								"name": "checked_add_t_uint256",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "x",
										"nodeType": "YulTypedName",
										"src": "6648:1:1",
										"type": ""
									},
									{
										"name": "y",
										"nodeType": "YulTypedName",
										"src": "6651:1:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "sum",
										"nodeType": "YulTypedName",
										"src": "6657:3:1",
										"type": ""
									}
								],
								"src": "6617:128:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "6799:76:1",
									"statements": [
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "6821:22:1",
												"statements": [
													{
														"expression": {
															"arguments": [],
															"functionName": {
																"name": "panic_error_0x11",
																"nodeType": "YulIdentifier",
																"src": "6823:16:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "6823:18:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "6823:18:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "x",
														"nodeType": "YulIdentifier",
														"src": "6815:1:1"
													},
													{
														"name": "y",
														"nodeType": "YulIdentifier",
														"src": "6818:1:1"
													}
												],
												"functionName": {
													"name": "lt",
													"nodeType": "YulIdentifier",
													"src": "6812:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "6812:8:1"
											},
											"nodeType": "YulIf",
											"src": "6809:34:1"
										},
										{
											"nodeType": "YulAssignment",
											"src": "6852:17:1",
											"value": {
												"arguments": [
													{
														"name": "x",
														"nodeType": "YulIdentifier",
														"src": "6864:1:1"
													},
													{
														"name": "y",
														"nodeType": "YulIdentifier",
														"src": "6867:1:1"
													}
												],
												"functionName": {
													"name": "sub",
													"nodeType": "YulIdentifier",
													"src": "6860:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "6860:9:1"
											},
											"variableNames": [
												{
													"name": "diff",
													"nodeType": "YulIdentifier",
													"src": "6852:4:1"
												}
											]
										}
									]
								},
								"name": "checked_sub_t_uint256",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "x",
										"nodeType": "YulTypedName",
										"src": "6781:1:1",
										"type": ""
									},
									{
										"name": "y",
										"nodeType": "YulTypedName",
										"src": "6784:1:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "diff",
										"nodeType": "YulTypedName",
										"src": "6790:4:1",
										"type": ""
									}
								],
								"src": "6750:125:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "6935:325:1",
									"statements": [
										{
											"nodeType": "YulAssignment",
											"src": "6945:22:1",
											"value": {
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "6959:1:1",
														"type": "",
														"value": "1"
													},
													{
														"name": "data",
														"nodeType": "YulIdentifier",
														"src": "6962:4:1"
													}
												],
												"functionName": {
													"name": "shr",
													"nodeType": "YulIdentifier",
													"src": "6955:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "6955:12:1"
											},
											"variableNames": [
												{
													"name": "length",
													"nodeType": "YulIdentifier",
													"src": "6945:6:1"
												}
											]
										},
										{
											"nodeType": "YulVariableDeclaration",
											"src": "6976:38:1",
											"value": {
												"arguments": [
													{
														"name": "data",
														"nodeType": "YulIdentifier",
														"src": "7006:4:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "7012:1:1",
														"type": "",
														"value": "1"
													}
												],
												"functionName": {
													"name": "and",
													"nodeType": "YulIdentifier",
													"src": "7002:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "7002:12:1"
											},
											"variables": [
												{
													"name": "outOfPlaceEncoding",
													"nodeType": "YulTypedName",
													"src": "6980:18:1",
													"type": ""
												}
											]
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "7053:31:1",
												"statements": [
													{
														"nodeType": "YulAssignment",
														"src": "7055:27:1",
														"value": {
															"arguments": [
																{
																	"name": "length",
																	"nodeType": "YulIdentifier",
																	"src": "7069:6:1"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "7077:4:1",
																	"type": "",
																	"value": "0x7f"
																}
															],
															"functionName": {
																"name": "and",
																"nodeType": "YulIdentifier",
																"src": "7065:3:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "7065:17:1"
														},
														"variableNames": [
															{
																"name": "length",
																"nodeType": "YulIdentifier",
																"src": "7055:6:1"
															}
														]
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "outOfPlaceEncoding",
														"nodeType": "YulIdentifier",
														"src": "7033:18:1"
													}
												],
												"functionName": {
													"name": "iszero",
													"nodeType": "YulIdentifier",
													"src": "7026:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "7026:26:1"
											},
											"nodeType": "YulIf",
											"src": "7023:61:1"
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "7143:111:1",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "7164:1:1",
																	"type": "",
																	"value": "0"
																},
																{
																	"arguments": [
																		{
																			"kind": "number",
																			"nodeType": "YulLiteral",
																			"src": "7171:3:1",
																			"type": "",
																			"value": "224"
																		},
																		{
																			"kind": "number",
																			"nodeType": "YulLiteral",
																			"src": "7176:10:1",
																			"type": "",
																			"value": "0x4e487b71"
																		}
																	],
																	"functionName": {
																		"name": "shl",
																		"nodeType": "YulIdentifier",
																		"src": "7167:3:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "7167:20:1"
																}
															],
															"functionName": {
																"name": "mstore",
																"nodeType": "YulIdentifier",
																"src": "7157:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "7157:31:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "7157:31:1"
													},
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "7208:1:1",
																	"type": "",
																	"value": "4"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "7211:4:1",
																	"type": "",
																	"value": "0x22"
																}
															],
															"functionName": {
																"name": "mstore",
																"nodeType": "YulIdentifier",
																"src": "7201:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "7201:15:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "7201:15:1"
													},
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "7236:1:1",
																	"type": "",
																	"value": "0"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "7239:4:1",
																	"type": "",
																	"value": "0x24"
																}
															],
															"functionName": {
																"name": "revert",
																"nodeType": "YulIdentifier",
																"src": "7229:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "7229:15:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "7229:15:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "outOfPlaceEncoding",
														"nodeType": "YulIdentifier",
														"src": "7099:18:1"
													},
													{
														"arguments": [
															{
																"name": "length",
																"nodeType": "YulIdentifier",
																"src": "7122:6:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "7130:2:1",
																"type": "",
																"value": "32"
															}
														],
														"functionName": {
															"name": "lt",
															"nodeType": "YulIdentifier",
															"src": "7119:2:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "7119:14:1"
													}
												],
												"functionName": {
													"name": "eq",
													"nodeType": "YulIdentifier",
													"src": "7096:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "7096:38:1"
											},
											"nodeType": "YulIf",
											"src": "7093:161:1"
										}
									]
								},
								"name": "extract_byte_array_length",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "data",
										"nodeType": "YulTypedName",
										"src": "6915:4:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "length",
										"nodeType": "YulTypedName",
										"src": "6924:6:1",
										"type": ""
									}
								],
								"src": "6880:380:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "7297:95:1",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "7314:1:1",
														"type": "",
														"value": "0"
													},
													{
														"arguments": [
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "7321:3:1",
																"type": "",
																"value": "224"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "7326:10:1",
																"type": "",
																"value": "0x4e487b71"
															}
														],
														"functionName": {
															"name": "shl",
															"nodeType": "YulIdentifier",
															"src": "7317:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "7317:20:1"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "7307:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "7307:31:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "7307:31:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "7354:1:1",
														"type": "",
														"value": "4"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "7357:4:1",
														"type": "",
														"value": "0x11"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "7347:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "7347:15:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "7347:15:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "7378:1:1",
														"type": "",
														"value": "0"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "7381:4:1",
														"type": "",
														"value": "0x24"
													}
												],
												"functionName": {
													"name": "revert",
													"nodeType": "YulIdentifier",
													"src": "7371:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "7371:15:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "7371:15:1"
										}
									]
								},
								"name": "panic_error_0x11",
								"nodeType": "YulFunctionDefinition",
								"src": "7265:127:1"
							}
						]
					},
					"contents": "{\n    { }\n    function abi_decode_address(offset) -> value\n    {\n        value := calldataload(offset)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n    }\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        value1 := abi_decode_address(add(headStart, 32))\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        value1 := abi_decode_address(add(headStart, 32))\n        value2 := calldataload(add(headStart, 64))\n    }\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        value1 := calldataload(add(headStart, 32))\n    }\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := calldataload(headStart)\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n    }\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, iszero(iszero(value0)))\n    }\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        let _1 := 32\n        mstore(headStart, _1)\n        let length := mload(value0)\n        mstore(add(headStart, _1), length)\n        let i := 0\n        for { } lt(i, length) { i := add(i, _1) }\n        {\n            mstore(add(add(headStart, i), 64), mload(add(add(value0, i), _1)))\n        }\n        if gt(i, length)\n        {\n            mstore(add(add(headStart, length), 64), 0)\n        }\n        tail := add(add(headStart, and(add(length, 31), not(31))), 64)\n    }\n    function abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 35)\n        mstore(add(headStart, 64), \"ERC20: transfer to the zero addr\")\n        mstore(add(headStart, 96), \"ess\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"Ownable: new owner is the zero a\")\n        mstore(add(headStart, 96), \"ddress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 34)\n        mstore(add(headStart, 64), \"ERC20: approve to the zero addre\")\n        mstore(add(headStart, 96), \"ss\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_30cc447bcc13b3e22b45cef0dd9b0b514842d836dd9b6eb384e20dedfb47723a__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 27)\n        mstore(add(headStart, 64), \"SafeMath: addition overflow\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_65a60c5aacc50cefd03487296966acabbb8c0215e83a6f8d62fe006506c6d5f9__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 29)\n        mstore(add(headStart, 64), \"ERC20: approve amount is zero\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"Ownable: caller is not the owner\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 37)\n        mstore(add(headStart, 64), \"ERC20: transfer from the zero ad\")\n        mstore(add(headStart, 96), \"dress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 36)\n        mstore(add(headStart, 64), \"ERC20: approve from the zero add\")\n        mstore(add(headStart, 96), \"ress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_f68711a37cba874d0c88e835ade3f7574ea6c0b11ec90f1370a2d4f45a82072a__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 30)\n        mstore(add(headStart, 64), \"ERC20: transfer amount is zero\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 31)\n        mstore(add(headStart, 64), \"ERC20: mint to the zero address\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xff))\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        if gt(x, not(y)) { panic_error_0x11() }\n        sum := add(x, y)\n    }\n    function checked_sub_t_uint256(x, y) -> diff\n    {\n        if lt(x, y) { panic_error_0x11() }\n        diff := sub(x, y)\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := shr(1, data)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n}",
					"id": 1,
					"language": "Yul",
					"name": "#utility.yul"
				}
			],
			"immutableReferences": {},
			"linkReferences": {},
			"object": "608060405234801561001057600080fd5b50600436106101005760003560e01c8063893d20e811610097578063a457c2d711610066578063a457c2d714610217578063a9059cbb1461022a578063dd62ed3e1461023d578063f2fde38b1461027657600080fd5b8063893d20e8146101c65780638da5cb5b146101eb57806395d89b41146101fc578063a0712d681461020457600080fd5b8063313ce567116100d3578063313ce5671461016b578063395093511461018057806370a0823114610193578063715018a6146101bc57600080fd5b806306fdde0314610105578063095ea7b31461012357806318160ddd1461014657806323b872dd14610158575b600080fd5b61010d610289565b60405161011a9190610b95565b60405180910390f35b610136610131366004610b52565b61031b565b604051901515815260200161011a565b6006545b60405190815260200161011a565b610136610166366004610b16565b610331565b60055460405160ff909116815260200161011a565b61013661018e366004610b52565b61039a565b61014a6101a1366004610ac8565b6001600160a01b031660009081526001602052604090205490565b6101c46103d0565b005b6000546001600160a01b03165b6040516001600160a01b03909116815260200161011a565b6000546001600160a01b03166101d3565b61010d61044d565b610136610212366004610b7c565b61045c565b610136610225366004610b52565b61049a565b610136610238366004610b52565b6104e9565b61014a61024b366004610ae3565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6101c4610284366004610ac8565b6104f6565b60606003805461029890610c4e565b80601f01602080910402602001604051908101604052809291908181526020018280546102c490610c4e565b80156103115780601f106102e657610100808354040283529160200191610311565b820191906000526020600020905b8154815290600101906020018083116102f457829003601f168201915b5050505050905090565b60006103283384846105e0565b50600192915050565b600061033e848484610755565b610390843361038b85604051806060016040528060288152602001610cc6602891396001600160a01b038a166000908152600260209081526040808320338452909152902054919061092b565b6105e0565b5060019392505050565b3360008181526002602090815260408083206001600160a01b0387168452909152812054909161032891859061038b9086610965565b6000546001600160a01b031633146104035760405162461bcd60e51b81526004016103fa90610bea565b60405180910390fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b60606004805461029890610c4e565b600080546001600160a01b031633146104875760405162461bcd60e51b81526004016103fa90610bea565b61049133836109cb565b5060015b919050565b6000610328338461038b85604051806060016040528060258152602001610cee602591393360009081526002602090815260408083206001600160a01b038d168452909152902054919061092b565b6000610328338484610755565b6000546001600160a01b031633146105205760405162461bcd60e51b81526004016103fa90610bea565b6001600160a01b0381166105855760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103fa565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0383166106425760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103fa565b6001600160a01b0382166106a35760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103fa565b600081116106f35760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20617070726f766520616d6f756e74206973207a65726f00000060448201526064016103fa565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166107b95760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103fa565b6001600160a01b03821661081b5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103fa565b6000811161086b5760405162461bcd60e51b815260206004820152601e60248201527f45524332303a207472616e7366657220616d6f756e74206973207a65726f000060448201526064016103fa565b6108a881604051806060016040528060268152602001610ca0602691396001600160a01b038616600090815260016020526040902054919061092b565b6001600160a01b0380851660009081526001602052604080822093909355908416815220546108d79082610965565b6001600160a01b0380841660008181526001602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906107489085815260200190565b6000818484111561094f5760405162461bcd60e51b81526004016103fa9190610b95565b50600061095c8486610c37565b95945050505050565b6000806109728385610c1f565b9050838110156109c45760405162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f77000000000060448201526064016103fa565b9392505050565b6001600160a01b038216610a215760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103fa565b600654610a2e9082610965565b6006556001600160a01b038216600090815260016020526040902054610a549082610965565b6001600160a01b0383166000818152600160205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610aa59085815260200190565b60405180910390a35050565b80356001600160a01b038116811461049557600080fd5b600060208284031215610ada57600080fd5b6109c482610ab1565b60008060408385031215610af657600080fd5b610aff83610ab1565b9150610b0d60208401610ab1565b90509250929050565b600080600060608486031215610b2b57600080fd5b610b3484610ab1565b9250610b4260208501610ab1565b9150604084013590509250925092565b60008060408385031215610b6557600080fd5b610b6e83610ab1565b946020939093013593505050565b600060208284031215610b8e57600080fd5b5035919050565b600060208083528351808285015260005b81811015610bc257858101830151858201604001528201610ba6565b81811115610bd4576000604083870101525b50601f01601f1916929092016040019392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60008219821115610c3257610c32610c89565b500190565b600082821015610c4957610c49610c89565b500390565b600181811c90821680610c6257607f821691505b60208210811415610c8357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfe45524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220adc3290b01cb6e7a5dc94cf3c89b1b739a15d81cfb4d831dafba5a8474e5f6b964736f6c63430008070033",
			"opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x100 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x893D20E8 GT PUSH2 0x97 JUMPI DUP1 PUSH4 0xA457C2D7 GT PUSH2 0x66 JUMPI DUP1 PUSH4 0xA457C2D7 EQ PUSH2 0x217 JUMPI DUP1 PUSH4 0xA9059CBB EQ PUSH2 0x22A JUMPI DUP1 PUSH4 0xDD62ED3E EQ PUSH2 0x23D JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x276 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 PUSH4 0x893D20E8 EQ PUSH2 0x1C6 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x1EB JUMPI DUP1 PUSH4 0x95D89B41 EQ PUSH2 0x1FC JUMPI DUP1 PUSH4 0xA0712D68 EQ PUSH2 0x204 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 PUSH4 0x313CE567 GT PUSH2 0xD3 JUMPI DUP1 PUSH4 0x313CE567 EQ PUSH2 0x16B JUMPI DUP1 PUSH4 0x39509351 EQ PUSH2 0x180 JUMPI DUP1 PUSH4 0x70A08231 EQ PUSH2 0x193 JUMPI DUP1 PUSH4 0x715018A6 EQ PUSH2 0x1BC JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 PUSH4 0x6FDDE03 EQ PUSH2 0x105 JUMPI DUP1 PUSH4 0x95EA7B3 EQ PUSH2 0x123 JUMPI DUP1 PUSH4 0x18160DDD EQ PUSH2 0x146 JUMPI DUP1 PUSH4 0x23B872DD EQ PUSH2 0x158 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x10D PUSH2 0x289 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x11A SWAP2 SWAP1 PUSH2 0xB95 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x136 PUSH2 0x131 CALLDATASIZE PUSH1 0x4 PUSH2 0xB52 JUMP JUMPDEST PUSH2 0x31B JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x11A JUMP JUMPDEST PUSH1 0x6 SLOAD JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x11A JUMP JUMPDEST PUSH2 0x136 PUSH2 0x166 CALLDATASIZE PUSH1 0x4 PUSH2 0xB16 JUMP JUMPDEST PUSH2 0x331 JUMP JUMPDEST PUSH1 0x5 SLOAD PUSH1 0x40 MLOAD PUSH1 0xFF SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x11A JUMP JUMPDEST PUSH2 0x136 PUSH2 0x18E CALLDATASIZE PUSH1 0x4 PUSH2 0xB52 JUMP JUMPDEST PUSH2 0x39A JUMP JUMPDEST PUSH2 0x14A PUSH2 0x1A1 CALLDATASIZE PUSH1 0x4 PUSH2 0xAC8 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD SWAP1 JUMP JUMPDEST PUSH2 0x1C4 PUSH2 0x3D0 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x11A JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH2 0x1D3 JUMP JUMPDEST PUSH2 0x10D PUSH2 0x44D JUMP JUMPDEST PUSH2 0x136 PUSH2 0x212 CALLDATASIZE PUSH1 0x4 PUSH2 0xB7C JUMP JUMPDEST PUSH2 0x45C JUMP JUMPDEST PUSH2 0x136 PUSH2 0x225 CALLDATASIZE PUSH1 0x4 PUSH2 0xB52 JUMP JUMPDEST PUSH2 0x49A JUMP JUMPDEST PUSH2 0x136 PUSH2 0x238 CALLDATASIZE PUSH1 0x4 PUSH2 0xB52 JUMP JUMPDEST PUSH2 0x4E9 JUMP JUMPDEST PUSH2 0x14A PUSH2 0x24B CALLDATASIZE PUSH1 0x4 PUSH2 0xAE3 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP2 DUP3 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP4 SWAP1 SWAP5 AND DUP3 MSTORE SWAP2 SWAP1 SWAP2 MSTORE KECCAK256 SLOAD SWAP1 JUMP JUMPDEST PUSH2 0x1C4 PUSH2 0x284 CALLDATASIZE PUSH1 0x4 PUSH2 0xAC8 JUMP JUMPDEST PUSH2 0x4F6 JUMP JUMPDEST PUSH1 0x60 PUSH1 0x3 DUP1 SLOAD PUSH2 0x298 SWAP1 PUSH2 0xC4E JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0x2C4 SWAP1 PUSH2 0xC4E JUMP JUMPDEST DUP1 ISZERO PUSH2 0x311 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x2E6 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x311 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x2F4 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH2 0x328 CALLER DUP5 DUP5 PUSH2 0x5E0 JUMP JUMPDEST POP PUSH1 0x1 SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x33E DUP5 DUP5 DUP5 PUSH2 0x755 JUMP JUMPDEST PUSH2 0x390 DUP5 CALLER PUSH2 0x38B DUP6 PUSH1 0x40 MLOAD DUP1 PUSH1 0x60 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x28 DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0xCC6 PUSH1 0x28 SWAP2 CODECOPY PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP11 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 CALLER DUP5 MSTORE SWAP1 SWAP2 MSTORE SWAP1 KECCAK256 SLOAD SWAP2 SWAP1 PUSH2 0x92B JUMP JUMPDEST PUSH2 0x5E0 JUMP JUMPDEST POP PUSH1 0x1 SWAP4 SWAP3 POP POP POP JUMP JUMPDEST CALLER PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP8 AND DUP5 MSTORE SWAP1 SWAP2 MSTORE DUP2 KECCAK256 SLOAD SWAP1 SWAP2 PUSH2 0x328 SWAP2 DUP6 SWAP1 PUSH2 0x38B SWAP1 DUP7 PUSH2 0x965 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND CALLER EQ PUSH2 0x403 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x3FA SWAP1 PUSH2 0xBEA JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 SWAP2 AND SWAP1 PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 SWAP1 DUP4 SWAP1 LOG3 PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT AND SWAP1 SSTORE JUMP JUMPDEST PUSH1 0x60 PUSH1 0x4 DUP1 SLOAD PUSH2 0x298 SWAP1 PUSH2 0xC4E JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND CALLER EQ PUSH2 0x487 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x3FA SWAP1 PUSH2 0xBEA JUMP JUMPDEST PUSH2 0x491 CALLER DUP4 PUSH2 0x9CB JUMP JUMPDEST POP PUSH1 0x1 JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x328 CALLER DUP5 PUSH2 0x38B DUP6 PUSH1 0x40 MLOAD DUP1 PUSH1 0x60 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x25 DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0xCEE PUSH1 0x25 SWAP2 CODECOPY CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP14 AND DUP5 MSTORE SWAP1 SWAP2 MSTORE SWAP1 KECCAK256 SLOAD SWAP2 SWAP1 PUSH2 0x92B JUMP JUMPDEST PUSH1 0x0 PUSH2 0x328 CALLER DUP5 DUP5 PUSH2 0x755 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND CALLER EQ PUSH2 0x520 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x3FA SWAP1 PUSH2 0xBEA JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND PUSH2 0x585 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x26 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4F776E61626C653A206E6577206F776E657220697320746865207A65726F2061 PUSH1 0x44 DUP3 ADD MSTORE PUSH6 0x646472657373 PUSH1 0xD0 SHL PUSH1 0x64 DUP3 ADD MSTORE PUSH1 0x84 ADD PUSH2 0x3FA JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP1 DUP6 AND SWAP4 SWAP3 AND SWAP2 PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 SWAP2 LOG3 PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP3 SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND PUSH2 0x642 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 DUP1 DUP3 ADD MSTORE PUSH32 0x45524332303A20617070726F76652066726F6D20746865207A65726F20616464 PUSH1 0x44 DUP3 ADD MSTORE PUSH4 0x72657373 PUSH1 0xE0 SHL PUSH1 0x64 DUP3 ADD MSTORE PUSH1 0x84 ADD PUSH2 0x3FA JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND PUSH2 0x6A3 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x22 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x45524332303A20617070726F766520746F20746865207A65726F206164647265 PUSH1 0x44 DUP3 ADD MSTORE PUSH2 0x7373 PUSH1 0xF0 SHL PUSH1 0x64 DUP3 ADD MSTORE PUSH1 0x84 ADD PUSH2 0x3FA JUMP JUMPDEST PUSH1 0x0 DUP2 GT PUSH2 0x6F3 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x1D PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x45524332303A20617070726F766520616D6F756E74206973207A65726F000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x3FA JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 DUP2 AND PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP5 DUP8 AND DUP1 DUP5 MSTORE SWAP5 DUP3 MSTORE SWAP2 DUP3 SWAP1 KECCAK256 DUP6 SWAP1 SSTORE SWAP1 MLOAD DUP5 DUP2 MSTORE PUSH32 0x8C5BE1E5EBEC7D5BD14F71427D1E84F3DD0314C0F7B2291E5B200AC8C7C3B925 SWAP2 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND PUSH2 0x7B9 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x25 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x45524332303A207472616E736665722066726F6D20746865207A65726F206164 PUSH1 0x44 DUP3 ADD MSTORE PUSH5 0x6472657373 PUSH1 0xD8 SHL PUSH1 0x64 DUP3 ADD MSTORE PUSH1 0x84 ADD PUSH2 0x3FA JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND PUSH2 0x81B JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x23 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x45524332303A207472616E7366657220746F20746865207A65726F2061646472 PUSH1 0x44 DUP3 ADD MSTORE PUSH3 0x657373 PUSH1 0xE8 SHL PUSH1 0x64 DUP3 ADD MSTORE PUSH1 0x84 ADD PUSH2 0x3FA JUMP JUMPDEST PUSH1 0x0 DUP2 GT PUSH2 0x86B JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x1E PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x45524332303A207472616E7366657220616D6F756E74206973207A65726F0000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x3FA JUMP JUMPDEST PUSH2 0x8A8 DUP2 PUSH1 0x40 MLOAD DUP1 PUSH1 0x60 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x26 DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0xCA0 PUSH1 0x26 SWAP2 CODECOPY PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP7 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD SWAP2 SWAP1 PUSH2 0x92B JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP1 DUP6 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 DUP1 DUP3 KECCAK256 SWAP4 SWAP1 SWAP4 SSTORE SWAP1 DUP5 AND DUP2 MSTORE KECCAK256 SLOAD PUSH2 0x8D7 SWAP1 DUP3 PUSH2 0x965 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP1 DUP5 AND PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 DUP2 SWAP1 KECCAK256 SWAP4 SWAP1 SWAP4 SSTORE SWAP2 MLOAD SWAP1 DUP6 AND SWAP1 PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF SWAP1 PUSH2 0x748 SWAP1 DUP6 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP2 DUP5 DUP5 GT ISZERO PUSH2 0x94F JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x3FA SWAP2 SWAP1 PUSH2 0xB95 JUMP JUMPDEST POP PUSH1 0x0 PUSH2 0x95C DUP5 DUP7 PUSH2 0xC37 JUMP JUMPDEST SWAP6 SWAP5 POP POP POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x972 DUP4 DUP6 PUSH2 0xC1F JUMP JUMPDEST SWAP1 POP DUP4 DUP2 LT ISZERO PUSH2 0x9C4 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x1B PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x536166654D6174683A206164646974696F6E206F766572666C6F770000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x3FA JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND PUSH2 0xA21 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x1F PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x45524332303A206D696E7420746F20746865207A65726F206164647265737300 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x3FA JUMP JUMPDEST PUSH1 0x6 SLOAD PUSH2 0xA2E SWAP1 DUP3 PUSH2 0x965 JUMP JUMPDEST PUSH1 0x6 SSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH2 0xA54 SWAP1 DUP3 PUSH2 0x965 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 DUP1 DUP3 KECCAK256 SWAP4 SWAP1 SWAP4 SSTORE SWAP2 MLOAD SWAP1 SWAP2 SWAP1 PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF SWAP1 PUSH2 0xAA5 SWAP1 DUP6 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST DUP1 CALLDATALOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH2 0x495 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xADA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x9C4 DUP3 PUSH2 0xAB1 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0xAF6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xAFF DUP4 PUSH2 0xAB1 JUMP JUMPDEST SWAP2 POP PUSH2 0xB0D PUSH1 0x20 DUP5 ADD PUSH2 0xAB1 JUMP JUMPDEST SWAP1 POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0xB2B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xB34 DUP5 PUSH2 0xAB1 JUMP JUMPDEST SWAP3 POP PUSH2 0xB42 PUSH1 0x20 DUP6 ADD PUSH2 0xAB1 JUMP JUMPDEST SWAP2 POP PUSH1 0x40 DUP5 ADD CALLDATALOAD SWAP1 POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0xB65 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xB6E DUP4 PUSH2 0xAB1 JUMP JUMPDEST SWAP5 PUSH1 0x20 SWAP4 SWAP1 SWAP4 ADD CALLDATALOAD SWAP4 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xB8E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP1 DUP4 MSTORE DUP4 MLOAD DUP1 DUP3 DUP6 ADD MSTORE PUSH1 0x0 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0xBC2 JUMPI DUP6 DUP2 ADD DUP4 ADD MLOAD DUP6 DUP3 ADD PUSH1 0x40 ADD MSTORE DUP3 ADD PUSH2 0xBA6 JUMP JUMPDEST DUP2 DUP2 GT ISZERO PUSH2 0xBD4 JUMPI PUSH1 0x0 PUSH1 0x40 DUP4 DUP8 ADD ADD MSTORE JUMPDEST POP PUSH1 0x1F ADD PUSH1 0x1F NOT AND SWAP3 SWAP1 SWAP3 ADD PUSH1 0x40 ADD SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE DUP2 DUP2 ADD MSTORE PUSH32 0x4F776E61626C653A2063616C6C6572206973206E6F7420746865206F776E6572 PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 NOT DUP3 GT ISZERO PUSH2 0xC32 JUMPI PUSH2 0xC32 PUSH2 0xC89 JUMP JUMPDEST POP ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 LT ISZERO PUSH2 0xC49 JUMPI PUSH2 0xC49 PUSH2 0xC89 JUMP JUMPDEST POP SUB SWAP1 JUMP JUMPDEST PUSH1 0x1 DUP2 DUP2 SHR SWAP1 DUP3 AND DUP1 PUSH2 0xC62 JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 EQ ISZERO PUSH2 0xC83 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT INVALID GASLIMIT MSTORE NUMBER ORIGIN ADDRESS GASPRICE KECCAK256 PUSH21 0x72616E7366657220616D6F756E7420657863656564 PUSH20 0x2062616C616E636545524332303A207472616E73 PUSH7 0x657220616D6F75 PUSH15 0x74206578636565647320616C6C6F77 PUSH2 0x6E63 PUSH6 0x45524332303A KECCAK256 PUSH5 0x6563726561 PUSH20 0x656420616C6C6F77616E63652062656C6F77207A PUSH6 0x726FA2646970 PUSH7 0x7358221220ADC3 0x29 SIGNEXTEND ADD 0xCB PUSH15 0x7A5DC94CF3C89B1B739A15D81CFB4D DUP4 SAR 0xAF 0xBA GAS DUP5 PUSH21 0xE5F6B964736F6C6343000807003300000000000000 ",
			"sourceMap": "3668:4465:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4302:94;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5181:163;;;;;;:::i;:::-;;:::i;:::-;;;1798:14:1;;1791:22;1773:41;;1761:2;1746:18;5181:163:0;1633:187:1;4612:102:0;4694:12;;4612:102;;;6392:25:1;;;6380:2;6365:18;4612:102:0;6246:177:1;5352:315:0;;;;;;:::i;:::-;;:::i;4510:94::-;4587:9;;4510:94;;4587:9;;;;6570:36:1;;6558:2;6543:18;4510:94:0;6428:184:1;5675:202:0;;;;;;:::i;:::-;;:::i;4722:121::-;;;;;;:::i;:::-;-1:-1:-1;;;;;4817:18:0;4790:7;4817:18;;;:9;:18;;;;;;;4722:121;869:148;;;:::i;:::-;;4209:85;4252:7;720:6;-1:-1:-1;;;;;720:6:0;4209:85;;;-1:-1:-1;;;;;1589:32:1;;;1571:51;;1559:2;1544:18;4209:85:0;1425:203:1;655:79:0;693:7;720:6;-1:-1:-1;;;;;720:6:0;655:79;;4404:98;;;:::i;6136:130::-;;;;;;:::i;:::-;;:::i;5885:243::-;;;;;;:::i;:::-;;:::i;5004:169::-;;;;;;:::i;:::-;;:::i;4851:145::-;;;;;;:::i;:::-;-1:-1:-1;;;;;4961:18:0;;;4934:7;4961:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;4851:145;1025:244;;;;;;:::i;:::-;;:::i;4302:94::-;4350:13;4383:5;4376:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4302:94;:::o;5181:163::-;5258:4;5275:39;187:10;5298:7;5307:6;5275:8;:39::i;:::-;-1:-1:-1;5332:4:0;5181:163;;;;:::o;5352:315::-;5452:4;5469:36;5479:6;5487:9;5498:6;5469:9;:36::i;:::-;5516:121;5525:6;187:10;5547:89;5585:6;5547:89;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;5547:19:0;;;;;;:11;:19;;;;;;;;187:10;5547:33;;;;;;;;;;:37;:89::i;:::-;5516:8;:121::i;:::-;-1:-1:-1;5655:4:0;5352:315;;;;;:::o;5675:202::-;187:10;5751:4;5800:25;;;:11;:25;;;;;;;;-1:-1:-1;;;;;5800:34:0;;;;;;;;;;5751:4;;5768:79;;5791:7;;5800:46;;5839:6;5800:38;:46::i;869:148::-;782:6;;-1:-1:-1;;;;;782:6:0;187:10;782:22;774:67;;;;-1:-1:-1;;;774:67:0;;;;;;;:::i;:::-;;;;;;;;;976:1:::1;960:6:::0;;939:40:::1;::::0;-1:-1:-1;;;;;960:6:0;;::::1;::::0;939:40:::1;::::0;976:1;;939:40:::1;1007:1;990:19:::0;;-1:-1:-1;;;;;;990:19:0::1;::::0;;869:148::o;4404:98::-;4454:13;4487:7;4480:14;;;;;:::i;6136:130::-;6192:4;782:6;;-1:-1:-1;;;;;782:6:0;187:10;782:22;774:67;;;;-1:-1:-1;;;774:67:0;;;;;;;:::i;:::-;6209:27:::1;187:10:::0;6229:6:::1;6209:5;:27::i;:::-;-1:-1:-1::0;6254:4:0::1;852:1;6136:130:::0;;;:::o;5885:243::-;5961:4;5978:120;187:10;6001:7;6010:87;6049:6;6010:87;;;;;;;;;;;;;;;;;187:10;6010:25;;;;:11;:25;;;;;;;;-1:-1:-1;;;;;6010:34:0;;;;;;;;;;;;:38;:87::i;5004:169::-;5084:4;5101:42;187:10;5125:9;5136:6;5101:9;:42::i;1025:244::-;782:6;;-1:-1:-1;;;;;782:6:0;187:10;782:22;774:67;;;;-1:-1:-1;;;774:67:0;;;;;;;:::i;:::-;-1:-1:-1;;;;;1114:22:0;::::1;1106:73;;;::::0;-1:-1:-1;;;1106:73:0;;3033:2:1;1106:73:0::1;::::0;::::1;3015:21:1::0;3072:2;3052:18;;;3045:30;3111:34;3091:18;;;3084:62;-1:-1:-1;;;3162:18:1;;;3155:36;3208:19;;1106:73:0::1;2831:402:1::0;1106:73:0::1;1216:6;::::0;;1195:38:::1;::::0;-1:-1:-1;;;;;1195:38:0;;::::1;::::0;1216:6;::::1;::::0;1195:38:::1;::::0;::::1;1244:6;:17:::0;;-1:-1:-1;;;;;;1244:17:0::1;-1:-1:-1::0;;;;;1244:17:0;;;::::1;::::0;;;::::1;::::0;;1025:244::o;6817:401::-;-1:-1:-1;;;;;6911:19:0;;6903:68;;;;-1:-1:-1;;;6903:68:0;;5324:2:1;6903:68:0;;;5306:21:1;5363:2;5343:18;;;5336:30;5402:34;5382:18;;;5375:62;-1:-1:-1;;;5453:18:1;;;5446:34;5497:19;;6903:68:0;5122:400:1;6903:68:0;-1:-1:-1;;;;;6990:21:0;;6982:68;;;;-1:-1:-1;;;6982:68:0;;3440:2:1;6982:68:0;;;3422:21:1;3479:2;3459:18;;;3452:30;3518:34;3498:18;;;3491:62;-1:-1:-1;;;3569:18:1;;;3562:32;3611:19;;6982:68:0;3238:398:1;6982:68:0;7078:1;7069:6;:10;7061:52;;;;-1:-1:-1;;;7061:52:0;;4199:2:1;7061:52:0;;;4181:21:1;4238:2;4218:18;;;4211:30;4277:31;4257:18;;;4250:59;4326:18;;7061:52:0;3997:353:1;7061:52:0;-1:-1:-1;;;;;7126:18:0;;;;;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;:36;;;7178:32;;6392:25:1;;;7178:32:0;;6365:18:1;7178:32:0;;;;;;;;6817:401;;;:::o;6274:535::-;-1:-1:-1;;;;;6372:20:0;;6364:70;;;;-1:-1:-1;;;6364:70:0;;4918:2:1;6364:70:0;;;4900:21:1;4957:2;4937:18;;;4930:30;4996:34;4976:18;;;4969:62;-1:-1:-1;;;5047:18:1;;;5040:35;5092:19;;6364:70:0;4716:401:1;6364:70:0;-1:-1:-1;;;;;6453:23:0;;6445:71;;;;-1:-1:-1;;;6445:71:0;;2629:2:1;6445:71:0;;;2611:21:1;2668:2;2648:18;;;2641:30;2707:34;2687:18;;;2680:62;-1:-1:-1;;;2758:18:1;;;2751:33;2801:19;;6445:71:0;2427:399:1;6445:71:0;6544:1;6535:6;:10;6527:53;;;;-1:-1:-1;;;6527:53:0;;5729:2:1;6527:53:0;;;5711:21:1;5768:2;5748:18;;;5741:30;5807:32;5787:18;;;5780:60;5857:18;;6527:53:0;5527:354:1;6527:53:0;6613:71;6635:6;6613:71;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;6613:17:0;;;;;;:9;:17;;;;;;;:71;:21;:71::i;:::-;-1:-1:-1;;;;;6593:17:0;;;;;;;:9;:17;;;;;;:91;;;;6718:20;;;;;;;:32;;6743:6;6718:24;:32::i;:::-;-1:-1:-1;;;;;6695:20:0;;;;;;;:9;:20;;;;;;;:55;;;;6766:35;;;;;;;;;;6794:6;6392:25:1;;6380:2;6365:18;;6246:177;2567:192:0;2653:7;2689:12;2681:6;;;;2673:29;;;;-1:-1:-1;;;2673:29:0;;;;;;;;:::i;:::-;-1:-1:-1;2713:9:0;2725:5;2729:1;2725;:5;:::i;:::-;2713:17;2567:192;-1:-1:-1;;;;;2567:192:0:o;2234:181::-;2292:7;;2324:5;2328:1;2324;:5;:::i;:::-;2312:17;;2353:1;2348;:6;;2340:46;;;;-1:-1:-1;;;2340:46:0;;3843:2:1;2340:46:0;;;3825:21:1;3882:2;3862:18;;;3855:30;3921:29;3901:18;;;3894:57;3968:18;;2340:46:0;3641:351:1;2340:46:0;2406:1;2234:181;-1:-1:-1;;;2234:181:0:o;7226:308::-;-1:-1:-1;;;;;7302:21:0;;7294:65;;;;-1:-1:-1;;;7294:65:0;;6088:2:1;7294:65:0;;;6070:21:1;6127:2;6107:18;;;6100:30;6166:33;6146:18;;;6139:61;6217:18;;7294:65:0;5886:355:1;7294:65:0;7387:12;;:24;;7404:6;7387:16;:24::i;:::-;7372:12;:39;-1:-1:-1;;;;;7443:18:0;;;;;;:9;:18;;;;;;:30;;7466:6;7443:22;:30::i;:::-;-1:-1:-1;;;;;7422:18:0;;;;;;:9;:18;;;;;;:51;;;;7489:37;;7422:18;;;7489:37;;;;7519:6;6392:25:1;;6380:2;6365:18;;6246:177;7489:37:0;;;;;;;;7226:308;;:::o;14:173:1:-;82:20;;-1:-1:-1;;;;;131:31:1;;121:42;;111:70;;177:1;174;167:12;192:186;251:6;304:2;292:9;283:7;279:23;275:32;272:52;;;320:1;317;310:12;272:52;343:29;362:9;343:29;:::i;383:260::-;451:6;459;512:2;500:9;491:7;487:23;483:32;480:52;;;528:1;525;518:12;480:52;551:29;570:9;551:29;:::i;:::-;541:39;;599:38;633:2;622:9;618:18;599:38;:::i;:::-;589:48;;383:260;;;;;:::o;648:328::-;725:6;733;741;794:2;782:9;773:7;769:23;765:32;762:52;;;810:1;807;800:12;762:52;833:29;852:9;833:29;:::i;:::-;823:39;;881:38;915:2;904:9;900:18;881:38;:::i;:::-;871:48;;966:2;955:9;951:18;938:32;928:42;;648:328;;;;;:::o;981:254::-;1049:6;1057;1110:2;1098:9;1089:7;1085:23;1081:32;1078:52;;;1126:1;1123;1116:12;1078:52;1149:29;1168:9;1149:29;:::i;:::-;1139:39;1225:2;1210:18;;;;1197:32;;-1:-1:-1;;;981:254:1:o;1240:180::-;1299:6;1352:2;1340:9;1331:7;1327:23;1323:32;1320:52;;;1368:1;1365;1358:12;1320:52;-1:-1:-1;1391:23:1;;1240:180;-1:-1:-1;1240:180:1:o;1825:597::-;1937:4;1966:2;1995;1984:9;1977:21;2027:6;2021:13;2070:6;2065:2;2054:9;2050:18;2043:34;2095:1;2105:140;2119:6;2116:1;2113:13;2105:140;;;2214:14;;;2210:23;;2204:30;2180:17;;;2199:2;2176:26;2169:66;2134:10;;2105:140;;;2263:6;2260:1;2257:13;2254:91;;;2333:1;2328:2;2319:6;2308:9;2304:22;2300:31;2293:42;2254:91;-1:-1:-1;2406:2:1;2385:15;-1:-1:-1;;2381:29:1;2366:45;;;;2413:2;2362:54;;1825:597;-1:-1:-1;;;1825:597:1:o;4355:356::-;4557:2;4539:21;;;4576:18;;;4569:30;4635:34;4630:2;4615:18;;4608:62;4702:2;4687:18;;4355:356::o;6617:128::-;6657:3;6688:1;6684:6;6681:1;6678:13;6675:39;;;6694:18;;:::i;:::-;-1:-1:-1;6730:9:1;;6617:128::o;6750:125::-;6790:4;6818:1;6815;6812:8;6809:34;;;6823:18;;:::i;:::-;-1:-1:-1;6860:9:1;;6750:125::o;6880:380::-;6959:1;6955:12;;;;7002;;;7023:61;;7077:4;7069:6;7065:17;7055:27;;7023:61;7130:2;7122:6;7119:14;7099:18;7096:38;7093:161;;;7176:10;7171:3;7167:20;7164:1;7157:31;7211:4;7208:1;7201:15;7239:4;7236:1;7229:15;7093:161;;6880:380;;;:::o;7265:127::-;7326:10;7321:3;7317:20;7314:1;7307:31;7357:4;7354:1;7347:15;7381:4;7378:1;7371:15"
		},
		"gasEstimates": {
			"creation": {
				"codeDepositCost": "680000",
				"executionCost": "infinite",
				"totalCost": "infinite"
			},
			"external": {
				"allowance(address,address)": "infinite",
				"approve(address,uint256)": "24666",
				"balanceOf(address)": "2604",
				"decimals()": "2312",
				"decreaseAllowance(address,uint256)": "infinite",
				"getOwner()": "2343",
				"increaseAllowance(address,uint256)": "27079",
				"mint(uint256)": "infinite",
				"name()": "infinite",
				"owner()": "2376",
				"renounceOwnership()": "30254",
				"symbol()": "infinite",
				"totalSupply()": "2349",
				"transfer(address,uint256)": "infinite",
				"transferFrom(address,address,uint256)": "infinite",
				"transferOwnership(address)": "30488"
			},
			"internal": {
				"_approve(address,address,uint256)": "infinite",
				"_burn(address,uint256)": "infinite",
				"_burnFrom(address,uint256)": "infinite",
				"_mint(address,uint256)": "infinite",
				"_transfer(address,address,uint256)": "infinite"
			}
		},
		"methodIdentifiers": {
			"allowance(address,address)": "dd62ed3e",
			"approve(address,uint256)": "095ea7b3",
			"balanceOf(address)": "70a08231",
			"decimals()": "313ce567",
			"decreaseAllowance(address,uint256)": "a457c2d7",
			"getOwner()": "893d20e8",
			"increaseAllowance(address,uint256)": "39509351",
			"mint(uint256)": "a0712d68",
			"name()": "06fdde03",
			"owner()": "8da5cb5b",
			"renounceOwnership()": "715018a6",
			"symbol()": "95d89b41",
			"totalSupply()": "18160ddd",
			"transfer(address,uint256)": "a9059cbb",
			"transferFrom(address,address,uint256)": "23b872dd",
			"transferOwnership(address)": "f2fde38b"
		}
	},
	"abi": [
		{
			"inputs": [],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "Approval",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "previousOwner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "OwnershipTransferred",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "Transfer",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				}
			],
			"name": "allowance",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "approve",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "account",
					"type": "address"
				}
			],
			"name": "balanceOf",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "decimals",
			"outputs": [
				{
					"internalType": "uint8",
					"name": "",
					"type": "uint8"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "decreaseAllowance",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getOwner",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "increaseAllowance",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "mint",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "name",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "owner",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "renounceOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "symbol",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "totalSupply",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "recipient",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "transfer",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "sender",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "recipient",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "transferFrom",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "transferOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		}
	]
}
;

export default ERC20TOKENABI;