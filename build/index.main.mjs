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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1],
      6: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      8: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1],
      10: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1]
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
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v331 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v332 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v332, v331],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:56:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v332, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v336, v337], secs: v339, time: v338, didSend: v59, from: v335 } = txn1;
      
      sim_r.txns.push({
        amt: v336,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v348 = stdlib.safeAdd(v338, v337);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v336, v337], secs: v339, time: v338, didSend: v59, from: v335 } = txn1;
  ;
  const v348 = stdlib.safeAdd(v338, v337);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v348],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v335, v336, v337, v348],
      evt_cnt: 0,
      funcNum: 2,
      lct: v338,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v522, time: v521, didSend: v279, from: v520 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v335,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v522, time: v521, didSend: v279, from: v520 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:48:35:application',
      fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:32:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:46:30:function exp)', 'at ./index.rsh:64:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v354, time: v353, didSend: v68, from: v352 } = txn2;
    const v356 = stdlib.add(v336, v336);
    ;
    let v357 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v358 = v353;
    let v365 = v356;
    
    let txn3 = txn2;
    while (await (async () => {
      const v373 = stdlib.eq(v357, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v373;})()) {
      const v376 = stdlib.protect(ctc0, await interact.getFinger(), {
        at: './index.rsh:72:52:application',
        fs: ['at ./index.rsh:71:19:application call to [unknown function] (defined at: ./index.rsh:71:23:function exp)'],
        msg: 'getFinger',
        who: 'Alice'
        });
      const v377 = stdlib.protect(ctc0, await interact.getNumber(), {
        at: './index.rsh:73:52:application',
        fs: ['at ./index.rsh:71:19:application call to [unknown function] (defined at: ./index.rsh:71:23:function exp)'],
        msg: 'getNumber',
        who: 'Alice'
        });
      const v378 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:74:74:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:71:19:application call to [unknown function] (defined at: ./index.rsh:71:23:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v379 = stdlib.digest([ctc0, ctc0], [v378, v376]);
      const v381 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:75:74:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:71:19:application call to [unknown function] (defined at: ./index.rsh:71:23:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v382 = stdlib.digest([ctc0, ctc0], [v381, v377]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v335, v336, v337, v352, v365, v379, v382],
        evt_cnt: 2,
        funcNum: 4,
        lct: v358,
        onlyIf: true,
        out_tys: [ctc1, ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:79:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v385, v386], secs: v388, time: v387, didSend: v100, from: v384 } = txn4;
          
          ;
          const v396 = stdlib.safeAdd(v387, v337);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [v385, v386], secs: v388, time: v387, didSend: v100, from: v384 } = txn4;
      ;
      const v389 = stdlib.addressEq(v335, v384);
      stdlib.assert(v389, {
        at: './index.rsh:79:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v396 = stdlib.safeAdd(v387, v337);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 5,
        out_tys: [ctc0, ctc0],
        timeoutAt: ['time', v396],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v335, v336, v337, v352, v365, v385, v386, v396],
          evt_cnt: 0,
          funcNum: 6,
          lct: v387,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v488, time: v487, didSend: v232, from: v486 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v335,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v488, time: v487, didSend: v232, from: v486 } = txn6;
        ;
        const v489 = stdlib.addressEq(v335, v486);
        const v490 = stdlib.addressEq(v352, v486);
        const v491 = v489 ? true : v490;
        stdlib.assert(v491, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:88:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:48:35:application',
          fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:32:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:46:30:function exp)', 'at ./index.rsh:88:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v403, v404], secs: v406, time: v405, didSend: v112, from: v402 } = txn5;
        ;
        const v407 = stdlib.addressEq(v352, v402);
        stdlib.assert(v407, {
          at: './index.rsh:87:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v414 = stdlib.safeAdd(v405, v337);
        const txn6 = await (ctc.sendrecv({
          args: [v335, v336, v337, v352, v365, v385, v386, v404, v414, v378, v381, v376, v377],
          evt_cnt: 4,
          funcNum: 7,
          lct: v405,
          onlyIf: true,
          out_tys: [ctc0, ctc0, ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:97:15:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v419, v420, v421, v422], secs: v424, time: v423, didSend: v124, from: v418 } = txn6;
            
            ;
            const v436 = stdlib.safeAdd(v423, v337);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v414],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v335, v336, v337, v352, v365, v385, v386, v404, v414],
            evt_cnt: 0,
            funcNum: 8,
            lct: v405,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v470, time: v469, didSend: v198, from: v468 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v352,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v470, time: v469, didSend: v198, from: v468 } = txn7;
          ;
          const v471 = stdlib.addressEq(v335, v468);
          const v472 = stdlib.addressEq(v352, v468);
          const v473 = v471 ? true : v472;
          stdlib.assert(v473, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:98:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:48:35:application',
            fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:32:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:46:30:function exp)', 'at ./index.rsh:98:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v419, v420, v421, v422], secs: v424, time: v423, didSend: v124, from: v418 } = txn6;
          ;
          const v425 = stdlib.addressEq(v335, v418);
          stdlib.assert(v425, {
            at: './index.rsh:97:15:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v426 = stdlib.digest([ctc0, ctc0], [v419, v421]);
          const v427 = stdlib.digestEq(v385, v426);
          stdlib.assert(v427, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:100:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Alice'
            });
          const v428 = stdlib.digest([ctc0, ctc0], [v420, v422]);
          const v429 = stdlib.digestEq(v386, v428);
          stdlib.assert(v429, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:101:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Alice'
            });
          const v436 = stdlib.safeAdd(v423, v337);
          const txn7 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 9,
            out_tys: [ctc0],
            timeoutAt: ['time', v436],
            waitIfNotPresent: false
            }));
          if (txn7.didTimeout) {
            const txn8 = await (ctc.sendrecv({
              args: [v335, v336, v337, v352, v365, v404, v422, v436],
              evt_cnt: 0,
              funcNum: 10,
              lct: v423,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn8) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v452, time: v451, didSend: v164, from: v450 } = txn8;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v335,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v452, time: v451, didSend: v164, from: v450 } = txn8;
            ;
            const v453 = stdlib.addressEq(v335, v450);
            const v454 = stdlib.addressEq(v352, v450);
            const v455 = v453 ? true : v454;
            stdlib.assert(v455, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:108:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:48:35:application',
              fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:32:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:46:30:function exp)', 'at ./index.rsh:108:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v442], secs: v444, time: v443, didSend: v140, from: v441 } = txn7;
            ;
            const v445 = stdlib.addressEq(v352, v441);
            stdlib.assert(v445, {
              at: './index.rsh:107:13:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            let v446;
            const v447 = stdlib.eq(v422, v404);
            if (v447) {
              v446 = stdlib.checkedBigNumberify('./index.rsh:7:16:decimal', stdlib.UInt_max, '1');
              }
            else {
              const v448 = stdlib.eq(v442, v422);
              if (v448) {
                v446 = stdlib.checkedBigNumberify('./index.rsh:10:20:decimal', stdlib.UInt_max, '2');
                }
              else {
                const v449 = stdlib.eq(v442, v404);
                if (v449) {
                  v446 = stdlib.checkedBigNumberify('./index.rsh:12:20:decimal', stdlib.UInt_max, '0');
                  }
                else {
                  v446 = stdlib.checkedBigNumberify('./index.rsh:14:20:decimal', stdlib.UInt_max, '1');
                  }
                }
              }
            const cv357 = v446;
            const cv358 = v443;
            const cv365 = v365;
            
            v357 = cv357;
            v358 = cv358;
            v365 = cv365;
            
            txn3 = txn7;
            continue;}
          
          }
        
        }
      
      
      
      }
    const v504 = stdlib.eq(v357, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v507 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:115:14:decimal', stdlib.UInt_max, '2'), v336);
    const v509 = v504 ? v335 : v352;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v357), {
      at: './index.rsh:119:28:application',
      fs: ['at ./index.rsh:118:9:application call to [unknown function] (defined at: ./index.rsh:118:27:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v336, v337], secs: v339, time: v338, didSend: v59, from: v335 } = txn1;
  ;
  const v348 = stdlib.safeAdd(v338, v337);
  stdlib.protect(ctc1, await interact.acceptWager(v336), {
    at: './index.rsh:61:29:application',
    fs: ['at ./index.rsh:60:13:application call to [unknown function] (defined at: ./index.rsh:60:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v335, v336, v337, v348],
    evt_cnt: 0,
    funcNum: 1,
    lct: v338,
    onlyIf: true,
    out_tys: [],
    pay: [v336, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v354, time: v353, didSend: v68, from: v352 } = txn2;
      
      const v356 = stdlib.add(v336, v336);
      sim_r.txns.push({
        amt: v336,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v357 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v358 = v353;
      const v365 = v356;
      
      if (await (async () => {
        const v373 = stdlib.eq(v357, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v373;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v504 = stdlib.eq(v357, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v507 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:115:14:decimal', stdlib.UInt_max, '2'), v336);
        const v509 = v504 ? v335 : v352;
        sim_r.txns.push({
          kind: 'from',
          to: v509,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v348],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v335, v336, v337, v348],
      evt_cnt: 0,
      funcNum: 2,
      lct: v338,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v522, time: v521, didSend: v279, from: v520 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v335,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v522, time: v521, didSend: v279, from: v520 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:48:35:application',
      fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:32:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:46:30:function exp)', 'at ./index.rsh:64:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v354, time: v353, didSend: v68, from: v352 } = txn2;
    const v356 = stdlib.add(v336, v336);
    ;
    let v357 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v358 = v353;
    let v365 = v356;
    
    let txn3 = txn2;
    while (await (async () => {
      const v373 = stdlib.eq(v357, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v373;})()) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v385, v386], secs: v388, time: v387, didSend: v100, from: v384 } = txn4;
      ;
      const v389 = stdlib.addressEq(v335, v384);
      stdlib.assert(v389, {
        at: './index.rsh:79:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v396 = stdlib.safeAdd(v387, v337);
      const v400 = stdlib.protect(ctc0, await interact.getFinger(), {
        at: './index.rsh:84:60:application',
        fs: ['at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:83:21:function exp)'],
        msg: 'getFinger',
        who: 'Bob'
        });
      const v401 = stdlib.protect(ctc0, await interact.getNumber(), {
        at: './index.rsh:85:60:application',
        fs: ['at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:83:21:function exp)'],
        msg: 'getNumber',
        who: 'Bob'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v335, v336, v337, v352, v365, v385, v386, v396, v400, v401],
        evt_cnt: 2,
        funcNum: 5,
        lct: v387,
        onlyIf: true,
        out_tys: [ctc0, ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:87:13:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v403, v404], secs: v406, time: v405, didSend: v112, from: v402 } = txn5;
          
          ;
          const v414 = stdlib.safeAdd(v405, v337);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v396],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v335, v336, v337, v352, v365, v385, v386, v396],
          evt_cnt: 0,
          funcNum: 6,
          lct: v387,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v488, time: v487, didSend: v232, from: v486 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v335,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v488, time: v487, didSend: v232, from: v486 } = txn6;
        ;
        const v489 = stdlib.addressEq(v335, v486);
        const v490 = stdlib.addressEq(v352, v486);
        const v491 = v489 ? true : v490;
        stdlib.assert(v491, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:88:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:48:35:application',
          fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:32:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:46:30:function exp)', 'at ./index.rsh:88:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v403, v404], secs: v406, time: v405, didSend: v112, from: v402 } = txn5;
        ;
        const v407 = stdlib.addressEq(v352, v402);
        stdlib.assert(v407, {
          at: './index.rsh:87:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v414 = stdlib.safeAdd(v405, v337);
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 4,
          funcNum: 7,
          out_tys: [ctc0, ctc0, ctc0, ctc0],
          timeoutAt: ['time', v414],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v335, v336, v337, v352, v365, v385, v386, v404, v414],
            evt_cnt: 0,
            funcNum: 8,
            lct: v405,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v470, time: v469, didSend: v198, from: v468 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v352,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v470, time: v469, didSend: v198, from: v468 } = txn7;
          ;
          const v471 = stdlib.addressEq(v335, v468);
          const v472 = stdlib.addressEq(v352, v468);
          const v473 = v471 ? true : v472;
          stdlib.assert(v473, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:98:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:48:35:application',
            fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:32:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:46:30:function exp)', 'at ./index.rsh:98:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v419, v420, v421, v422], secs: v424, time: v423, didSend: v124, from: v418 } = txn6;
          ;
          const v425 = stdlib.addressEq(v335, v418);
          stdlib.assert(v425, {
            at: './index.rsh:97:15:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v426 = stdlib.digest([ctc0, ctc0], [v419, v421]);
          const v427 = stdlib.digestEq(v385, v426);
          stdlib.assert(v427, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:100:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Bob'
            });
          const v428 = stdlib.digest([ctc0, ctc0], [v420, v422]);
          const v429 = stdlib.digestEq(v386, v428);
          stdlib.assert(v429, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:101:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Bob'
            });
          const v436 = stdlib.safeAdd(v423, v337);
          const v440 = stdlib.safeAdd(v421, v403);
          
          const txn7 = await (ctc.sendrecv({
            args: [v335, v336, v337, v352, v365, v404, v422, v436, v440],
            evt_cnt: 1,
            funcNum: 9,
            lct: v423,
            onlyIf: true,
            out_tys: [ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:107:13:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v442], secs: v444, time: v443, didSend: v140, from: v441 } = txn7;
              
              ;
              let v446;
              const v447 = stdlib.eq(v422, v404);
              if (v447) {
                v446 = stdlib.checkedBigNumberify('./index.rsh:7:16:decimal', stdlib.UInt_max, '1');
                }
              else {
                const v448 = stdlib.eq(v442, v422);
                if (v448) {
                  v446 = stdlib.checkedBigNumberify('./index.rsh:10:20:decimal', stdlib.UInt_max, '2');
                  }
                else {
                  const v449 = stdlib.eq(v442, v404);
                  if (v449) {
                    v446 = stdlib.checkedBigNumberify('./index.rsh:12:20:decimal', stdlib.UInt_max, '0');
                    }
                  else {
                    v446 = stdlib.checkedBigNumberify('./index.rsh:14:20:decimal', stdlib.UInt_max, '1');
                    }
                  }
                }
              const cv357 = v446;
              const cv358 = v443;
              const cv365 = v365;
              
              await (async () => {
                const v357 = cv357;
                const v358 = cv358;
                const v365 = cv365;
                
                if (await (async () => {
                  const v373 = stdlib.eq(v357, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  
                  return v373;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v504 = stdlib.eq(v357, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                  const v507 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:115:14:decimal', stdlib.UInt_max, '2'), v336);
                  const v509 = v504 ? v335 : v352;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v509,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v436],
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn7.didTimeout) {
            const txn8 = await (ctc.sendrecv({
              args: [v335, v336, v337, v352, v365, v404, v422, v436],
              evt_cnt: 0,
              funcNum: 10,
              lct: v423,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn8) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v452, time: v451, didSend: v164, from: v450 } = txn8;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v335,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v452, time: v451, didSend: v164, from: v450 } = txn8;
            ;
            const v453 = stdlib.addressEq(v335, v450);
            const v454 = stdlib.addressEq(v352, v450);
            const v455 = v453 ? true : v454;
            stdlib.assert(v455, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:108:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:48:35:application',
              fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:32:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:46:30:function exp)', 'at ./index.rsh:108:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v442], secs: v444, time: v443, didSend: v140, from: v441 } = txn7;
            ;
            const v445 = stdlib.addressEq(v352, v441);
            stdlib.assert(v445, {
              at: './index.rsh:107:13:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            let v446;
            const v447 = stdlib.eq(v422, v404);
            if (v447) {
              v446 = stdlib.checkedBigNumberify('./index.rsh:7:16:decimal', stdlib.UInt_max, '1');
              }
            else {
              const v448 = stdlib.eq(v442, v422);
              if (v448) {
                v446 = stdlib.checkedBigNumberify('./index.rsh:10:20:decimal', stdlib.UInt_max, '2');
                }
              else {
                const v449 = stdlib.eq(v442, v404);
                if (v449) {
                  v446 = stdlib.checkedBigNumberify('./index.rsh:12:20:decimal', stdlib.UInt_max, '0');
                  }
                else {
                  v446 = stdlib.checkedBigNumberify('./index.rsh:14:20:decimal', stdlib.UInt_max, '1');
                  }
                }
              }
            const cv357 = v446;
            const cv358 = v443;
            const cv365 = v365;
            
            v357 = cv357;
            v358 = cv358;
            v365 = cv365;
            
            txn3 = txn7;
            continue;}
          
          }
        
        }
      
      
      
      }
    const v504 = stdlib.eq(v357, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v507 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:115:14:decimal', stdlib.UInt_max, '2'), v336);
    const v509 = v504 ? v335 : v352;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v357), {
      at: './index.rsh:119:28:application',
      fs: ['at ./index.rsh:118:9:application call to [unknown function] (defined at: ./index.rsh:118:27:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAOAAEIUCAKAigGBZgBaKABMCYDAQABAQAiNQAxGEEFgCpkSSJbNQEkWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khCAxAAnBJJAxAAUVJgQkMQADsSSEFDEAAUyEFEkQhBTQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABNNEcyOwMgY0AyELWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDJVuyCCOyEDT/sgezQgSbSCEFNAESRDQESSISTDQCEhFEKGRJNQNJSVcwIDX/gVhbNf6BYFs1/Uk1BRc1/IAEY1dRXDT8FlCwMgY0AyELWwxENP8xABJENP00/hJBAAYjNftCACA0/DT9EkEAByEGNftCABE0/DT+EkEABiI1+0IAAyM1+zQDVwAgNAMhBFs0AyEHWzT/NPsyBjQDJVtCA7JIJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABBf82y6wMgY0AyEMWw9ENANXACAxABI0/zEAEhFEsSKyATQDJVuyCCOyEDT/sgezQgO3SYEHDEAAy0gkNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpXACA1/yEEWzX+IQdbNf1XMCA1/CVbNfshCls1+kk1BUlKIls1+SRbNfiBEFs194EYWzX2gARAKnUwNPkWUDT4FlA09xZQNPYWULAyBjQDIQxbDEQ0/zEAEkQ0A1dYIDT5FjT3FlABEkQ0A1d4IDT4FjT2FlABEkQyBjT9CDX1NP80/hZQNP0WUDT8UDT7FlA0+hZQNPYWUDT1FlAoSwFXAHBnSCEFNQEyBjUCQgMBSCEINAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AEYbSsDLAyBjQDIQpbD0Q0/zEAEjQDVzAgMQASEUSxIrIBNAMlW7III7IQNP+yB7NCApJJIQYMQAGHSYEEDEABP0khCQxAAKlIIQg0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yEEWzX+IQdbNf1XMCA1/CVbNftXWCA1+ld4IDX5STUFSSJbNfgkWzX3gASzUfePNPgWUDT3FlCwMgY0AyEKWwxENPwxABJEMgY0/Qg19jT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPcWUDT2FlAoSwFXAH9nKUsBV38pZ0gkNQEyBjUCQgHwSCEJNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEEWzX+IQdbNf1XMCA1/CVbNftJNQVJVwAgNfpXICA1+YAEYF2kKzT6UDT5ULA0/zEAEkQyBjT9CDX4NP80/hZQNP0WUDT8UDT7FlA0+lA0+VA0+BZQKEsBVwB/ZylLAVd/IWdIIQg1ATIGNQJCAWEhBhJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyENWw9EsSKyATQDIQRbsggjshA0A1cAILIHs0IBBEkjDEAASEgjNAESRDQESSISTDQCEhFEKGRJNQMhBFs1/4AEmouRdLAyBjQDIQ1bDEQ0/4gBPDQDVwAgNP80AyEHWzEAIzIGNP9JCEIAX0iBoI0GiAEcIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JFs1/oAErNEfwzT/FlA0/hZQsDT/iADsMgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgBzNf81/jX9Nfw1+zX6Nfk0/SMSQQAkNPk0+hZQNPsWUDT8UDT/FlAoSwFXAFhnSCEJNQEyBjUCQgA6sSKyASEGNPoLsggjshA0/DT5NP0hBhJNsgezQgAAMRkhCRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 168,
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v336",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v337",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v336",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v337",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
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
        "internalType": "struct T7",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v385",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v386",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v403",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v419",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v420",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v421",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v422",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v442",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
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
        "internalType": "struct T7",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v385",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v386",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v403",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v419",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v420",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v421",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v422",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v442",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001fa538038062001fa58339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b611c28806200037d6000396000f3fe6080604052600436106100a55760003560e01c8063ab53f2c611610061578063ab53f2c614610133578063aff5115f14610156578063c798003714610169578063e00acef11461017c578063e533a29d1461018f578063ebdbfdcc146101a257005b806309687c88146100ae5780631e93b0f1146100c15780632c10a159146100e55780633a825029146100f85780637eea518c1461010b578063832307571461011e57005b366100ac57005b005b6100ac6100bc366004611713565b6101b5565b3480156100cd57600080fd5b506003545b6040519081526020015b60405180910390f35b6100ac6100f3366004611713565b6103d4565b6100ac610106366004611736565b610563565b6100ac610119366004611713565b610862565b34801561012a57600080fd5b506001546100d2565b34801561013f57600080fd5b506101486109e0565b6040516100dc929190611748565b6100ac6101643660046117b7565b610a7d565b6100ac610177366004611713565b610d0d565b6100ac61018a366004611713565b610ea4565b6100ac61019d366004611713565b610ffe565b6100ac6101b03660046117b7565b61119a565b6101c5600a60005414602c611386565b6101df813515806101d857506001548235145b602d611386565b6000808055600280546101f1906117d3565b80601f016020809104026020016040519081016040528092919081815260200182805461021d906117d3565b801561026a5780601f1061023f5761010080835404028352916020019161026a565b820191906000526020600020905b81548152906001019060200180831161024d57829003601f168201915b50505050508060200190518101906102829190611908565b905061029a6040518060200160405280600081525090565b6102ab8260e001514310602e611386565b6040805133815284356020808301919091528501358183015290517fff3d454f6571b2b8fde3c8158eaa68ae1f803294ce0837fed155169daa443f8b9181900360600190a16102fc3415602a611386565b6060820151610317906001600160a01b03163314602b611386565b8160a001518260c0015114156103305760018152610367565b60c0820151602084013514156103495760028152610367565b60a0820151602084013514156103625760008152610367565b600181525b61036f6115d3565b825181516001600160a01b0391821690526020808501518351820152604080860151845182015260608087015185519416930192909252835181840180519190915280514392019190915260808501519051909101526103ce816113ac565b50505050565b6103e46001600054146009611386565b6103fe813515806103f757506001548235145b600a611386565b600080805560028054610410906117d3565b80601f016020809104026020016040519081016040528092919081815260200182805461043c906117d3565b80156104895780601f1061045e57610100808354040283529160200191610489565b820191906000526020600020905b81548152906001019060200180831161046c57829003601f168201915b50505050508060200190518101906104a19190611925565b90506104b481606001514310600b611386565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516104e592919061199e565b60405180910390a16104fe816020015134146008611386565b6105066115d3565b815181516001600160a01b039091169052602080830180518351830152604080850151845190910152825133606090910152818301805160019052514392019190915251800160208201516040015261055e816113ac565b505050565b6105736008600054146022611386565b61058d8135158061058657506001548235145b6023611386565b60008080556002805461059f906117d3565b80601f01602080910402602001604051908101604052809291908181526020018280546105cb906117d3565b80156106185780601f106105ed57610100808354040283529160200191610618565b820191906000526020600020905b8154815290600101906020018083116105fb57829003601f168201915b505050505080602001905181019061063091906119db565b90506106486040518060200160405280600081525090565b61065a82610100015143106024611386565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527fb5f4492f0483ed233efaa2cb34f0ab323e6b41dcb420ae73ce00030dbfd06b489060c00160405180910390a16106cd3415601e611386565b81516106e5906001600160a01b03163314601f611386565b6040516107329061070c906020808701359160608801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a00151146020611386565b60408051848201356020820152608085013591810191909152610778906060016040516020818303038152906040528051906020012060001c8360c00151146021611386565b610786438360400151611521565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601518185015260e08087015160a08601529087013560c0850152845190840152600a60005543600155905161083791839101611a64565b6040516020818303038152906040526002908051906020019061085b92919061162c565b5050505050565b610872600160005414600d611386565b61088c8135158061088557506001548235145b600e611386565b60008080556002805461089e906117d3565b80601f01602080910402602001604051908101604052809291908181526020018280546108ca906117d3565b80156109175780601f106108ec57610100808354040283529160200191610917565b820191906000526020600020905b8154815290600101906020018083116108fa57829003601f168201915b505050505080602001905181019061092f9190611925565b90506109438160600151431015600f611386565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161097492919061199e565b60405180910390a16109883415600c611386565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156109c5573d6000803e3d6000fd5b50600080805560018190556109dc906002906116b0565b5050565b6000606060005460028080546109f5906117d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610a21906117d3565b8015610a6e5780601f10610a4357610100808354040283529160200191610a6e565b820191906000526020600020905b815481529060010190602001808311610a5157829003601f168201915b50505050509050915091509091565b610a8d6006600054146016611386565b610aa781351580610aa057506001548235145b6017611386565b600080805560028054610ab9906117d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610ae5906117d3565b8015610b325780601f10610b0757610100808354040283529160200191610b32565b820191906000526020600020905b815481529060010190602001808311610b1557829003601f168201915b5050505050806020019051810190610b4a9190611908565b9050610b626040518060200160405280600081525090565b610b738260e0015143106018611386565b7f5371140060fe309c492663b0377a291d12d8d92a35dabb2b67a32d0ade04bb663384604051610ba4929190611ac8565b60405180910390a1610bb834156014611386565b6060820151610bd3906001600160a01b031633146015611386565b610be1438360400151611521565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528582013560e0840152835161010084015260086000554360015590516108379183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b610d1d600660005414601b611386565b610d3781351580610d3057506001548235145b601c611386565b600080805560028054610d49906117d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610d75906117d3565b8015610dc25780601f10610d9757610100808354040283529160200191610dc2565b820191906000526020600020905b815481529060010190602001808311610da557829003601f168201915b5050505050806020019051810190610dda9190611908565b9050610dee8160e00151431015601d611386565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3383604051610e1f92919061199e565b60405180910390a1610e3334156019611386565b8051610e67906001600160a01b03163314610e5d5760608201516001600160a01b03163314610e60565b60015b601a611386565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156109c5573d6000803e3d6000fd5b610eb4600a600054146031611386565b610ece81351580610ec757506001548235145b6032611386565b600080805560028054610ee0906117d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610f0c906117d3565b8015610f595780601f10610f2e57610100808354040283529160200191610f59565b820191906000526020600020905b815481529060010190602001808311610f3c57829003601f168201915b5050505050806020019051810190610f719190611908565b9050610f858160e001514310156033611386565b7f3d5296ff959773a694d0854b4cbbb29a1b91dabf625a358e26d9f308a93a288a3383604051610fb692919061199e565b60405180910390a1610fca3415602f611386565b8051610e67906001600160a01b03163314610ff45760608201516001600160a01b03163314610ff7565b60015b6030611386565b61100e6008600054146027611386565b6110288135158061102157506001548235145b6028611386565b60008080556002805461103a906117d3565b80601f0160208091040260200160405190810160405280929190818152602001828054611066906117d3565b80156110b35780601f10611088576101008083540402835291602001916110b3565b820191906000526020600020905b81548152906001019060200180831161109657829003601f168201915b50505050508060200190518101906110cb91906119db565b90506110e08161010001514310156029611386565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb60776338360405161111192919061199e565b60405180910390a161112534156025611386565b8051611159906001600160a01b0316331461114f5760608201516001600160a01b03163314611152565b60015b6026611386565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156109c5573d6000803e3d6000fd5b6111aa6005600054146012611386565b6111c4813515806111bd57506001548235145b6013611386565b6000808055600280546111d6906117d3565b80601f0160208091040260200160405190810160405280929190818152602001828054611202906117d3565b801561124f5780601f106112245761010080835404028352916020019161124f565b820191906000526020600020905b81548152906001019060200180831161123257829003601f168201915b50505050508060200190518101906112679190611af9565b905061127f6040518060200160405280600081525090565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a33846040516112b0929190611ac8565b60405180910390a16112c434156010611386565b81516112dc906001600160a01b031633146011611386565b6112ea438360400151611521565b81526040805161010081018252600080825260208083018281528385018381526060808601858152608080880187815260a0890188815260c08a0189815260e08b018a81528e516001600160a01b039081168d528f8b01519099528e8d0151909752948d01519096169092528a015190528984013590925288860135909152855190526006909155436001559151909161083791839101611a64565b816109dc5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b602081015151600114156114a4576113fe6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b8151516001600160a01b039081168083528351602090810151818501908152855160409081015181870190815287516060908101518716818901908152858a01518401516080808b019182526005600055436001558551978801989098529451938601939093529051908401525190931691810191909152905160a082015260c0016040516020818303038152906040526002908051906020019061055e92919061162c565b6020810151516002146114bc578051606001516114c0565b8051515b6001600160a01b03166108fc6114df6002846000015160200151611574565b6040518115909202916000818181858888f19350505050158015611507573d6000803e3d6000fd5b506000808055600181905561151e906002906116b0565b50565b60008261152e8382611b99565b915081101561156e5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016113a3565b92915050565b60008115806115985750828261158a8183611bb1565b92506115969083611bd0565b145b61156e5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016113a3565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161162760405180606001604052806000815260200160008152602001600081525090565b905290565b828054611638906117d3565b90600052602060002090601f01602090048101928261165a57600085556116a0565b82601f1061167357805160ff19168380011785556116a0565b828001600101855582156116a0579182015b828111156116a0578251825591602001919060010190611685565b506116ac9291506116e6565b5090565b5080546116bc906117d3565b6000825580601f106116cc575050565b601f01602090049060005260206000209081019061151e91905b5b808211156116ac57600081556001016116e7565b60006040828403121561170d57600080fd5b50919050565b60006040828403121561172557600080fd5b61172f83836116fb565b9392505050565b600060a0828403121561170d57600080fd5b82815260006020604081840152835180604085015260005b8181101561177c57858101830151858201606001528201611760565b8181111561178e576000606083870101525b50601f01601f191692909201606001949350505050565b60006060828403121561170d57600080fd5b6000606082840312156117c957600080fd5b61172f83836117a5565b600181811c908216806117e757607f821691505b6020821081141561170d57634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff8111828210171561183a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461185757600080fd5b919050565b600061010080838503121561187057600080fd5b6040519081019067ffffffffffffffff821181831017156118a157634e487b7160e01b600052604160045260246000fd5b816040528092506118b184611840565b815260208401516020820152604084015160408201526118d360608501611840565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152505092915050565b6000610100828403121561191b57600080fd5b61172f838361185c565b60006080828403121561193757600080fd5b6040516080810181811067ffffffffffffffff8211171561196857634e487b7160e01b600052604160045260246000fd5b60405261197483611840565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146119cc57600080fd5b80604085015250509392505050565b600061012082840312156119ee57600080fd5b6119f6611808565b6119ff83611840565b81526020830151602082015260408301516040820152611a2160608401611840565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b610100810161156e828460018060a01b038082511683526020820151602084015260408201516040840152806060830151166060840152506080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b6001600160a01b03831681526080810161172f60208301848035825260208082013590830152604090810135910152565b600060a08284031215611b0b57600080fd5b60405160a0810181811067ffffffffffffffff82111715611b3c57634e487b7160e01b600052604160045260246000fd5b604052611b4883611840565b81526020830151602082015260408301516040820152611b6a60608401611840565b6060820152608083015160808201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611bac57611bac611b83565b500190565b6000816000190483118215151615611bcb57611bcb611b83565b500290565b600082611bed57634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212207e49593234eec2ae491aaa7de215cc9a7b1499f7cf90d1ae735efd942bc8245364736f6c634300080c0033`,
  BytecodeLen: 8101,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:58:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:64:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:116:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:69:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:80:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:88:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:89:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:98:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:102:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:108:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
