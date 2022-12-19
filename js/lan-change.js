$("#lang-switch").change(function(){
    if( $("#lang-switch option:selected").val()=="eng"){
        $(".connect-btn").text("Connect");
        $(".d-text").text("DAYS");
        $(".hr-text").text("HRS");
        $(".m-text").text("MIN");
        $(".s-text").text("SEC");
        $(".contract-text").text("Contract");
        $(".wallet-text").text("Wallet");
        $(".yaaf-text").text("Your YAAF");
        $(".create_btn").text("Stake");
        $(".rewards-text").text("Your Rewards");
        $(".cultivate_btn").text("Re-Stake");
        $(".party_btn").text("Claim");
        $(".nutrient-btn").text("Expected Profit");
        $(".d-return-text").text("Daily Return");
        $(".y-return-text").text("APR");
        $(".dev-fee-text").text("Dev Fee");
        $(".m-fee-text").text("Marketing Fee");
        $(".link-text").text("Referral Link");
        $(".receive-text").text("Earn 10% of the BNB used to Divide YAAF from anyone who uses your referral link");
        $(".invite-text").text("Your Invites");
        $(".rebate-text").text("Your Rebate");
        $(".team-text").text("Meet the Team");
        $(".team1-1-text").text("CEO");
        $(".team1-2-text").text("Vlad Yatsenko");
        $(".team1-3-text").text("He holds a M.S. in Computer Science.  After building financial software systems at tier one investment banks such as UBS and Deutsche Bank, he realized that he would need to build  a next-generation digital banking service.");
        $(".team2-1-text").text("Chief Operations Officer");
        $(".team2-2-text").text("Michal Laube");
        $(".team2-3-text").text("He holds an MBA from the Kellogg School of Management and an MSc from Politecnico di Milano. His contributions include creating and leading YAAF_Miner operations.");
        $(".team3-1-text").text("Chief Risk Officer");
        $(".team3-2-text").text("Pierre Decote");
        $(".team3-3-text").text("He holds a Master's in Business Administration and Finance from ESC Bordeaux and is responsible for overseeing the risk profile of the project YAAF_Miner, along with the team.");
        $(".roadmap-text").text("Roadmap");
        $(".roadmap1-1-text").text("YAAF - Miner");
        $(".roadmap1-2-text").text("Jan 2023 a new generation of DAPP applications, YAAF-Miner, will be released. ");
        $(".roadmap2-1-text").text("YAAF - Token");
        $(".roadmap2-2-text").text("YAAF token issuance in late April 2023, Priority airdrop to miners");
        $(".roadmap3-1-text").text("YAAF - NFT");
        $(".roadmap3-2-text").text("Release of YAAF NFT in October 2023, built on Ethereum. Priority airdrop to miners");
        $(".roadmap4-1-text").text("YAAF - DAO");
        $(".roadmap4-2-text").text("April 2024 YAAF-DAO will be established and governance will be gradually shifted to the DAO.");
    }else{
        $(".connect-btn").text("連接錢包");
        $(".d-text").text("天數");
        $(".hr-text").text("小時");
        $(".m-text").text("分數");
        $(".s-text").text("秒數");
        $(".contract-text").text("合約");
        $(".wallet-text").text("錢包");
        $(".yaaf-text").text("你的YAAF");
        $(".create_btn").text("質押");
        $(".rewards-text").text("你的獎勵");
        $(".cultivate_btn").text("復投");
        $(".party_btn").text("領取獎勵");
        $(".nutrient-btn").text("預期收益");
        $(".d-return-text").text("日收益");
        $(".y-return-text").text("年利率");
        $(".dev-fee-text").text("開發費");
        $(".m-fee-text").text("行銷費");
        $(".link-text").text("推薦連結");
        $(".receive-text").text("領取10%YAAF獎勵");
        $(".invite-text").text("你的邀請人");
        $(".rebate-text").text("你的佣金");
        $(".team-text").text("團隊資料");
        $(".team1-1-text").text("首席執行官");
        $(".team1-2-text").text("弗拉德亞岑科");
        $(".team1-3-text").text("擁有計算機科學碩士學位。在瑞銀和德意志銀行等一級投資銀行構建金融軟件系統後，他意識到需要構建下一代數字銀行服務");
        $(".team2-1-text").text("首席營運官");
        $(".team2-2-text").text("邁克爾·勞伯");
        $(".team2-3-text").text("他擁有凱洛格管理學院的工商管理碩士學位和米蘭理工大學的理學碩士學位。他的貢獻包括創建和領導 YAAF_Miner 營運");
        $(".team3-1-text").text("首席風險官");
        $(".team3-2-text").text("皮埃爾·德科特");
        $(".team3-3-text").text("他擁有 ESC Bordeaux 的工商管理和金融碩士學位，負責與團隊一起監督 YAAF_Miner 項目的風險狀況");
        $(".roadmap-text").text("路線圖");
        $(".roadmap1-1-text").text("YAAF - 礦工");
        $(".roadmap1-2-text").text("2023年1月發布新一代DAPP應用YAAF-Miner");
        $(".roadmap2-1-text").text("YAAF - 代幣");
        $(".roadmap2-2-text").text("2023年4月下旬發行YAAF代幣，優先空投給礦工");
        $(".roadmap3-1-text").text("YAAF - NFT");
        $(".roadmap3-2-text").text("2023 年 10 月發布於以太坊的 YAAF NFT。優先空投給礦工");
        $(".roadmap4-1-text").text("YAAF - DAO");
        $(".roadmap4-2-text").text("22024 年 4 月 YAAF-DAO 成立，治理逐步向 DAO 轉移。");
    }
});







// connect連結錢包=CONNECT

// 天數=DAYS
// 小時=HOURS
// 分數=MINUTES
// 秒數=SECONDS

// 合約=Contract
// 錢包=Wallet
// 你的YAAF=Your YAAF
// 創造YAAF=YAAF Create
// 你的獎勵=Your Rewards
// 培育=Cultivate
// 派對=Party

// 養分=Nutrient
// 日收益=Daily Return
// 年利率=Apr
// 開發費=Dev Fee
// 行銷費=Marketing Fee
// 推薦連結=Referral Link
// 領取10%YAAF獎勵=
// Earn 10% of the BNB used to Divide YAAF from anyone who uses your referral link

// 複製=COPY
// 你的邀請人=Your Invitees
// 你的反傭=Your Rebate

// 團隊資料=Meet the Team
// 首席執行官=CEO
// 伊隆=Elon
// 2022年全球知名企業家擔任YAAF礦工顧問
// =Globally renowned entrepreneur in 2022, working as a YAAF_Miner consultant.

// 總設計師=Chief Designer
// 可可=COCO
// 知名插畫家 曾參與多個知名項目
// =Well-known illustrator, who has contributed to a number of well-known projects

// 社區管理員=Community Manager
// 維茲哈利法=Wiz Khalifa
// 歌手/藝術家 高技能社區經理，非常注重將YAAF礦工聚集在一起
// =Singer, Artist, highly skilled Community Manager, Strong focus on bringing YAAF_Miners together

// 路線圖=Roadmap
// 第一階段=Phase 1
// 2022 年 7 月 我們將運行YAAF礦工。
// =July 2022 We will run YAAF_Miner.

// 第二階段=Phase 2
// 2022年9月下旬發行YAAF代幣，優先空投給礦工。
// =YAAF token issuance in late September 2022,Priority airdrop to miners.

// 第 三 階段=Phase 3
// 2022 年 10 月發布於以太坊的 YAAF NFT。優先空投給礦工。
// =Release of YAAF NFT in October 2022, built on Ethereum. Priority airdrop to miners.

// 第 四階段=Phase (four fingers raised)
// 2023 年 4 月 20 日推出應用程式App以取代 DISCORD。
// =April 20, 2023 App launch to replace DISCORD.