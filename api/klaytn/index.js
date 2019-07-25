const express = require('express');
const router = express.Router();
const Caver = require('caver-js')
const caver = new Caver('https://api.baobab.klaytn.net:8651/')
router.get('/:privateKey', (req, res) => {
    const privateKey = req.params.privateKey;
    const walletInstance = caver.klay.accounts.privateKeyToAccount(privateKey);
    caver.klay.accounts.wallet.add(walletInstance);
    //walletInstance.address //내 계정 주소
    //cav.klay.accounts.wallet.clear // 정보 삭제
    return res.send(walletInstance.address);
  });

  module.exports = router;