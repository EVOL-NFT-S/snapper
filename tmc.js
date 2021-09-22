const addresses = [
    "0x0000000000007f150bd6f54c40a34d7c3d5e9f56",
    "0x00000000003b3cc22af3ae1eac0440bcee416b40",
    "0x0000000094acb89a43eac2fbb3a07973efc2435c",
    "0x00000000f515b28e81a0e98ea3f4f816ef7e62b2",
    "0x000000917de6037d52b1f0a306eecd208405f7cd",
    "0x0020545555e90ca3a200dd14a279d147b4734856",
    "0x017ffdecc42803a9f4fa66f302aed04319468d69",
    "0x0293359127408ef1bddbf78a4f25791e8f2b0a9a",
    "0x032da9d10962499bf8694596d747cb85503eccf8",
    "0x0486d4a269c0d5269fb5ae2b9ea89f409c7697cb",
    "0x0a3eecc99a1d5f8faf89f566a7aa9cd025ae895f",
    "0x0c3e2a7defee31a49796b1605597e5e0dc417834",
    "0x0c6c5340cf09b9d362f29bb695a1aee5cfcce81d",
    "0x1350804da29d56eb3ec41189d8a7168fc017401a",
    "0x1519fc4182052eb54b1dc8a4562d5efb0c17d97d",
    "0x186c20652a42ec20a9d9bf8937a91addbb01b911",
    "0x19ffea001d665ddec52d995209afc908726bdecb",
    "0x1bc4a8d02b5f90ce8a33cb69894034bd13225c97",
    "0x1bdba0a0efdf77387e001e08102b90496d6d8351",
    "0x1d6e8bac6ea3730825bde4b005ed7b2b39a2932d",
    "0x1e18b8b6f27568023e0b577cbee1889391b2f444",
    "0x1f8f7abe695fc7549f2aab1d3dfd1f419361438f",
    "0x22ea7e25911060121d6bf102990fec6336416830",
    "0x2474411a0ac484b5f8101c2e1efbace4bdbebc8f",
    "0x289ac960ce932fdcc5264e9013b9508d39e5b51d",
    "0x291d520957d56f59b0f89a568f4c1366b45c4e79",
    "0x294400671d5abf9396709616703a3511d41cc6b1",
    "0x294803520a1e7b671c105c8a3d94836f40b2b557",
    "0x2edde9895be01eca7d3676db5b85d14edfdb65b8",
    "0x309aec10f8cb3e60aa76f25d8ea91024719f484e",
    "0x34df9ce7995776ea457d3cce536be492d6589cb0",
    "0x3755dc96fa1a02645d0b1176b5ff153e751226e6",
    "0x376194bab241b14f1d6639ccedb776781e77e244",
    "0x38bf3a7bea5d7ca226793362ae249c332e9e4e40",
    "0x3c4fd597dc36f6a13806698f85aa7eddcfcf735f",
    "0x3f6fe70ae1b5882f72b7542de60255803f11901b",
    "0x41bdd38ab8b6d65468e5c37019fdc5b3f3c3587c",
    "0x462898ad742c7d5a02ded65eb78964e035f6e448",
    "0x47432d0827abfb610c719d39508486ebabd4b72b",
    "0x487d290c95212e921b154dabf43ef17220419ce0",
    "0x4bd4e0997a66392c0aacef006e012c2f0677b0cc",
    "0x4c632b5b896245963b4ca5c625463be7ccd683fa",
    "0x4c9c3626cf1828da7b58a50dc2f6aa2c4546609e",
    "0x4d28975b4ed2a1a9a00c657f28344dce37ee0ac6",
    "0x4e268ef3bb2b0eb025b42b7f1e93b9d42ea2ebcd",
    "0x4fc850399f4d3bfd706702803cc57ce192716897",
    "0x512d3627e21282411faba02b717bbb76bd154127",
    "0x514cb385885eb3a79c5b85b317c464e207af8521",
    "0x532d1983416ef8c10e1eae48f986c3d6bfea34be",
    "0x558f420ee7156552e0908eb581f92a321340eca6",
    "0x56716272d50541d24578fc6ae894ce14db1b549a",
    "0x582c4c9ace8ed5c55f4bfa3147e81d1d4a991b78",
    "0x5984bb82f11171cb1dc2287e2a6935c44d491538",
    "0x5cc8a811c4826c0527822d39f3081bd6bea46c01",
    "0x5f3ea44d2beb8734c503c536d3d5a8e110241bb2",
    "0x61bf481bfd2bb0d0307328c1f3c710ae42fbd639",
    "0x673e28e96dbfc43c6ccb67375ec71542855167bd",
    "0x6c46489194bbc861723049b27ee563995b85bba1",
    "0x6cf51fdef74d02296017a1129086ee9c3477dc01",
    "0x6d5fdb7724495fe788509a3eb1e6b5380cb65860",
    "0x6f8b9b0828fc62b28f1d744b391d6949ff1f11b1",
    "0x75d475f0dd79611d32a1d3da3fc2c09532ecdfe3",
    "0x77aaa14f0c7473d34097382e345101003dade318",
    "0x7ab0942923bf5fe79892bf3fb615aebd93f14f6e",
    "0x7c6c055b870425353e4dcf244a1f45a58d052038",
    "0x7f09373eeacee72f0edbd286c609c59caf155661",
    "0x7fa27e6b546b91bf53992fd58208b6e2a6acc673",
    "0x8007cfbea190a055d16c55862bc7745d9818793c",
    "0x815865eb8bf8a641d6293723fc72fc110d4f1cf8",
    "0x841fc79443e3ae96b717c7acab9268da0722bf2a",
    "0x88647192a88f88a10de2396429c96a8b03b1fa24",
    "0x887b4f144a44c59f842d19520082af635874025e",
    "0x8a71a81f119d85f0750c50d3abf724817b8c7b6b",
    "0x8c46c00fc633e1e73254bec5a7364235976adbf5",
    "0x8ced39c371af67845bd672d27c5ffcb682bea44e",
    "0x915e43a270f3949eec6c5cab1fbf5b804e511896",
    "0x9266835e63d8b42384a75eb694915898e1c98a3d",
    "0x926c5be9a0c755584fef616fcd7d05fb791b05cd",
    "0x9787b0652b26a2916c561fa5256a90b04d088898",
    "0x97fbe749544656b826892c9296c4e46668532e0e",
    "0x99fe7effaa6374dbd2fce0778f810f10a0c924d7",
    "0x9a679f8c753ffd188320ee51db3e050ceb82fc1a",
    "0x9ac4dd66896ada97e5b13139d68577ce9fb217e0",
    "0x9af2de893816c024d1de91cd5c0b04808fe980ae",
    "0x9db66f5933b5e03591fbc08991178cdaccd689d4",
    "0xa0063128c0169361dfd9b30296e206465a64681c",
    "0xa1a07d7bdb5b80a4e129ca20270648710a3db548",
    "0xa8d5118c596b16fbb14afe2c70c098cd6ee6f8c6",
    "0xa8e600a7057271f1e9c5229785c72abce763c2f6",
    "0xaaa8a090e78724c8e3f3de407205fff160017568",
    "0xab8826085c2b098afe31f49c27d25989c89a9061",
    "0xac8ab519cbcd8379f94aa8c8061c325369930e2b",
    "0xae2fed09ddf0c088b3db1a840117305ab63c28e3",
    "0xaf32f7fc80b9e13140420f1478dab122a6a1f6cc",
    "0xb0fba2e0a139259c04bd045b08be2303d29b9a58",
    "0xb2197a4b5d565fa2eeca9cd47b8dcd38ec5a9e2e",
    "0xb3c6144c929652d6046c01282fa2f355d9864db9",
    "0xb60bfd02207823360263ed5886c9f3c240a05045",
    "0xbda0251f51b2cdcfc3cca41cdb9ed252bc0d89d7",
    "0xbf1560e7813553346d92b61a7e66697b94810c93",
    "0xc01c371e62415b0debe39d9154fb1c1083e574aa",
    "0xc1165124be8dc53a3826a1aa1b6643e9138d167c",
    "0xc2884de64ceff15211bb884a1e84f5aead9fdc7c",
    "0xc3aa655e81cf464ffb1c20d9f7d13bb45e8b87ad",
    "0xc55f75322e7ea1dcb9dfb300edee22b771e2d9b9",
    "0xc6c2837c6d356152d5d408d6be158790032faed5",
    "0xc6e6dd6a0c61651d1bc055dc1c22418a729d41bb",
    "0xc756e8714e6ba6f7348962e5c946bf779c4edd94",
    "0xcf8aadfab01dc2ebd26948c41d1a8e91f91c767c",
    "0xd77a4103b51325a2a0526275aa067e1605e67441",
    "0xd943bb003e22ae6de4560abe9e74e35ef0fd7e4d",
    "0xd9657748776cf40b42e4c11fdc78c1337555f0e3",
    "0xd9a5e2f56ffa2c4feb1e293980b7d9a86f43692d",
    "0xd9ab3eecb0c2859f540453c78b5ae96a64353df8",
    "0xdbcde88f23999c5092b3aaccd9b5a2ac721181dc",
    "0xdcb6121e5c6c16125a2aaf40a33995efe22cebf2",
    "0xdfb8ced4a895e01bfb8eda9b898667deafb3de25",
    "0xe13559cf6edf84bd04bf679e251f285000b9305e",
    "0xe2de13ed36177ad43cb2a399f8c53de407b13ab9",
    "0xe316069160a2b8a3a9a281e8fb301a4fa0e376ee",
    "0xe348d1f63533525351b618c1a57f28249b30e435",
    "0xe4b877bff75923c16a43e4672aad1867ad89aa0d",
    "0xe8c8eab7617f6ee168577498562c7ceff762113d",
    "0xe97a225b1be2e2f3bab92fcdaca208724e3012d8",
    "0xea5dca8cac9c12df3ab5908a106c15ff024cb44f",
    "0xeeaa946b2b5c818370aa3af5a66c8a2c0f402533",
    "0xef3425f5b2ffecce0cd8df3f25faf2905533bf46",
    "0xef41cc4dfb0f3fc0200f8fb39b766ce42eabe528",
    "0xf13e9887c6fb528b5c00960116dbfe8db28534a7",
    "0xf46e8e0a1a859a56678b4703b499666175c8cc93",
    "0xf59150caaf7dff7203e76eb21c9086cdc141fe35",
    "0xf5cf28fa6339346e11f2efc3480d146f3229cd10",
    "0xf601b1c1dce139469e4969938c1ce9d58e30bdb9",
    "0xffb45b599bb874ea35edc896f6c732aae3cde85e",
];

module.exports = {
    addresses,
};
