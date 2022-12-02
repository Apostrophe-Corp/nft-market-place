// Automatically generated with Reach 0.1.12 (4ca32459)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (4ca32459)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0, ctc1]);
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc4 = stdlib.T_Address;
  
  return {
    infos: {
      },
    views: {
      1: [ctc3, ctc4]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1, ctc2]);
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc5 = stdlib.T_Address;
  
  
  const v93 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v94 = [v93];
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./test_token.rsh:13:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./test_token.rsh:13:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v100, time: v99, didSend: v22, from: v98 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v100, time: v99, didSend: v22, from: v98 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v94, v98],
    evt_cnt: 0,
    funcNum: 1,
    lct: v99,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./test_token.rsh:15:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v103, time: v102, didSend: v27, from: v101 } = txn2;
      
      ;
      const v105 = 'Aro1914                         ';
      const v106 = 'Aro1914 ';
      const v107 = 'https://                                                                                        ';
      const v108 = '                                ';
      const v109 = stdlib.simTokenNew(sim_r, v105, v106, v107, v108, stdlib.checkedBigNumberify('./test_token.rsh:20:25:decimal', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('./test_token.rsh:21:27:decimal', stdlib.UInt_max, '0'), getSimTokCtr());
      const v110 = await txn2.getOutput('internal', 'v109', ctc0, v109);
      const v120 = v94[stdlib.checkedBigNumberify('./test_token.rsh:16:28:application', stdlib.UInt_max, '0')];
      const v121 = stdlib.Array_set(v120, '0', stdlib.checkedBigNumberify('./test_token.rsh:20:25:decimal', stdlib.UInt_max, '1'));
      const v122 = stdlib.Array_set(v94, stdlib.checkedBigNumberify('./test_token.rsh:16:28:application', stdlib.UInt_max, '0'), v121);
      const v124 = v122[stdlib.checkedBigNumberify('./test_token.rsh:16:28:application', stdlib.UInt_max, '0')];
      const v125 = stdlib.Array_set(v124, '1', stdlib.checkedBigNumberify('./test_token.rsh:20:25:decimal', stdlib.UInt_max, '1'));
      const v126 = stdlib.Array_set(v122, stdlib.checkedBigNumberify('./test_token.rsh:16:28:application', stdlib.UInt_max, '0'), v125);
      const v127 = v126[stdlib.checkedBigNumberify('./test_token.rsh:16:28:application', stdlib.UInt_max, '0')];
      const v128 = stdlib.Array_set(v127, '2', false);
      const v129 = stdlib.Array_set(v126, stdlib.checkedBigNumberify('./test_token.rsh:16:28:application', stdlib.UInt_max, '0'), v128);
      const v130 = v129[stdlib.checkedBigNumberify('./test_token.rsh:23:15:application', stdlib.UInt_max, '0')];
      const v131 = v130[stdlib.checkedBigNumberify('./test_token.rsh:23:15:application', stdlib.UInt_max, '0')];
      stdlib.simTokenBurn(sim_r, v110, v131);
      stdlib.simTokenDestroy(sim_r, v110);
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v103, time: v102, didSend: v27, from: v101 } = txn2;
  ;
  const v104 = stdlib.addressEq(v98, v101);
  stdlib.assert(v104, {
    at: './test_token.rsh:15:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v105 = 'Aro1914                         ';
  const v106 = 'Aro1914 ';
  const v107 = 'https://                                                                                        ';
  const v108 = '                                ';
  const v109 = undefined /* TokenNew */;
  const v110 = await txn2.getOutput('internal', 'v109', ctc0, v109);
  const v120 = v94[stdlib.checkedBigNumberify('./test_token.rsh:16:28:application', stdlib.UInt_max, '0')];
  const v121 = stdlib.Array_set(v120, '0', stdlib.checkedBigNumberify('./test_token.rsh:20:25:decimal', stdlib.UInt_max, '1'));
  const v122 = stdlib.Array_set(v94, stdlib.checkedBigNumberify('./test_token.rsh:16:28:application', stdlib.UInt_max, '0'), v121);
  const v124 = v122[stdlib.checkedBigNumberify('./test_token.rsh:16:28:application', stdlib.UInt_max, '0')];
  const v125 = stdlib.Array_set(v124, '1', stdlib.checkedBigNumberify('./test_token.rsh:20:25:decimal', stdlib.UInt_max, '1'));
  const v126 = stdlib.Array_set(v122, stdlib.checkedBigNumberify('./test_token.rsh:16:28:application', stdlib.UInt_max, '0'), v125);
  const v127 = v126[stdlib.checkedBigNumberify('./test_token.rsh:16:28:application', stdlib.UInt_max, '0')];
  const v128 = stdlib.Array_set(v127, '2', false);
  const v129 = stdlib.Array_set(v126, stdlib.checkedBigNumberify('./test_token.rsh:16:28:application', stdlib.UInt_max, '0'), v128);
  const v130 = v129[stdlib.checkedBigNumberify('./test_token.rsh:23:15:application', stdlib.UInt_max, '0')];
  const v131 = v130[stdlib.checkedBigNumberify('./test_token.rsh:23:15:application', stdlib.UInt_max, '0')];
  undefined /* TokenBurn */;
  undefined /* TokenDestroy */;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAEAAGgjQYDJgMAAQAIAAAAAAAAAAEiNQAxGEEB0ChkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAARojEkQjNAESRDQESSISTDQCEhFEKWRJNQNXABE1/4AEmouRdLA0A1cRIDEAEkQkiAGPsSKyASWyECOyIiKyI4AIQXJvMTkxNACyJYAgQXJvMTkxNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyJoBgaHR0cHM6Ly8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsicyA7IoMgqyKbO0PDX+gAgAAAAAAAAAbTT+FlCwNP41/TT/SVcAESpcAFwASTX8SVcAESpcCFwANfuxIrIBJbIQNP2yIbNCADhIJIgAoSI0ARJENARJIhJMNAISEUSABF8Nq/qwgRGvNf80/zEAUClLAVcAMWdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAjE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 49,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v109",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
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
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
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
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620020f5380380620020f5833981016040819052620000269162000287565b6000805543600355620000386200013b565b60408051338152835160208083019190915284015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a180516000908190528151602090810182905282516040019190915281519082015152620000af3415600762000111565b620000b962000172565b6020808301518252338282015260016000819055439055604051620000e191839101620002f2565b604051602081830303815290604052600290805190602001906200010792919062000194565b5050505062000393565b81620001375760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160a0810182526000918101828152606082018390526080820192909252908152602081016200016d62000223565b905290565b60405180604001604052806200018762000223565b8152600060209091015290565b828054620001a29062000356565b90600052602060002090601f016020900481019282620001c6576000855562000211565b82601f10620001e157805160ff191683800117855562000211565b8280016001018555821562000211579182015b8281111562000211578251825591602001919060010190620001f4565b506200021f92915062000270565b5090565b60405180602001604052806001905b62000259604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620002325790505090565b5b808211156200021f576000815560010162000271565b6000604082840312156200029a57600080fd5b604080519081016001600160401b0381118282101715620002cb57634e487b7160e01b600052604160045260246000fd5b6040528251815260208301518015158114620002e657600080fd5b60208201529392505050565b815160808201908260005b600181101562000339578251805183526020808201518185015260409182015115159184019190915290920191606090910190600101620002fd565b505050602092909201516001600160a01b03166060919091015290565b600181811c908216806200036b57607f821691505b602082108114156200038d57634e487b7160e01b600052602260045260246000fd5b50919050565b611d5280620003a36000396000f3fe608060405260043610620000455760003560e01c80631e93b0f1146200004f5780632c10a159146200007457806383230757146200008b578063ab53f2c614620000a257005b366200004d57005b005b3480156200005c57600080fd5b506003545b6040519081526020015b60405180910390f35b6200004d6200008536600462000921565b620000ca565b3480156200009857600080fd5b5060015462000061565b348015620000af57600080fd5b50620000ba620004a9565b6040516200006b9291906200099b565b620000dc600160005414600a6200054e565b620000f981351580620000f157506001548235145b600b6200054e565b6000808055600280546200010d90620009be565b80601f01602080910402602001604051908101604052809291908181526020018280546200013b90620009be565b80156200018c5780601f1062000160576101008083540402835291602001916200018c565b820191906000526020600020905b8154815290600101906020018083116200016e57829003601f168201915b5050505050806020019051810190620001a6919062000aaf565b9050620001b2620007ff565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13384604051620001e592919062000b72565b60405180910390a1620001fb341560086200054e565b602082015162000218906001600160a01b0316331460096200054e565b66105c9bcc4e4c4d60ca1b808252602080830191909152604080830180516768747470733a2f2f60c01b90528051600090840181905290518201819052606084015282518151928301520160408051601f19818403018152908290526020838101516001600160c01b031916908301529060280160408051808303601f1901815282825284820151805160208083015192850151908601919091529284015260608301919091529060800160408051601f198184030181528282526060860151602084015291016040516020818303038152906040526001600060405162000300906200086c565b620003119695949392919062000bac565b604051809103906000f0801580156200032e573d6000803e3d6000fd5b506001600160a01b03166080820181905260a082018190526040519081527f2472b4577870803bdfce01c7f82dae92b9768cedbb4c88a1598c3ac528df2da29060200160405180910390a181516040805160608101825260018152845151602090810151908201528451620003bb93926000929190820190835b6020020151604001511515905262000579565b60c0820181815260408051606081018252825151518152600160208201529151620003f1939260009290919082019083620003a8565b8160e001819052506200047d8160a00151620004758360e00151600060405180606001604052808760e0015160006001811062000432576200043262000c17565b60200201516000015181526020018760e001516000600181106200045a576200045a62000c17565b60200201516020015181526020016000151581525062000579565b5151620005fc565b6200048c8160a0015162000612565b60008080556001819055620004a4906002906200087a565b505050565b600060606000546002808054620004c090620009be565b80601f0160208091040260200160405190810160405280929190818152602001828054620004ee90620009be565b80156200053f5780601f1062000513576101008083540402835291602001916200053f565b820191906000526020600020905b8154815290600101906020018083116200052157829003601f168201915b50505050509050915091509091565b81620005755760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b62000583620008b9565b60005b6001811015620005d957848160018110620005a557620005a562000c17565b6020020151828260018110620005bf57620005bf62000c17565b602002015280620005d08162000c2d565b91505062000586565b5081818460018110620005f057620005f062000c17565b60200201529392505050565b6200060882826200062a565b6200057557600080fd5b6200061d816200070e565b6200062757600080fd5b50565b6000806000846001600160a01b031660006342966c6860e01b866040516024016200065791815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905162000697919062000c57565b60006040518083038185875af1925050503d8060008114620006d6576040519150601f19603f3d011682016040523d82523d6000602084013e620006db565b606091505b5091509150620006ee82826003620007b9565b508080602001905181019062000705919062000c75565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b038616918391620007579162000c57565b60006040518083038185875af1925050503d806000811462000796576040519150601f19603f3d011682016040523d82523d6000602084013e6200079b565b606091505b5091509150620007ae82826004620007b9565b506001949350505050565b60608315620007ca575081620007f8565b825115620007db5782518084602001fd5b60405163100960cb60e01b8152600481018390526024016200056c565b9392505050565b6040805161010081018252600080825260208083018290528351606081018552828152908101829052808401919091529091820190815260006020820181905260408201819052606082015260800162000858620008b9565b815260200162000867620008b9565b905290565b6110878062000c9683390190565b5080546200088890620009be565b6000825580601f1062000899575050565b601f01602090049060005260206000209081019062000627919062000906565b60405180602001604052806001905b620008ef604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620008c85790505090565b5b808211156200091d576000815560010162000907565b5090565b6000604082840312156200093457600080fd5b50919050565b60005b83811015620009575781810151838201526020016200093d565b8381111562000967576000848401525b50505050565b60008151808452620009878160208601602086016200093a565b601f01601f19169290920160200192915050565b828152604060208201526000620009b660408301846200096d565b949350505050565b600181811c90821680620009d357607f821691505b602082108114156200093457634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171562000a315762000a31620009f5565b60405290565b6040516020810167ffffffffffffffff8111828210171562000a315762000a31620009f5565b6040516060810167ffffffffffffffff8111828210171562000a315762000a31620009f5565b80151581146200062757600080fd5b80516001600160a01b038116811462000aaa57600080fd5b919050565b60006080828403121562000ac257600080fd5b62000acc62000a0b565b83601f84011262000adc57600080fd5b62000ae662000a37565b8060608086018781111562000afa57600080fd5b865b8181101562000b525782818a03121562000b165760008081fd5b62000b2062000a5d565b815181526020808301518183015260408084015162000b3f8162000a83565b9083015290865290940193820162000afc565b5082855262000b618162000a92565b602086015250929695505050505050565b6001600160a01b03831681528135602080830191909152606082019083013562000b9c8162000a83565b8015156040840152509392505050565b60c08152600062000bc160c08301896200096d565b828103602084015262000bd581896200096d565b9050828103604084015262000beb81886200096d565b9050828103606084015262000c0181876200096d565b6080840195909552505060a00152949350505050565b634e487b7160e01b600052603260045260246000fd5b600060001982141562000c5057634e487b7160e01b600052601160045260246000fd5b5060010190565b6000825162000c6b8184602087016200093a565b9190910192915050565b60006020828403121562000c8857600080fd5b8151620007f88162000a8356fe60806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea2646970667358221220f69cc2e75d30543e1c6b642666094ffe78bfc4ff1ca19ce1000dc664a358d46d64736f6c634300080c0033a2646970667358221220858f0f157b789dfb28e2566d6f41809257a5241c9de2279e35b5dd78d0c2e00164736f6c634300080c0033`,
  BytecodeLen: 8437,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './test_token.rsh:14:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './test_token.rsh:25:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin
  };
export const _APIs = {
  };
