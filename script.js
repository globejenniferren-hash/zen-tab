const entries = [
  // —— 《論語》 Analects —— //
  {
    original: "學而時習之，不亦說乎？",
    translation:
      "學到一些東西，並且能在生活裡不斷實踐、溫習，不也是一件很愉悅的事嗎？",
    interpretation:
      "這句話提醒我們，成長感來自「反覆實踐」而不是一次性的成就。心理學上，重複的小步前進會不斷給大腦正向回饋，比一次性的大成功更能穩定提升幸福感與自我效能感。",
    source: "《論語·學而》",
    category: "Confucianism",
    imageQuery: "study desk warm light books tea calm",
  },
  {
    original: "學而不思則罔，思而不學則殆。",
    translation:
      "只是一味學習而不去思考，就會迷惘；只是一味空想而不去學習，又會陷入危險。",
    interpretation:
      "這是一種很健康的心智模式：行動與反思要結合。只做不想，容易在忙碌中失去方向；只想不做，又會被焦慮和完美主義拖住腳步。將「做中想、想後再做」變成習慣，就是一種成熟的自我調節。",
    source: "《論語·為政》",
    category: "Confucianism",
    imageQuery: "notebook pen thinking person minimal desk",
  },
  {
    original: "知之為知之，不知為不知，是知也。",
    translation:
      "知道就是知道，不知道就是不知道，能如此分辨與承認，才是真正的智慧。",
    interpretation:
      "允許自己「不知道」是一種內在安全感。當我們不再假裝全知，就更容易學習、合作，也更少害怕被看見缺點。這在心理上，是從防禦姿態走向開放姿態的轉變。",
    source: "《論語·為政》",
    category: "Confucianism",
    imageQuery: "open mind portrait soft light honesty",
  },
  {
    original: "己所不欲，勿施於人。",
    translation:
      "自己不希望承受的對待，也不要強加在別人身上。",
    interpretation:
      "這句話提供了一個非常實用的共情工具：在情緒上頭之前先問自己——如果角色互換，我願意這樣被對待嗎？這個微小的自我覺察，常常就能讓衝動停止，關係變得柔軟而有邊界。",
    source: "《論語·顏淵》",
    category: "Confucianism",
    imageQuery: "two people conversation empathy soft light",
  },
  {
    original: "君子坦蕩蕩，小人長戚戚。",
    translation:
      "心胸寬廣的人內心開闊安然，心胸狹窄的人總是憂慮不安。",
    interpretation:
      "這裡說的「坦蕩」，不是沒有情緒，而是不被情緒綁架。當一個人內在價值穩定，就不會因為一點得失而大起大落。這與現代心理學中的穩定自尊、安全依附非常接近。",
    source: "《論語·述而》",
    category: "Confucianism",
    imageQuery: "open field sunrise calm person back view",
  },

  // —— 《孟子》 Mencius —— //
  {
    original: "得道者多助，失道者寡助。",
    translation:
      "順應大道、符合正義的人會得到更多幫助，違背道義的人得到的幫助就會很少。",
    interpretation:
      "這不只是政治原則，也是個人生命的隱性規律。當你的行為對他人、對整體是有益的，你會在看不見的地方積累信任與援手；反之，關係會在一次次損耗中變得孤立。",
    source: "《孟子·公孫丑下》",
    category: "Confucianism",
    imageQuery: "many hands helping support community",
  },
  {
    original: "窮則獨善其身，達則兼善天下。",
    translation:
      "處境困窘時，就專注於修養好自己；一旦條件寬裕了，就盡量讓更多人也受益。",
    interpretation:
      "這是一種動態的責任觀。當資源有限時，不必為無法拯救世界而焦慮，把自己照顧好本身就是功德；當你有了更多影響力，再把善意延展出去，避免陷入「救世主情結」或「完全自我中心」的兩個極端。",
    source: "《孟子·盡心上》",
    category: "Confucianism",
    imageQuery: "city view single person then crowd help",
  },
  {
    original: "老吾老以及人之老，幼吾幼以及人之幼。",
    translation:
      "尊敬與照顧自己的長輩，進一步也尊敬與照顧別人的長輩；愛護自己的子女，也愛護別人的子女。",
    interpretation:
      "這句話把「愛」從血緣擴展到更大的社會圈。心理上，當一個人能把對家人的關懷外溢到更廣泛的人群，內心往往會產生更強的連結感與意義感，減少孤立與無力。",
    source: "《孟子·梁惠王上》",
    category: "Confucianism",
    imageQuery: "grandparents children community care warm",
  },
  {
    original: "生於憂患，死於安樂。",
    translation:
      "在憂患與挑戰中反而容易成長壯大，在過度安逸裡反而會走向衰亡。",
    interpretation:
      "這句話並不是鼓勵自虐，而是提醒我們：適度的壓力與挑戰，是成長的必要條件。如果把所有不適都視為「不應該發生」，人就會失去韌性；把挑戰視為訓練，大腦會學會在壓力下調動資源，而不是只想逃跑。",
    source: "《孟子·告子下》",
    category: "Confucianism",
    imageQuery: "mountain climbing challenge resilience",
  },

  // —— 《大學》 Great Learning —— //
  {
    original: "大學之道，在明明德，在親民，在止於至善。",
    translation:
      "所謂大學之道，在於讓內在的光明德性愈發顯現，在於讓人心向善，在於把工夫安住在至善之處。",
    interpretation:
      "這裡的「學」不是考試，而是整個人生的修煉方向：讓心越來越清明、柔軟、有辨別力。當一個人有了這樣的內在指南針，外在選擇與成就就不再那麼迷惘。",
    source: "《大學》",
    category: "Confucianism",
    imageQuery: "light through window library inner light",
  },
  {
    original: "知所先後，則近道矣。",
    translation:
      "知道事情的先後輕重，就已經接近大道了。",
    interpretation:
      "很多焦慮來自於：什麼都想同時做好。這句話像是一個溫柔的提醒——先分清什麼「當下最重要」，把有限的精力放在關鍵處，反而比到處兼顧更接近內在秩序。",
    source: "《大學》",
    category: "Confucianism",
    imageQuery: "priority planning notebook pen minimal",
  },

  // —— 《心經》 Heart Sutra —— //
  {
    original: "色不異空，空不異色；色即是空，空即是色。",
    translation:
      "一切有形的現象並不離開空性，空性也不離開現象；現象本身就是空性，空性也正顯現在現象之中。",
    interpretation:
      "這不是要否定世界，而是提醒我們：事物在流動變化中沒有固定不變的實體。當你看見關係、情緒、身份都是這樣的「即是、亦非」，執著感會鬆一點，心也就有了更多迴旋空間。",
    source: "《般若波羅蜜多心經》",
    category: "Buddhism",
    imageQuery: "mist mountains clouds emptiness minimal",
  },
  {
    original: "照見五蘊皆空，度一切苦厄。",
    translation:
      "透徹觀照身心五蘊本性皆空，便能超越一切苦難與逼迫。",
    interpretation:
      "當我們把自己完全等同於「情緒、身體感受、念頭」時，苦就特別真實而巨大。心經的練習是：學會觀照它們的生起與消散，而不是被它們定義。這種觀照是很深的心理距離感，讓人不再完全被情緒控制。",
    source: "《般若波羅蜜多心經》",
    category: "Buddhism",
    imageQuery: "meditation person sky spacious awareness",
  },
  {
    original: "無眼耳鼻舌身意，無色聲香味觸法。",
    translation:
      "在究竟的空性中，沒有獨立實有的眼耳鼻舌身意，也沒有獨立實有的色聲香味觸法。",
    interpretation:
      "這段話在提醒我們：平時認為堅固的感官世界，其實只是暫時的組合與經驗。當心從「一定要抓住某種感受」的執著中退後一步時，對快樂與痛苦的依戀與恐懼都會放鬆不少。",
    source: "《般若波羅蜜多心經》",
    category: "Buddhism",
    imageQuery: "abstract lights senses dissolve calm",
  },

  // —— 《道德經》 Tao Te Ching —— //
  {
    original: "上善若水。水善利萬物而不爭。",
    translation:
      "至高的善行像水一樣，滋養萬物而不與之爭執。",
    interpretation:
      "水的溫柔並不是軟弱，而是一種有彈性的力量：遇阻則繞，遇隙則入，最後反而改變地形。這種「不與對抗，卻能影響」的姿態，對於處理衝突和壓力都很有啟發。",
    source: "《道德經》第八章",
    category: "Taoism",
    imageQuery: "water stream rocks soft light gentle power",
  },
  {
    original: "人法地，地法天，天法道，道法自然。",
    translation:
      "人效法大地，大地效法蒼天，蒼天效法大道，而大道則順應自然本身。",
    interpretation:
      "道家提出一種「順勢而為」的生活觀：不是放棄行動，而是在行動前先聆聽環境與內心的節奏。當我們不再一味對抗現實，而是與之協調，內在的緊繃會慢慢鬆開，創造力反而更容易出現。",
    source: "《道德經》第二十五章",
    category: "Taoism",
    imageQuery: "nature landscape clouds harmony with nature",
  },
  {
    original: "知足不辱，知止不殆，可以長久。",
    translation:
      "懂得知足，就不會自取其辱；懂得適可而止，就不會陷入危險，如此才能長久。",
    interpretation:
      "在一個鼓勵「無限擴張」的時代，這句話像一個剎車踏板。當你願意承認「到這裡已經很好」，比較心與貪心就不那麼強烈，身心也才有休息與續航的空間。",
    source: "《道德經》第四十四章",
    category: "Taoism",
    imageQuery: "simple life minimal home cozy evening",
  },
  {
    original: "大成若缺，其用不弊。",
    translation:
      "真正的大成就，看起來似乎還有缺憾，但它的作用卻不會衰竭。",
    interpretation:
      "完美主義讓人不敢完成，只敢打草稿。道家提醒我們：真正有生命力的創造，往往帶著一點不完美與開放性，正因為不封閉，才可以不斷被補充與更新。",
    source: "《道德經》第四十五章",
    category: "Taoism",
    imageQuery: "wabi sabi pottery imperfect beauty",
  },
  {
    original: "既以為人己愈有，既以與人己愈多。",
    translation:
      "願意為人付出，自己反而更充實；願意與人分享，自己反而獲得更多。",
    interpretation:
      "從心理學角度來看，真誠的給予會強化我們的「富足感」與連結感。關鍵不在於付出多少，而在於行動是否出於自願與喜悅，而非委屈與討好。",
    source: "《道德經》第八十一章",
    category: "Taoism",
    imageQuery: "sharing food friends table warm",
  },

  // —— 《莊子》 Zhuangzi —— //
  {
    original: "相濡以沫，不如相忘於江湖。",
    translation:
      "彼此用唾沫相互濡潤，不如在江湖中各自相忘。",
    interpretation:
      "這句話並不是鼓勵冷漠，而是對「窒息式依賴」的一種溫柔提醒。有時候，放過彼此、各自成長，反而比困在同一個狹小空間裡互相消耗，要來得健康。",
    source: "《莊子·大宗師》",
    category: "Taoism",
    imageQuery: "river fog distance two boats",
  },
  {
    original: "天地與我並生，而萬物與我為一。",
    translation:
      "天地與我同時存在，萬物與我本就是一體。",
    interpretation:
      "當一個人不再把自己看作孤立的個體，而是看見自己與自然、他人深深相連時，內心的孤獨感會減弱很多。莊子的這種宇宙視角，其實是一種很高階的安全感與連結感。",
    source: "《莊子·齊物論》",
    category: "Taoism",
    imageQuery: "night sky stars person small universe",
  },
  {
    original: "安時而處順，哀樂不能入也。",
    translation:
      "安然地順應時勢處境，悲哀與快樂就無法輕易擺弄他的心。",
    interpretation:
      "這裡說的不是麻木，而是一種深層的安住——不再把情緒的高低當成全部的自己。當你能帶著覺知看見情緒來去，它們就比較難左右你的決策與價值感。",
    source: "《莊子·養生主》",
    category: "Taoism",
    imageQuery: "person sitting by window rainy day calm",
  },

  // —— 《菜根譚》 Caigentan —— //
  {
    original: "寧可直中取，不可曲中求。",
    translation:
      "寧願用正直的方式去獲取，也不要用彎曲不正的手段去追求。",
    interpretation:
      "這句話談的是一種長期主義：短期看，投機取巧好像比較快；長期看，正直讓你減少內在撕裂，也積累真正穩固的信任資本。這種「心安」本身就是極大的收益。",
    source: "《菜根譚》",
    category: "Confucianism",
    imageQuery: "straight road sunrise integrity",
  },
  {
    original: "淡中有味，常中見奇。",
    translation:
      "清淡之中自有滋味，平常裡面也能看見奇妙。",
    interpretation:
      "當注意力不再只追逐強烈刺激，心就能品味到日常的細微美好。這既是一種審美訓練，也是一種對抗麻木與空虛的方式：讓平凡的一天變得有層次。",
    source: "《菜根譚》",
    category: "Confucianism",
    imageQuery: "tea cup steam simple table morning",
  },
  {
    original: "處世讓一步為高，退步即進步的張本。",
    translation:
      "與人相處肯讓一步，反而是高明之舉；懂得後退，往往正是日後前進的基礎。",
    interpretation:
      "在關係中適度退讓，並不是失敗，而是一種對整體局勢的照顧。心理學上，這接近「雙贏思維」：不急於證明自己佔上風，而是尋找雙方都能呼吸的空間。",
    source: "《菜根譚》",
    category: "Confucianism",
    imageQuery: "two people handshake compromise peace",
  },
  {
    original: "靜中觀心，真境自現。",
    translation:
      "在寧靜之中觀照自己的心，真實的境界自然顯現。",
    interpretation:
      "當外在訊息太吵時，很難分辨什麼是真正重要的。留出一點安靜的時間與空間，讓心慢慢沉澱下來，你會更清楚自己真正的需要，而不是只是被外界牽著走。",
    source: "《菜根譚》",
    category: "Buddhism",
    imageQuery: "meditation room candle quiet night",
  },

  // —— 《論語》進一步擴充 —— //
  {
    original: "三人行，必有我師焉。",
    translation:
      "與三個人同行，其中一定有可以作為我老師的人。",
    interpretation:
      "這句話鼓勵我們帶著學習者心態行走在世界上：即便是與自己不同、甚至不太喜歡的人，也可能在某個面向上給出啟發。這種姿態會讓評判心變小，好奇心變大。",
    source: "《論語·述而》",
    category: "Confucianism",
    imageQuery: "group of people walking learning from others",
  },
  {
    original: "見賢思齊焉，見不賢而內自省也。",
    translation:
      "看到有德行的人，就想著要向他看齊；看到沒有德行的人，就反觀自己是否也有同樣問題。",
    interpretation:
      "這是一種很溫柔的自我修行方式：遇到欣賞的人，不是自卑，而是把對方當作未來的自己；遇到不喜歡的行為，不是只批評對方，而是也檢視自己是否也曾如此。久而久之，外界的一切都成了鏡子。",
    source: "《論語·里仁》",
    category: "Confucianism",
    imageQuery: "reflection in water self reflection mirror",
  },
  {
    original: "人無遠慮，必有近憂。",
    translation:
      "一個人如果沒有長遠的考量，就一定會有眼前的憂患。",
    interpretation:
      "短期的輕鬆決定，往往會變成未來的壓力。這句話提醒我們，適度為未來預留空間——包括金錢、時間、健康與關係——不是焦慮，而是一種對自己的溫柔負責。",
    source: "《論語·衛靈公》",
    category: "Confucianism",
    imageQuery: "planning future calendar pen long term thinking",
  },
  {
    original: "君子欲訥於言，而敏於行。",
    translation:
      "君子在言語上寧願遲鈍少說，在行動上則要敏捷有力。",
    interpretation:
      "在資訊爆炸的時代，我們特別容易被「說得好聽」所迷惑。這句話把焦點重新拉回：行動才是最有分量的語言。對自己來說，少一點空談、多一點具體的下一步，心也會更踏實。",
    source: "《論語·里仁》",
    category: "Confucianism",
    imageQuery: "hands working action over words",
  },

  // —— 《孟子》進一步擴充 —— //
  {
    original: "人皆可以為堯舜。",
    translation:
      "每個人都有可能成為堯舜那樣的聖王。",
    interpretation:
      "在現代語境下，可以理解為：每個人都擁有成為更好自己的潛能，差別只在於是否願意長期耕耘。這種信念能抵消「我天生就不行」的自我否定，轉而把注意力放在當下可行的一小步。",
    source: "《孟子·告子下》",
    category: "Confucianism",
    imageQuery: "sunrise new beginning potential",
  },
  {
    original: "愛人者，人恆愛之；敬人者，人恆敬之。",
    translation:
      "愛他人的人，常常也會被人所愛；尊敬他人的人，也常常會被人尊敬。",
    interpretation:
      "關係是互為鏡像的系統。當你真心看見與尊重別人，別人的神經系統也會在潛意識中回應這種安全感與尊重，於是正向循環慢慢被建立出來。",
    source: "《孟子·離婁下》",
    category: "Confucianism",
    imageQuery: "people smiling mutual respect warm light",
  },

  // —— 《心經》補充 —— //
  {
    original: "無無明，亦無無明盡，乃至無老死，亦無老死盡。",
    translation:
      "沒有無明，也沒有無明可滅；乃至沒有生老病死，也沒有生老病死可滅。",
    interpretation:
      "這段文字指向一種超越「有 / 無、得 / 失」的看見：當你不再緊抓著某種狀態要成立或消失，心就不會被那個狀態牽著走。對日常生活來說，就是在面對痛苦時不再加上一層「這不應該發生」的二次打擊。",
    source: "《般若波羅蜜多心經》",
    category: "Buddhism",
    imageQuery: "time passing aging subtle abstract",
  },

  // —— 《道德經》補充 —— //
  {
    original: "合抱之木，生於毫末；九層之臺，起於累土；千里之行，始於足下。",
    translation:
      "合抱的大樹，從細小的嫩芽開始生長；高高的九層高臺，由一簣一簣土堆積而成；千里遠行，是從腳下第一步開始的。",
    interpretation:
      "這是對「小步行動」最詩意的描述之一。當目標太大時，人容易被嚇住不敢開始；換成只專注於當下腳邊的一小步，大腦的壓力會小很多，行動反而能持續。",
    source: "《道德經》第六十四章",
    category: "Taoism",
    imageQuery: "first step journey road start walking",
  },
  {
    original: "少則得，多則惑。",
    translation:
      "少一點，反而容易有所獲得；太多了，反而讓人迷惑。",
    interpretation:
      "資訊、選擇和物質的「過量」，往往會把注意力撕裂得七零八落。適度減少輸入與欲望，會讓真正重要的東西浮現出來，也讓心比較不會被噪音牽著跑。",
    source: "《道德經》第四十八章",
    category: "Taoism",
    imageQuery: "minimalism declutter empty space calm",
  },

  // —— 《莊子》補充 —— //
  {
    original: "若夫乘天地之正，而御六氣之辯，以遊無窮者，彼且惡乎待哉？",
    translation:
      "若能乘著天地的正氣，駕馭陰陽寒暑風雨的變化，在無窮之境中逍遙，那又何必執著於一時一地的依靠呢？",
    interpretation:
      "莊子筆下的「逍遙」，不是逃避現實，而是一種更大的視野：當你看見生命本身在更廣闊的節奏裡流動時，一些眼前的糾結就不再那麼絕對。這樣的心境，能讓人更自在地面對變化。",
    source: "《莊子·逍遙遊》",
    category: "Taoism",
    imageQuery: "bird flying high sky freedom",
  },
  {
    original: "至人無己，神人無功，聖人無名。",
    translation:
      "達到圓滿境界的人已不被小我的得失所困，靈性之人不執著於功勞，真正的聖人甚至不在意名聲。",
    interpretation:
      "這句話指向一種從「自我中心」鬆動出來的自由：當你不再那麼需要別人的認可來證明自己時，行動反而更純粹、更有樂趣。從心理角度看，這是內在價值穩定後自然流露的狀態。",
    source: "《莊子·逍遙遊》",
    category: "Taoism",
    imageQuery: "silhouette person sky letting go ego",
  },

  // —— 《菜根譚》補充 —— //
  {
    original: "寬一分，得一分人心；嚴十分，失十分人心。",
    translation:
      "寬厚一分，就多得一分人心；苛刻十分，就會失去十分人心。",
    interpretation:
      "領導與相處之道，常在這句話裡：過度苛責也許短期有效，卻會在關係裡留下持久的恐懼與疏離；適度的寬厚與原諒，反而能激發對方自發的責任感與感激。",
    source: "《菜根譚》",
    category: "Confucianism",
    imageQuery: "kind leader team trust warm office",
  },
  {
    original: "寵辱不驚，看庭前花開花落；去留無意，望天上雲卷雲舒。",
    translation:
      "得寵或受辱都不驚慌，只看庭前花開花謝；去或留都不執著，只望天上雲卷雲舒。",
    interpretation:
      "這種姿態像是一種生活禪：讓外界的起落變化在心中留下痕跡，但不再決定你的價值感。當內在的重心不再完全寄託在外物上，對成敗、關係、機會的抓取也就能慢慢鬆手。",
    source: "《菜根譚》",
    category: "Buddhism",
    imageQuery: "garden flowers clouds passing peaceful",
  },

  // —— 《論語》再擴充 —— //
  {
    original: "仁者不憂，知者不惑，勇者不懼。",
    translation:
      "有仁德的人不容易長久憂愁，有智慧的人不容易迷惑，有勇氣的人不容易恐懼。",
    interpretation:
      "這句話像是三種心靈肌肉：仁讓我們感覺自己是連結的，不那麼孤立；知讓我們在複雜中仍有判準；勇讓我們願意在害怕中仍然前進。人生某個階段可能特別需要其中一項，也可以練習慢慢補齊。",
    source: "《論語·憲問》",
    category: "Confucianism",
    imageQuery: "three people brave calm wise",
  },
  {
    original: "不患無位，患所以立；不患莫己知，求為可知也。",
    translation:
      "不要憂慮沒有地位，只要擔心自己有沒有與之相配的實力；不要憂慮沒有人了解自己，只要努力讓自己成為值得被了解的人。",
    interpretation:
      "與其焦慮「機會還沒來」「伯樂還沒看見」，不如把心力放回打磨自己的內在與能力。這樣做，一方面能減少無力感，另一方面也真正提高了遇見好機會時的把握度。",
    source: "《論語·里仁》",
    category: "Confucianism",
    imageQuery: "person studying night desk lamp focus",
  },
  {
    original: "君子和而不流，強立而不反。",
    translation:
      "君子能與人和諧相處，但不隨波逐流；能堅定立場，又不盲目對抗。",
    interpretation:
      "這是一種很細緻的界限感：既不把自己溶解在別人的期待裡，也不需要透過故意對立來證明自己。心理上，這來自穩定的自我價值與對他人差異的尊重。",
    source: "《論語·子張》",
    category: "Confucianism",
    imageQuery: "crowd one calm person centered",
  },

  // —— 《孟子》再擴充 —— //
  {
    original: "夫仁者，己欲立而立人，己欲達而達人。",
    translation:
      "有仁心的人，自己想站穩腳跟時，也幫助別人站穩；自己想通達時，也幫助別人通達。",
    interpretation:
      "把自己的渴望拓展為對他人的祝福，是一種很高級的利他：不是犧牲自己去成全他人，而是在實現自我時順帶拉別人一把，讓整個系統一起變好。",
    source: "《孟子·公孫丑上》",
    category: "Confucianism",
    imageQuery: "mentor helping colleague climb step",
  },
  {
    original: "養心莫善於寡欲。",
    translation:
      "修養內心沒有什麼比減少無止境的欲望更好的了。",
    interpretation:
      "這裡的「寡欲」不是壓抑一切需求，而是分辨哪些真的是心底的需要，哪些只是被外界刺激出來的衝動。當願望變得少而精，心的力量會集中起來，而不是被無數想要撕裂開。",
    source: "《孟子·盡心上》",
    category: "Confucianism",
    imageQuery: "simple room plant book calm",
  },

  // —— 《大學·中庸》補充 —— //
  {
    original: "所謂誠其意者，毋自欺也。",
    translation:
      "所謂讓心意真誠，就是不要自欺。",
    interpretation:
      "很多時候我們不是騙別人，而是先騙過自己，好讓自己暫時舒服一點。但真正的安穩來自於：願意面對內心真實的聲音，即便一開始有點刺痛，長遠看卻更輕鬆。",
    source: "《大學》",
    category: "Confucianism",
    imageQuery: "person looking in mirror honest reflection",
  },
  {
    original: "喜怒哀樂之未發，謂之中；發而皆中節，謂之和。",
    translation:
      "喜怒哀樂還沒有發出時，叫作「中」；發出來而都恰到好處，叫作「和」。",
    interpretation:
      "中庸並不是沒有情緒，而是在情緒發生前有覺察，發生時有節制。當你既不壓抑也不失控，情緒就成了與世界溝通的細膩語言，而不是一種災難。",
    source: "《中庸》",
    category: "Confucianism",
    imageQuery: "yin yang balance water fire harmony",
  },

  // —— 《心經》再擴充 —— //
  {
    original: "無苦集滅道，無智亦無得，以無所得故。",
    translation:
      "沒有固定實體的苦集滅道，也沒有可執取的智慧與成就，正因為本無所得。",
    interpretation:
      "這提醒我們：連「修行的成果」也不要過分抓住。當你不再急於證明自己已經到哪個階段，而是單純地活在當下的練習裡，反而比較容易放鬆和穩定。",
    source: "《般若波羅蜜多心經》",
    category: "Buddhism",
    imageQuery: "monk walking path simple stillness",
  },

  // —— 《道德經》再擴充 —— //
  {
    original: "知人者智，自知者明。",
    translation:
      "了解別人的人算是有智慧，真正了解自己的人才算明白。",
    interpretation:
      "觀察他人很容易，回頭看自己卻需要勇氣。當一個人願意把同樣犀利的眼光轉回自身，而不是只用來批評別人時，他的生命就開始朝著真正的成熟前進。",
    source: "《道德經》第三十三章",
    category: "Taoism",
    imageQuery: "person journaling self awareness window",
  },
  {
    original: "大直若屈，大巧若拙，大辯若訥。",
    translation:
      "最大的正直看起來好像彎曲，最巧妙的技藝看起來好像笨拙，最會辯說的人反而看起來木訥。",
    interpretation:
      "真正成熟的力量往往不張揚：不急於表現自己，甚至願意在外表上看起來「不那麼厲害」。這種收斂，來自對自己實力的信任，而非缺乏自信。",
    source: "《道德經》第四十五章",
    category: "Taoism",
    imageQuery: "old craftsman working hands humble skill",
  },

  // —— 《莊子》再擴充 —— //
  {
    original: "知其不可奈何而安之若命。",
    translation:
      "知道有些事無力改變，卻仍能安然地接納，就像接受命運一樣。",
    interpretation:
      "這不是消極，而是對「可控」與「不可控」的清晰分界：在自己能行動的範圍內盡力，在超出能力的部分學會放手。這樣的心態，既不放棄責任，也不被無力感拖垮。",
    source: "《莊子·人間世》",
    category: "Taoism",
    imageQuery: "person under vast sky acceptance calm",
  },
  {
    original: "吾生也有涯，而知也無涯。",
    translation:
      "人的生命是有限的，而知識與學問是無窮無盡的。",
    interpretation:
      "知道時間與精力有限，就是在提醒自己不要什麼都想學一點，而是選擇真正重要的方向深耕。這樣的「有限感」，反而讓生活更聚焦，也更有味道。",
    source: "《莊子·養生主》",
    category: "Taoism",
    imageQuery: "bookshelf one book chosen focus",
  },

  // —— 《菜根譚》再擴充 —— //
  {
    original: "能受苦中苦，方為人上人。",
    translation:
      "能夠承受常人難受之苦，方能成就超出常人的境界。",
    interpretation:
      "這句話提醒我們，許多外在的「高位」，背後其實是默默承受與鍛鍊。與其羨慕別人的成果，不如問自己：我願意在看不見的地方，為自己的心與能力多吃一點苦嗎？",
    source: "《菜根譚》",
    category: "Confucianism",
    imageQuery: "athlete training alone determination",
  },
  {
    original: "心地乾淨，方可讀書學道。",
    translation:
      "內心清淨坦蕩，才能真正讀懂書與大道。",
    interpretation:
      "當心裡充滿比較、算計與妒意時，再好的道理也只會被用來證明自己。先把心裡的雜質放下一些，再讀經典與知識，體會會完全不同。",
    source: "《菜根譚》",
    category: "Buddhism",
    imageQuery: "clean desk sunlight open book calm",
  },

  // —— 《論語》擴充（二） —— //
  {
    original: "溫故而知新，可以為師矣。",
    translation:
      "能在溫習舊學時領會出新的體會，就有資格做別人的老師了。",
    interpretation:
      "成長不一定來自「全新輸入」，常常來自對同一經驗的再咀嚼。重讀一段關係、一份工作、一個決定時，若願意帶著現在的自己去看，往往會長出過去沒看見的層次。",
    source: "《論語·為政》",
    category: "Confucianism",
    imageQuery: "old book new light reading revisit calm",
  },
  {
    original: "君子不器。",
    translation:
      "君子不把自己窄化成單一功能的器具。",
    interpretation:
      "這不是反對專業，而是提醒：人若只剩一種角色腳本，遇到變局就容易僵住。保留學習、同理與跨界的能力，心會比較有彈性，也比較不會被標籤綁死。",
    source: "《論語·為政》",
    category: "Confucianism",
    imageQuery: "many tools workshop versatile hands craft",
  },
  {
    original: "君子周而不比，小人比而不周。",
    translation:
      "君子普遍厚待他人而不結黨營私；小人結黨拉攏卻不能公正周遍。",
    interpretation:
      "健康的連結是「原則一致、對事也對人」；不健康的派系是「只問立場、不問是非」。當你察覺自己在小圈子裡越來越難聽見不同聲音，值得停下來問：我是在追求歸屬，還是在逃避思考？",
    source: "《論語·為政》",
    category: "Confucianism",
    imageQuery: "circle of people open inclusive light",
  },
  {
    original: "君子食無求飽，居無求安。",
    translation:
      "君子吃飯不執著於奢飽，居住也不執著於安逸。",
    interpretation:
      "適度的舒適是滋養，過度的安逸常讓人麻痺。把一點點「不那麼舒服」留在生活裡——例如保持學習、運動或創作的節奏——反而能讓心保持清醒與朝氣。",
    source: "《論語·學而》",
    category: "Confucianism",
    imageQuery: "simple meal tea humble table morning",
  },
  {
    original: "過則勿憚改。",
    translation:
      "有了過錯，不要怕改正。",
    interpretation:
      "許多人不是不知道錯，而是怕丟臉、怕推翻先前的自己。願意改，本質上是對未來的自己溫柔：承認過去有限，不等於否定整個人。小步修正，往往比硬扛更能重建信任。",
    source: "《論語·學而》",
    category: "Confucianism",
    imageQuery: "eraser pencil rewrite notebook fresh start",
  },
  {
    original: "君子喻於義，小人喻於利。",
    translation:
      "君子用義理來判斷取捨，小人則只看眼前利害。",
    interpretation:
      "這裡的「義」不必說得很宏大，可以是很日常的：這樣做對關係公平嗎？對長期健康嗎？若凡事只算短期得失，人會變得精算而空虛；若多問一句「這樣對嗎」，選擇往往更踏實。",
    source: "《論語·里仁》",
    category: "Confucianism",
    imageQuery: "scales justice balance soft light ethical",
  },
  {
    original: "朝聞道，夕死可矣。",
    translation:
      "早晨真正領悟了大道，即便傍晚離世也可以無憾。",
    interpretation:
      "這句話的力度在於：有些體悟比壽命長短更重要。當你終於想通一件糾纏多年的心結，或看清自己真正在乎的是什麼，那種內在的清明本身，就是一種圓滿。",
    source: "《論語·里仁》",
    category: "Confucianism",
    imageQuery: "sunrise clarity breakthrough quiet moment",
  },
  {
    original: "德不孤，必有鄰。",
    translation:
      "有德行的人不會孤立，必定會有志同道合者相近。",
    interpretation:
      "當你長期選擇誠實、善意與可靠，短期可能吃虧，長期卻會在關係場裡累積信任與連結。孤獨有時是過渡，不是終點；把心修穩了，同頻的人會慢慢出現。",
    source: "《論語·里仁》",
    category: "Confucianism",
    imageQuery: "two paths meet friends walking together",
  },
  {
    original: "質勝文則野，文勝質則史。文質彬彬，然後君子。",
    translation:
      "質樸勝過文采就顯粗野，文采勝過質樸就顯虛浮。文與質調和得宜，才是君子之風。",
    interpretation:
      "做人也是一樣：只有真誠而完全沒有表達，容易被誤解；只有表面漂亮而內在空洞，難以長久。讓「真實」與「修養」並行，關係會既踏實又舒服。",
    source: "《論語·雍也》",
    category: "Confucianism",
    imageQuery: "balance wood paper texture harmony design",
  },
  {
    original: "知者樂水，仁者樂山。",
    translation:
      "有智慧的人欣賞水的流動，有仁德的人欣賞山的穩重。",
    interpretation:
      "兩種氣質都美：一種靈活應變，一種沉穩可靠。認識自己偏向哪一種，並欣賞與自己不同的人，團隊與關係才會互補，而不是互踩。",
    source: "《論語·雍也》",
    category: "Confucianism",
    imageQuery: "mountain lake water rock landscape calm",
  },
  {
    original: "逝者如斯夫，不舍晝夜。",
    translation:
      "時光就像這河水一樣流去，日夜不停。",
    interpretation:
      "孔子面對流水時的感嘆，是一種溫柔的提醒：沒有什麼狀態會永遠停住。悲歡、得失、身份都在變化中。接納這點，比較不會用「永遠」來折磨自己或別人。",
    source: "《論語·子罕》",
    category: "Confucianism",
    imageQuery: "river flowing time long exposure peaceful",
  },
  {
    original: "毋意，毋必，毋固，毋我。",
    translation:
      "不憑空臆測，不武斷強求，不固執成見，不唯我獨尊。",
    interpretation:
      "這四個「毋」是很好的情緒與溝通檢查表：生氣前先問，我是不是在腦補劇情？有沒有把「希望」當成「一定」？還聽得進別人的版本嗎？放下小我中心，衝突常會降溫一半。",
    source: "《論語·子罕》",
    category: "Confucianism",
    imageQuery: "open hands letting go ego soft light",
  },
  {
    original: "君子求諸己，小人求諸人。",
    translation:
      "君子反求諸己，小人則一味要求別人。",
    interpretation:
      "把力氣先放在「我能調整什麼」，不是因為要扛下所有責任，而是因為那是唯一真正可控的變數。抱怨環境與他人很省力，但改變通常從自己開始才會發生。",
    source: "《論語·衛靈公》",
    category: "Confucianism",
    imageQuery: "mirror reflection self responsibility calm",
  },
  {
    original: "工欲善其事，必先利其器。",
    translation:
      "工匠想把事情做好，一定要先磨利工具。",
    interpretation:
      "心理上也一樣：睡眠、身體、工具與環境，都是「器」。想提升輸出品質卻不願意投資基礎，往往事倍功半。先照顧好能支撐你的條件，再談表現，比較實際。",
    source: "《論語·衛靈公》",
    category: "Confucianism",
    imageQuery: "tools sharpen workshop craft preparation",
  },
  {
    original: "君子泰而不驕，小人驕而不泰。",
    translation:
      "君子安詳從容卻不傲慢，小人傲慢卻內心不安。",
    interpretation:
      "真正的自信往往安靜，因為不需要用姿態壓人；虛張聲勢的人，內在常常是緊繃與匱乏。若你察覺自己「越說越大聲」，不妨問：我是在表達事實，還是在安撫恐懼？",
    source: "《論語·子路》",
    category: "Confucianism",
    imageQuery: "calm leader confident quiet room",
  },
  {
    original: "君子和而不同，小人同而不和。",
    translation:
      "君子能與人和諧相處卻不盲目附和；小人表面一致，內心卻不和睦。",
    interpretation:
      "真實的尊重包含差異：可以不同意，仍願意聽完、仍維持基本善意。假團結則是壓抑真話，檯面笑臉、檯下怨氣。健康關係需要一點「和而不同」的空間。",
    source: "《論語·子路》",
    category: "Confucianism",
    imageQuery: "diverse people dialogue circle respectful",
  },
  {
    original: "古之學者為己，今之學者為人。",
    translation:
      "古代求學的人為了充實自己，現在求學的人往往為了做給別人看。",
    interpretation:
      "若學習只為了面子、職稱或按讚，心會很累，也容易投機。把「成為更清醒、更善良的人」當成核心動機，外在成果反而更可能跟著來，而且比較不會患得患失。",
    source: "《論語·憲問》",
    category: "Confucianism",
    imageQuery: "student alone library intrinsic motivation",
  },
  {
    original: "不怨天，不尤人。",
    translation:
      "不埋怨上天，也不責怪他人。",
    interpretation:
      "這不是禁止情緒，而是不把全部因果都推出去。適度承認自己的選擇與局限，會帶來力量感：我仍能在這個框架裡做一點什麼。怨天尤人短期舒暢，長期削弱行動力。",
    source: "《論語·憲問》",
    category: "Confucianism",
    imageQuery: "cloud sky acceptance person standing",
  },
  {
    original: "歲寒，然後知松柏之後彫也。",
    translation:
      "到了嚴寒季節，才知道松柏是最後才凋零的。",
    interpretation:
      "順境時誰都顯得堅強，逆境才看得出誰的價值觀經得起考驗。對自己來說，也是在問：當資源變少、壓力變大時，我還願意守住的底線與溫柔是什麼？",
    source: "《論語·子罕》",
    category: "Confucianism",
    imageQuery: "pine tree winter snow resilient calm",
  },
  {
    original: "吾日三省吾身：為人謀而不忠乎？與朋友交而不信乎？傳不習乎？",
    translation:
      "我每天多次反省：替人辦事是否盡心？與朋友交往是否誠信？老師所教是否實踐溫習？",
    interpretation:
      "反省不必變成自我攻擊，可以像儀表板檢查：今天我的「可靠度」「誠實度」「落實度」如何？小小自問，能讓人在忙碌中仍對自己的品格負責，而不是只靠外在評價定義自己。",
    source: "《論語·學而》",
    category: "Confucianism",
    imageQuery: "evening journal reflection candle quiet",
  },

  // —— 《道德經》擴充（二） —— //
  {
    original: "道可道，非常道；名可名，非常名。",
    translation:
      "能用語言說清楚的道，就不是那恆常之道；能用名稱固定的名，也不是那恆常之名。",
    interpretation:
      "終極真理與生命體驗，很難被語言完全框死。這帶來一種謙卑：對自己與他人的經驗保留一點開放，不急著用標籤蓋棺論定。語言是工具，不是牢籠。",
    source: "《道德經》第一章",
    category: "Taoism",
    imageQuery: "fog path mystery dawn soft minimal",
  },
  {
    original: "有無相生，難易相成，長短相形，高下相盈，音聲相和，前後相隨。",
    translation:
      "有與無互相生成，難與易互相成立，長短、高下、音聲、前後，都在相對中顯現。",
    interpretation:
      "許多我們厭惡的狀態，其實在定義另一種狀態：沒有低谷就沒有高峰的感覺。不是要美化痛苦，而是當我們理解「成對出現」，比較不會把一時逆境當成永恆判決，心會鬆一點。",
    source: "《道德經》第二章",
    category: "Taoism",
    imageQuery: "yin yang balance complementary waves",
  },
  {
    original: "天下皆知美之為美，斯惡已；皆知善之為善，斯不善已。",
    translation:
      "天下人都知道什麼是美，醜的概念就出現了；都知道什麼是善，不善的概念也跟著出現。",
    interpretation:
      "比較與標準一旦建立，焦慮往往就跟著來。覺察「美醜、成敗」很多是相對的，可以減少一點對單一標準的執著，讓自己不必永遠活在別人的尺規底下。",
    source: "《道德經》第二章",
    category: "Taoism",
    imageQuery: "shadow light contrast minimal abstract",
  },
  {
    original: "禍兮福之所倚，福兮禍之所伏。",
    translation:
      "災禍裡倚藏著福分，福分裡也潛伏著災禍。",
    interpretation:
      "事情很少是單一標籤走到黑。失意時留一點希望，得意時留一點清醒，都是為了心理上的彈性。不是宿命論，而是對變化保持心理預留空間。",
    source: "《道德經》第五十八章",
    category: "Taoism",
    imageQuery: "path turn hill unexpected journey",
  },
  {
    original: "治大國若烹小鮮。",
    translation:
      "治理大國要像煎小魚一樣，翻動過多反而碎爛。",
    interpretation:
      "用在個人生活：過度干預、反覆改變計畫、對關係不停「微調」，有時會把原本能自然熟成的東西弄壞。適度放手、信任節奏，反而需要更大的智慧與耐心。",
    source: "《道德經》第六十章",
    category: "Taoism",
    imageQuery: "cooking gentle flame simple kitchen calm",
  },
  {
    original: "天網恢恢，疏而不失。",
    translation:
      "天道如廣大的網，網眼雖疏，卻不會漏失。",
    interpretation:
      "這句話常被理解為因果與長期正義：短期不公可能讓人憤怒，但許多模式拉長看會浮現後果。對自己而言，也是提醒：選擇誠實與善意，常常是最穩健的長期策略。",
    source: "《道德經》第七十三章",
    category: "Taoism",
    imageQuery: "wide sky net stars vast night calm",
  },
  {
    original: "信言不美，美言不信；善者不辯，辯者不善。",
    translation:
      "真實的話不一定好聽，好聽的話未必可信；真正善良的人不愛爭辯，愛爭辯的人未必善良。",
    interpretation:
      "資訊爆炸時代，話術與包裝越來越精緻。願意聽刺耳的真話、對甜言保持一點警覺，是保護自己的方式。內在穩定的人，也比較不需要靠辯贏來證明價值。",
    source: "《道德經》第八十一章",
    category: "Taoism",
    imageQuery: "plain speech honest conversation quiet room",
  },
  {
    original: "天下大事必作於細。",
    translation:
      "天下的大事，必定從細微之處做起。",
    interpretation:
      "與「千里之行始於足下」呼應。當目標巨大到癱瘓行動時，把注意力縮到下一個微小動作：一封訊息、十分鐘、一個小習慣。細節累積，才是多數成就的真相。",
    source: "《道德經》第六十三章",
    category: "Taoism",
    imageQuery: "small seed sprout detail macro growth",
  },
  {
    original: "柔弱勝剛強。",
    translation:
      "柔軟克制剛硬，弱勢勝過強橫。",
    interpretation:
      "硬碰硬往往兩敗俱傷；柔韌、迂迴、等待時機，反而能長期站得住。情緒上也是：愈用力控制，愈反彈；適度柔軟與接納，關係與身心都更有空間。",
    source: "《道德經》第三十六章",
    category: "Taoism",
    imageQuery: "water stone river soft overcomes hard",
  },
  {
    original: "致虛極，守靜篤。",
    translation:
      "心達到極度的虛明，守住深厚的寧靜。",
    interpretation:
      "在刺激過載的日子裡，刻意留一點「什麼都不為了」的空檔，讓神經系統降溫。虛不是空洞，是讓雜念沉澱後，直覺與判斷力重新浮現的空間。",
    source: "《道德經》第十六章",
    category: "Taoism",
    imageQuery: "empty room meditation stillness morning",
  },
  {
    original: "道常無為而無不為。",
    translation:
      "道常常看似無所作為，卻沒有什麼不是它所成就。",
    interpretation:
      "「無為」不是躺平，而是不強行扭曲節律：該休息時不硬撐，該放手時不執著。很多創造與修復，是在鬆開之後自然發生的，而不是愈用力愈有效。",
    source: "《道德經》第三十七章",
    category: "Taoism",
    imageQuery: "river flowing effortless nature path",
  },
  {
    original: "夫唯不爭，故天下莫能與之爭。",
    translation:
      "正因為不與人爭，所以天下沒有人能與他相爭。",
    interpretation:
      "當你不再把每件事都當成零和遊戲，能量會從「防衛與比較」轉向「建設與深耕」。很多時候，退出無謂的爭端，不是認輸，而是把生命投資在更值得的地方。",
    source: "《道德經》第二十二章",
    category: "Taoism",
    imageQuery: "person walking away conflict peaceful path",
  },
  {
    original: "勝人者有力，自勝者強。",
    translation:
      "能勝過別人，算是有力量；能勝過自己的弱點與欲望，才是真正的強者。",
    interpretation:
      "外在勝負帶來的快感很短；能管理衝動、拖延、嫉妒與恐懼，才是每天實際要面對的戰場。自勝不是壓抑，而是帶著覺察做選擇。",
    source: "《道德經》第三十三章",
    category: "Taoism",
    imageQuery: "inner strength discipline morning run willpower",
  },
  {
    original: "慈故能勇，儉故能廣。",
    translation:
      "因為慈愛，所以能勇敢；因為節儉，所以能豐足。",
    interpretation:
      "真正的勇氣常來自在乎——為所愛的人與價值站出來。節儉則讓資源不被虛耗，心與物都有餘裕。兩者加起來，是溫柔而有力量的生活態度。",
    source: "《道德經》第六十七章",
    category: "Taoism",
    imageQuery: "parent child protect warm light courage",
  },
  {
    original: "生而不有，為而不恃，長而不宰。",
    translation:
      "生養萬物而不據為己有，有所作為而不自恃功高，引導成長而不任意主宰。",
    interpretation:
      "在關係與工作中，真正的成熟是：我盡力付出，但不把對方當作品或附屬。愛與領導都一樣，放手讓對方成為他自己，比緊抓控制更能長久。",
    source: "《道德經》第五十一章",
    category: "Taoism",
    imageQuery: "plant growing hands open letting go garden",
  },
  {
    original: "孰能濁以靜之徐清？孰能安以動之徐生？",
    translation:
      "誰能在混濁中安靜下來，讓它慢慢澄清？誰能在安定中帶動生機，讓它慢慢長出來？",
    interpretation:
      "心亂的時候，先求「徐」——不急著立刻變好。給自己一點靜止與睡眠，濁水會漸清；長期停滯時，則需要小幅行動帶動活力。一快一慢之間，是對自己節奏的尊重。",
    source: "《道德經》第十五章",
    category: "Taoism",
    imageQuery: "muddy water settling clear stream patience",
  },

  // —— 《莊子》擴充（二） —— //
  {
    original: "鷦鷯巢於深林，不過一枝；偃鼠飲河，不過滿腹。",
    translation:
      "小鳥在森林裡築巢，所需不過一根樹枝；鼴鼠到河邊喝水，所需不過滿一肚子。",
    interpretation:
      "欲望常常超過真正需要。當你感到「永遠不夠」，不妨問：我追求的是生存品質，還是無止境的比較？很多焦慮在「夠用就好」的認知下會鬆動。",
    source: "《莊子·逍遙遊》",
    category: "Taoism",
    imageQuery: "bird nest single branch forest minimal",
  },
  {
    original: "子非魚，安知魚之樂？",
    translation:
      "你不是魚，怎麼知道魚的快樂？",
    interpretation:
      "這句話提醒我們謙卑地對待他人的主觀經驗：我們很容易用自己的劇本去猜對方。真正的理解，往往來自好奇的提問與耐心的傾聽，而不是武斷的結論。",
    source: "《莊子·秋水》",
    category: "Taoism",
    imageQuery: "fish pond ripple observer bridge calm",
  },
  {
    original: "君子之交淡若水，小人之交甘若醴。",
    translation:
      "君子之間的交情清淡如水，小人之間的交情甜膩如酒醴。",
    interpretation:
      "清淡不是冷漠，而是不靠黏膩與利益捆綁來維繫。長期穩定的關係，多半耐得住平淡與距離；過度甜膩的依附，常常伴隨控制與反噬。",
    source: "《莊子·山木》",
    category: "Taoism",
    imageQuery: "clear water glass friendship simple table",
  },
  {
    original: "井蛙不可以語於海者，拘於虛也。",
    translation:
      "井底之蛙無法與牠談大海，因為牠被所居的空間局限。",
    interpretation:
      "每個人都有自己的「井」：成長環境、同溫層、專業領域。意識到局限，才會保持學習與旅行（實體或心靈上的）的開放。批判別人無知之前，先問自己：我的井口有多大？",
    source: "《莊子·秋水》",
    category: "Taoism",
    imageQuery: "well sky circle limited view perspective",
  },
  {
    original: "夏蟲不可以語於冰者，篤於時也。",
    translation:
      "夏天的蟲無法與牠談冰雪，因為牠被所活的季節限制。",
    interpretation:
      "有些爭論沒有交集，是因為生命經驗與時機完全不同。與其硬要說服，不如承認「此刻我們不在同一個季節」。把力氣留給真正願意對話的人。",
    source: "《莊子·秋水》",
    category: "Taoism",
    imageQuery: "summer winter seasons change abstract",
  },
  {
    original: "大知閑閑，小知閒閒。",
    translation:
      "大智慧寬闊從容，小聰明計較忙碌。",
    interpretation:
      "若你整天被細枝末節的勝負佔滿，很難看見更大的格局。偶爾後退一步問：這件事五年後還重要嗎？把心力留給真正影響長期幸福的選擇。",
    source: "《莊子·齊物論》",
    category: "Taoism",
    imageQuery: "wide horizon person small vast sky",
  },
  {
    original: "今者吾喪我，汝知之乎？",
    translation:
      "此刻我已經放下了那個固執的「我」，你知道嗎？",
    interpretation:
      "「吾喪我」不是自我消失，而是鬆開對小我標籤的緊抓：名聲、面子、一定要怎樣才算成功。當那層硬殼鬆動，心會變得輕盈，比較能聽見真實的需要。",
    source: "《莊子·齊物論》",
    category: "Taoism",
    imageQuery: "mask fallen ground authentic self soft light",
  },
  {
    original: "至樂無樂，至譽無譽。",
    translation:
      "最高的快樂不在於追逐快感本身，最高的名譽也不執著於被讚美。",
    interpretation:
      "若快樂完全繫在刺激與掌聲上，心會像上癮一樣需要越來越強的輸入。更深層的滿足，往往來自內在的安穩與意義感，而不是外在的排行榜。",
    source: "《莊子·至樂》",
    category: "Taoism",
    imageQuery: "quiet joy simple life sunset content",
  },
  {
    original: "得魚忘筌；蹄者所以在兔，得兔而忘蹄。",
    translation:
      "捕到魚就可以忘記捕具；捕兔的網腳用意在兔，捉到兔就不必惦記工具。",
    interpretation:
      "方法與頭銜是過河的船，到岸後不必背著船走。若你執著於手段本身，反而忘記最初想追求的是什麼。定期問自己：我現在堅持的，是目的，還是習慣？",
    source: "《莊子·外物》",
    category: "Taoism",
    imageQuery: "fishing net boat shore leave behind minimal",
  },
  {
    original: "人生天地之間，若白駒之過郤，忽然而已。",
    translation:
      "人在天地之間，就像白色駿馬掠過縫隙，一瞬而過。",
    interpretation:
      "時間感能帶來兩種力量：一是放下執著——沒有什麼丟臉會永遠被記住；二是珍惜當下——想做的事、想說的感謝，別永遠等「以後」。",
    source: "《莊子·知北遊》",
    category: "Taoism",
    imageQuery: "white horse field motion blur time fleeting",
  },
  {
    original: "山木自寇也，膏火自煎也。",
    translation:
      "山裡的好木材因為可貴而招來砍伐；油脂可以照明，卻因此被燃燒殆盡。",
    interpretation:
      "才華與資源若不懂得保護與節制，反而容易引來過度索取與耗損。學會說不、設定界線，不是小氣，而是讓自己長期仍能發光。",
    source: "《莊子·人間世》",
    category: "Taoism",
    imageQuery: "tree forest timber boundary protect",
  },
  {
    original: "墮肢體，黜聰明，離形去知，同於大通，此謂坐忘。",
    translation:
      "放鬆形體的緊繃，放下聰明的算計，離開形骸與成見的束縛，與大道相通，這叫作坐忘。",
    interpretation:
      "現代人可以把它理解成一種深度休息與放下控制：暫時不評判、不優化、不解題，只是存在。當大腦從「一直要表現」的模式切換出來，創傷與疲勞才有空間被身體消化。",
    source: "《莊子·大宗師》",
    category: "Taoism",
    imageQuery: "sitting meditation forget self spacious dark room",
  },

  // —— 《論語》《道德經》《莊子》等擴充（三） —— //
  {
    original: "有朋自遠方來，不亦樂乎？",
    translation:
      "有志同道合的朋友從遠方來相聚，不也是一件很喜悅的事嗎？",
    interpretation:
      "孤獨久了，心會萎縮；被理解與被看見，能滋養人。這句話也在提醒我們主動經營連結——不一定是熱鬧，而是有幾個能談心、能互相打氣的關係。",
    source: "《論語·學而》",
    category: "Confucianism",
    imageQuery: "friends gathering tea home warm evening",
  },
  {
    original: "父母之年，不可不知也。一則以喜，一則以懼。",
    translation:
      "父母的年歲不可以不知道：一方面為他們長壽而喜，一方面也為時光有限而有所警覺。",
    interpretation:
      "這份「懼」不是焦慮，而是珍惜的動力。能相處的具體日子其實不多，問候與陪伴若一直等「有空」，往往就來不及。把感謝說在還能聽見的時候。",
    source: "《論語·里仁》",
    category: "Confucianism",
    imageQuery: "elderly parents family window light gentle",
  },
  {
    original: "父母在，不遠遊，遊必有方。",
    translation:
      "父母在世時不輕易遠行；若必須遠行，也要讓父母知道自己的去向與安排。",
    interpretation:
      "現代人遠行常是工作與理想所需，重點在「有方」：讓在乎你的人安心，不是被控制，而是彼此尊重的責任感。一通電話、一句交代，能減少很多牽掛。",
    source: "《論語·里仁》",
    category: "Confucianism",
    imageQuery: "phone call home distance bridge connection",
  },
  {
    original: "巧言令色，鮮矣仁。",
    translation:
      "花言巧語、裝出和顏悅色，這種人很少是真正有仁德的。",
    interpretation:
      "提醒我們分辨討好與善意：過度包裝的話語往往伴隨目的。誠實的溝通可能不那麼悅耳，長期卻比較能建立信任。",
    source: "《論語·學而》",
    category: "Confucianism",
    imageQuery: "authentic speech honest eyes conversation",
  },
  {
    original: "見利思義，見危授命。",
    translation:
      "看見利益時先想到是否合義；國家危難時能付出性命。",
    interpretation:
      "日常版可以是：這筆錢、這個捷徑、這次推卸，長期會把我變成什麼樣的人？「見利思義」是對未來自己的投票，也是對信任的累積。",
    source: "《論語·憲問》",
    category: "Confucianism",
    imageQuery: "crossroads honest path sunrise",
  },
  {
    original: "道不同，不相為謀。",
    translation:
      "所走的人生道路不同，就不必強求在同一計畫上共事。",
    interpretation:
      "這不是傲慢，而是界線：價值觀與目標差太遠時，硬合作只會內耗。體面地分開或保持距離，有時比勉強維持表面和諧更尊重彼此。",
    source: "《論語·衛靈公》",
    category: "Confucianism",
    imageQuery: "two roads diverge forest peaceful",
  },
  {
    original: "小不忍，則亂大謀。",
    translation:
      "小事不能忍耐，就會壞了大事的佈局。",
    interpretation:
      "情緒一上來就回嘴、封鎖、辭職、拉黑，常常付出超過預期的代價。先降溫十分鐘，問自己：十年後我還會為此刻這樣反應而感謝自己嗎？",
    source: "《論語·衛靈公》",
    category: "Confucianism",
    imageQuery: "pause breath moment calm before action",
  },
  {
    original: "不在其位，不謀其政。",
    translation:
      "不在那個職位上，就不要越權去主導那裡的政務。",
    interpretation:
      "延伸為生活智慧：尊重別人的課題與界線，也保護自己的精力。關心可以，但不要強行替他人的人生負全責；同樣，不必被不相干的人任意評判你的選擇。",
    source: "《論語·泰伯》",
    category: "Confucianism",
    imageQuery: "boundary fence garden respect space",
  },
  {
    original: "知之者不如好之者，好之者不如樂之者。",
    translation:
      "知道它的人，不如喜愛它的人；喜愛它的人，不如以它為樂的人。",
    interpretation:
      "長期能走下去的事，多半靠內在動機。若只剩「應該」而沒有一點樂趣，遲早會枯竭。試著在義務裡找到一小塊你能享受的部分，或誠實換跑道。",
    source: "《論語·雍也》",
    category: "Confucianism",
    imageQuery: "musician painter flow joy creative",
  },
  {
    original: "發憤忘食，樂以忘憂，不知老之將至云爾。",
    translation:
      "用功起來會忘記吃飯，內心喜悅到忘記憂愁，連衰老將近都不覺得。",
    interpretation:
      "這種狀態接近心流：投入一件有意義的事時，時間感改變，焦慮暫退。人生不必永遠如此，但值得為自己保留一兩個能「忘我」的領域。",
    source: "《論語·述而》",
    category: "Confucianism",
    imageQuery: "focused work flow state evening desk",
  },
  {
    original: "德之不修，學之不講，聞義不能徙，不善不能改，是吾憂也。",
    translation:
      "品德不修養，學問不講究，聽見正當的道理却不能遷善，有過不能改，是我最擔心的事。",
    interpretation:
      "孔子憂的不是貧窮，而是停止成長。對照今日：若長期逃避自省、拒絕回饋、把錯都推給環境，心會僵化。願意修、講、徙、改，才是對自己溫柔的負責。",
    source: "《論語·述而》",
    category: "Confucianism",
    imageQuery: "repair pottery kintsugi growth healing",
  },
  {
    original: "後生可畏，焉知來者之不如今也？",
    translation:
      "年輕人值得敬畏，怎知他們將來不如我們這一代呢？",
    interpretation:
      "對年長者是謙卑：世界會被下一代重新定義。對年輕人是鼓勵：時間站在你們這邊，不必用眼前名次定終身。彼此少一點輕視，多一點好奇。",
    source: "《論語·子罕》",
    category: "Confucianism",
    imageQuery: "young people city future sunrise",
  },
  {
    original: "三軍可奪帥也，匹夫不可奪志也。",
    translation:
      "三軍可以奪去主帥，一個普通人卻不能被奪走志向。",
    interpretation:
      "外在可以剝奪你的地位、資源、自由，但「我仍選擇相信什麼、往哪裡走」若還在，尊嚴與內在自由就還在。這是心理韌性最深處的一盞燈。",
    source: "《論語·子罕》",
    category: "Confucianism",
    imageQuery: "single candle dark room hope will",
  },
  {
    original: "君子成人之美，不成人之惡。小人反是。",
    translation:
      "君子成全別人的好事，不助長別人的壞事；小人相反。",
    interpretation:
      "在關係裡問一句：我是在幫對方變好，還是在一起沉淪、一起抱怨、一起逃避？真正的善意有時是溫柔的拒絕，而不是無底線的附和。",
    source: "《論語·顏淵》",
    category: "Confucianism",
    imageQuery: "hand up help someone climb step",
  },
  {
    original: "克己復禮為仁。一日克己復禮，天下歸仁焉。",
    translation:
      "克制私欲、使言行回到禮的節度，就是仁。能如此，天下人都會認同你的仁德。",
    interpretation:
      "「克己」不是自我虐待，而是不被衝動與惰性牽著走；「復禮」可理解為尊重界線與承諾。每天一小步的自我管理，關係與內在秩序會跟著穩定下來。",
    source: "《論語·顏淵》",
    category: "Confucianism",
    imageQuery: "discipline habit morning routine calm",
  },
  {
    original: "過猶不及。",
    translation:
      "過了頭與做得不夠，都是偏失。",
    interpretation:
      "很多煩惱來自「太用力」或「太放任」兩端：太討好、太控制、太放縱、太逃避。中庸不是平庸，而是依情境微調到剛剛好的節奏，這需要覺察與練習。",
    source: "《論語·先進》",
    category: "Confucianism",
    imageQuery: "balance scale goldilocks just right",
  },
  {
    original: "益者三友，損者三友。友直，友諒，友多聞，益矣。",
    translation:
      "有益的朋友有三種，有害的朋友也有三種：與正直、誠信、見聞廣博的人交友，就有益。",
    interpretation:
      "你常相處的人會形塑你的神經系統與價值觀。若身邊只有附和與抱怨，視野會變窄；願意說真話、能談深度、見過世界的人，會溫柔地把你拉向更大格局。",
    source: "《論語·季氏》",
    category: "Confucianism",
    imageQuery: "three friends walking talk honest",
  },
  {
    original: "君子病無能焉，不病人之不己知也。",
    translation:
      "君子擔心自己沒有能力，不擔心別人不了解自己。",
    interpretation:
      "把「被看見」的焦慮轉成「可成長」的焦慮，能量會不同。名聲有時機，實力卻可以每天累積。先問今天我進步了什麼，比追蹤誰按讚更踏實。",
    source: "《論語·衛靈公》",
    category: "Confucianism",
    imageQuery: "skill practice workshop growth focus",
  },
  {
    original: "君子不重則不威，學則不固。",
    translation:
      "君子若不莊重，就難有威儀與可信；所學也容易不堅固。",
    interpretation:
      "「重」可以理解為穩重、認真、言行一致。輕浮的承諾、漂浮的學習，很難建立信任與深度。給自己一點莊重感，不是嚴肅，而是對人生負責的態度。",
    source: "《論語·學而》",
    category: "Confucianism",
    imageQuery: "dignified person library still portrait",
  },

  {
    original: "曲則全，枉則直，窪則盈，敝則新。",
    translation:
      "能曲才能保全，能屈才能再伸；低窪處才能盈滿，舊敝才能更新。",
    interpretation:
      "一味硬撐、硬要面子，常常反而碎裂。願意迂迴、認錯、留白、汰舊換新，長期看反而是完整。柔韌不是軟弱，是為了走更遠。",
    source: "《道德經》第二十二章",
    category: "Taoism",
    imageQuery: "bamboo bend wind flexible strong",
  },
  {
    original: "持而盈之，不如其已。",
    translation:
      "執持盈滿，不如適可而止。",
    interpretation:
      "收入、成就、關係的掌控欲，到了某個點再加碼，代價可能大過收益。學會在「夠好」處停一下，是對身心與關係的慈悲。",
    source: "《道德經》第九章",
    category: "Taoism",
    imageQuery: "cup full tea stop pouring minimal",
  },
  {
    original: "知足者富。",
    translation:
      "內心知足的人，才是富有的人。",
    interpretation:
      "財富數字與主觀富足常常脫鉤。知足不是不努力，而是能欣賞已有、減少無盡比較。當「夠」的感覺出現，焦慮會下降，感恩會上升。",
    source: "《道德經》第三十三章",
    category: "Taoism",
    imageQuery: "simple wealth contentment home cozy",
  },
  {
    original: "禍莫大於不知足；咎莫大於欲得。",
    translation:
      "災禍沒有比不知足更大的；過錯沒有比貪得無厭更大的。",
    interpretation:
      "很多困局不是沒有選擇，而是想要「全部、立刻、完美」。辨識欲望與需要，給欲望設天花板，是成年人保護自己的方式。",
    source: "《道德經》第四十六章",
    category: "Taoism",
    imageQuery: "empty hands open palm letting go",
  },
  {
    original: "我有三寶，持而保之：一曰慈，二曰儉，三曰不敢為天下先。",
    translation:
      "我有三樣寶貝，持守愛護它們：第一是慈愛，第二是儉約，第三是不與人爭先奪利。",
    interpretation:
      "慈讓關係有溫度，儉讓資源可續航，不爭先減少無謂衝突。用在個人生活，就是對自己與他人溫柔一點、欲望收斂一點、謙一點讓路給合作。",
    source: "《道德經》第六十七章",
    category: "Taoism",
    imageQuery: "three stones stack zen balance",
  },
  {
    original: "柔之勝剛，弱之勝強。",
    translation:
      "柔軟能勝過剛硬，弱小能勝過強橫。",
    interpretation:
      "與「柔弱勝剛強」同旨：舌頭比牙齒後掉，水能穿石。關係裡的堅持不必靠音量；長期的誠意與耐心，常勝過一時的強硬。",
    source: "《道德經》第七十六章",
    category: "Taoism",
    imageQuery: "water stone drip persistence soft",
  },
  {
    original: "天下萬物生於有，有生於無。",
    translation:
      "天下萬物從「有」中生出，而「有」又從「無」中生出。",
    interpretation:
      "留白、休息、沉默，看似「無」，卻常常是創意與修復發生之處。把行程塞滿到沒有空隙，反而扼殺了生長需要的空間。",
    source: "《道德經》第四十章",
    category: "Taoism",
    imageQuery: "empty page canvas possibility white space",
  },
  {
    original: "民之從事，常於幾成而敗之。慎終如始，則無敗事。",
    translation:
      "人做事常常在快成功時失敗。慎重的結尾要像開始一樣，就不容易敗事。",
    interpretation:
      "收尾比開頭更考驗耐心：專案最後百分之十、關係最後一句道歉、健康最後一週的堅持。鬆懈往往在最接近終點處，提醒自己慎終如始。",
    source: "《道德經》第六十四章",
    category: "Taoism",
    imageQuery: "finish line marathon last mile focus",
  },
  {
    original: "含德之厚，比於赤子。",
    translation:
      "涵養厚德深厚的人，可比於初生的嬰兒。",
    interpretation:
      "赤子不是幼稚，而是生命力純粹、少算計、對世界仍開放。成年人若能在複雜中仍保留一點真誠與好奇，人際會輕鬆很多。",
    source: "《道德經》第五十五章",
    category: "Taoism",
    imageQuery: "newborn baby soft light innocent",
  },
  {
    original: "反者道之動，弱者道之用。",
    translation:
      "循環往復是道的運行方式，柔弱是道的作用特徵。",
    interpretation:
      "低潮之後可能回升，強勢之後須防轉折。身處逆境時，這句話給希望；身處順境時，給警醒。柔軟的應對，常比硬扛更符合長期生存。",
    source: "《道德經》第四十章",
    category: "Taoism",
    imageQuery: "tide wave cycle moon phases calm",
  },
  {
    original: "大音希聲，大象無形。",
    translation:
      "最大的聲音聽起來反而稀疏，最大的形象反而看不見具體形狀。",
    interpretation:
      "真正深刻的影響往往安靜：長期的身教、穩定的在場、無聲的支持。若你總在追求戲劇化的證明，可能錯過了那些沈默卻真實的連結。",
    source: "《道德經》第四十一章",
    category: "Taoism",
    imageQuery: "silence vast sky invisible presence",
  },
  {
    original: "天道無親，常與善人。",
    translation:
      "天道沒有偏私，卻常常幫助行善的人。",
    interpretation:
      "「善人」可理解為順應誠實、節制、慈愛的人。長期下來，善意與可靠會累積信任與機會，未必是迷信報應，而是系統的自然回饋。",
    source: "《道德經》第七十九章",
    category: "Taoism",
    imageQuery: "kindness ripple water circles gentle",
  },

  {
    original: "臣之所好者道也，進乎技矣。",
    translation:
      "我所追求的是道，已經超越單純的技巧了。",
    interpretation:
      "庖丁解牛的精神：當你把一件事做到通透，技術會內化成直覺與節奏，不再只是機械重複。工作與技藝上，值得問：我是在堆技巧，還是在接近自己的「道」？",
    source: "《莊子·養生主》",
    category: "Taoism",
    imageQuery: "chef knife flow kitchen mastery calm",
  },
  {
    original: "昔者莊周夢為胡蝶，栩栩然胡蝶也，自喻適志與！不知周之夢為胡蝶與，胡蝶之夢為周與？",
    translation:
      "從前莊周夢見自己變成蝴蝶，翩翩飛舞，十分快意，不知道是人夢見蝴蝶，還是蝴蝶夢見人。",
    interpretation:
      "這則寓言鬆動「我與現實」的絕對感：有些執著在醒來後會顯得可笑。不是否定認真生活，而是多一點幽默與彈性，痛苦就不那麼鐵板一塊。",
    source: "《莊子·齊物論》",
    category: "Taoism",
    imageQuery: "butterfly dream surreal soft focus nature",
  },
  {
    original: "魚相忘於江湖，人相忘於道術。",
    translation:
      "魚在江湖里彼此忘記，人在大道中也能超越執著而相忘。",
    interpretation:
      "與「相忘於江湖」呼應：關係的最高境界不一定是黏膩，而是在更大的自由與成長裡各自安好。執著於被記得、被虧欠，心會很累。",
    source: "《莊子·大宗師》",
    category: "Taoism",
    imageQuery: "fish ocean wide blue freedom depth",
  },
  {
    original: "至人之用心若鏡，不將不迎，應而不藏。",
    translation:
      "境界高的人的用心像鏡子：不強行追隨已去的，不預先迎合未來的，如實反映當下而不把情緒囤積在心裡。",
    interpretation:
      "心理學上接近「觀察而不認同」：事情發生，你感受它、命名它，但不把每一筆都變成自我攻擊或劇本。鏡子照完就空，心也比較不累。",
    source: "《莊子·應帝王》",
    category: "Taoism",
    imageQuery: "mirror lake reflection clear mountain",
  },
  {
    original: "哀莫大於心死，而人死亦次之。",
    translation:
      "最大的悲哀莫過於心死，身體的死亡還在其次。",
    interpretation:
      "當一個人對美、對愛、對好奇不再有感覺，活著也像缺席。若你覺得心麻木了，值得當成警訊：尋求連結、專業協助或小步重啟興趣，都是在救「心」。",
    source: "《莊子·田子方》",
    category: "Taoism",
    imageQuery: "wilted flower revive water drop hope",
  },
  {
    original: "真者，精誠之至也。不精不誠，不能動人。",
    translation:
      "真，是精誠到極點；不精不誠，就無法打動人。",
    interpretation:
      "套路與話術短期有效，長期還是靠真誠。人對「是否真心」很敏感。願意脆弱一點、誠實一點，關係反而有穿透力。",
    source: "《莊子·漁父》",
    category: "Taoism",
    imageQuery: "sincere eyes conversation candle warm",
  },

  {
    original: "惻隱之心，仁之端也；羞惡之心，義之端也。",
    translation:
      "同情心是仁的開端，羞恥與厭惡不義是義的開端。",
    interpretation:
      "孟子相信道德情感有根：你不是靠硬背規則才善良，而是本就能被別人的苦所觸動。照顧好這份惻隱，不被冷漠與嘲諷磨光，是人性裡很珍貴的部分。",
    source: "《孟子·公孫丑上》",
    category: "Confucianism",
    imageQuery: "hand on heart compassion empathy soft",
  },
  {
    original: "學問之道無他，求其放心而已矣。",
    translation:
      "做學問沒有別的，就是把放失的心找回來而已。",
    interpretation:
      "心常被手機、焦慮、比較帶走。所謂修養，很大一部分是覺察走神、溫柔地把注意力帶回當下。每天幾分鐘的專注，就是在「求放心」。",
    source: "《孟子·告子上》",
    category: "Confucianism",
    imageQuery: "breath meditation return present moment",
  },
  {
    original: "盡其心者，知其性也。知其性，則知天矣。",
    translation:
      "能窮盡自己的本心，就了解自己的本性；了解本性，就通於天。",
    interpretation:
      "現代可讀成：深度自我覸察會帶來價值觀的清晰，而不再隨波逐流。你愈誠實面對自己想要什麼、怕什麼，愈能做出不後悔的選擇。",
    source: "《孟子·盡心上》",
    category: "Confucianism",
    imageQuery: "inner light self knowledge quiet room",
  },
  {
    original: "天將降大任於是人也，必先苦其心志，勞其筋骨，餓其體膚，空乏其身，行拂亂其所為。",
    translation:
      "上天要交付重大責任給某人，一定先讓他內心受苦、筋骨勞累、身體飢餓、資源匱乏，所行不如意，以此鍛鍊他。",
    interpretation:
      "這不是美化苦難，而是描述一種常見的成長路徑：韌性與格局常在壓力中長出。若你正在艱難裡，可以問：這段經歷在要求我長出什麼能力？而不是「為什麼偏偏是我」單迴圈。",
    source: "《孟子·告子下》",
    category: "Confucianism",
    imageQuery: "mountain climb storm resilience path",
  },

  {
    original: "苟日新，日日新，又日新。",
    translation:
      "若能一天新，就應天天新，再進一步，一直新下去。",
    interpretation:
      "與其追求一次巨變，不如容許自己每天微小更新：一個習慣、一句道歉、一個新嘗試。累積的「新」會帶來活著的感覺，而不是停滯感。",
    source: "《大學》",
    category: "Confucianism",
    imageQuery: "sunrise new day journal fresh start",
  },
  {
    original: "自天子以至於庶人，壹是皆以修身為本。",
    translation:
      "從天子到百姓，一律都以修養自身為根本。",
    interpretation:
      "外在角色不論高低，內在功課類似：情緒、誠實、界線、責任。把「修身」當成本業，其他成就比較不會變成空心。",
    source: "《大學》",
    category: "Confucianism",
    imageQuery: "foundation stone building person growth",
  },

  {
    original: "應無所住，而生其心。",
    translation:
      "心不黏著於任何固定對象，而生起清明、慈悲與智慧。",
    interpretation:
      "執著於標籤、成敗、過去與未來，心就被「住」滿了。練習覺察念頭來去而不跟著跑，會出現較大的內在空間，應對變化也比較不狼狽。",
    source: "《金剛經》",
    category: "Buddhism",
    imageQuery: "lotus water ripple open heart light",
  },

  // —— 《孫子兵法》 Art of War —— //
  {
    original: "知彼知己，百戰不殆。",
    translation:
      "了解對方也了解自己，即使歷經許多挑戰也不容易陷入真正的危局。",
    interpretation:
      "用在生活裡，就是同時看清「外在處境」與「自己的限度與資源」。只盯著別人會焦慮，只盯著自己會脫節；兩邊都照見，決策才穩，也比較不會被一時情緒牽著走。",
    source: "《孫子兵法·謀攻篇》",
    category: "Art of War",
    imageQuery: "chess board strategy calm light reflection",
  },
  {
    original: "兵者，詭道也。",
    translation:
      "用兵之道，在於變化與權謀，而不是一成不變的套路。",
    interpretation:
      "這句常被誤解成「耍心機」，其實更接近：情境變了，做法就要跟著調整。固執於單一腳本的人，最容易在現實碰壁；願意觀察、試錯、換策略的人，韌性會強很多。",
    source: "《孫子兵法·始計篇》",
    category: "Art of War",
    imageQuery: "mist path fork decision calm landscape",
  },
  {
    original: "不戰而屈人之兵，善之善者也。",
    translation:
      "不必正面衝突就能讓對方無法為害，才是最高明的勝法。",
    interpretation:
      "在人際與職場上，「贏」不一定是壓過對方，有時是化解張力、建立共識、讓局面自然往好的方向走。省下對抗的力氣，把資源用在建設上，長期往往更划算。",
    source: "《孫子兵法·謀攻篇》",
    category: "Art of War",
    imageQuery: "handshake peace negotiation window light",
  },
  {
    original: "上兵伐謀，其次伐交，其次伐兵，其下攻城。",
    translation:
      "最高明的是破壞對方的計謀，其次是瓦解其聯盟，再來才是動武，最下策是硬攻城池。",
    interpretation:
      "對應到日常，就是先調整認知與佈局（為何會卡住），再處理關係與溝通，最後才動用硬碰硬的手段。一上來就撕破臉，常常是力氣花最多、修復成本也最大的一條路。",
    source: "《孫子兵法·謀攻篇》",
    category: "Art of War",
    imageQuery: "planning whiteboard strategy meeting calm",
  },
  {
    original: "勝兵先勝而後求戰，敗兵先戰而後求勝。",
    translation:
      "常勝的一方是先確立可勝之勢，再投入戰鬥；常敗的一方是莽撞開打，才指望僥倖取勝。",
    interpretation:
      "呼應現代所說的「準備度」。心裡若還沒想清楚資源、底線與退路，就急著攤牌或承諾，壓力會很大。先把自己能站穩的那一步做好，再出手，焦慮會少很多。",
    source: "《孫子兵法·形篇》",
    category: "Art of War",
    imageQuery: "athlete preparation stretching focus morning",
  },
  {
    original: "昔之善戰者，先為不可勝，以待敵之可勝。",
    translation:
      "古代善戰的人，先讓自己立於不敗之地，再等待對方露出可乘之機。",
    interpretation:
      "這是一種很務實的耐心：先照顧好睡眠、健康、界線與基本功，讓自己不要輕易崩盤；當機會來了，才有餘力抓住。急著「逆轉」之前，先問自己：我的底盤穩了嗎？",
    source: "《孫子兵法·形篇》",
    category: "Art of War",
    imageQuery: "solid foundation building blocks calm",
  },
  {
    original: "善戰者，求之於勢，不責於人。",
    translation:
      "善於作戰的人，懂得順勢而為，而不是一味苛責部屬。",
    interpretation:
      "若把失敗全怪在某個人身上，容易錯過結構性的問題。調整環境、流程與時機（勢），往往比反覆指責性格更有效。對自己亦然：與其咒罵意志力，不如設計更容易做好的情境。",
    source: "《孫子兵法·勢篇》",
    category: "Art of War",
    imageQuery: "river flow direction natural current",
  },
  {
    original: "其疾如風，其徐如林，侵掠如火，不動如山，難知如陰，動如雷震。",
    translation:
      "行動時迅疾如風，整肅時沉穩如林，進取時猛烈如火，守備時穩固如山，隱藏時深不可測如陰影，出擊時如雷鳴般果斷。",
    interpretation:
      "這組意象提醒我們：不同階段需要不同節奏。該快時不拖泥帶水，該慢時能沉住氣；該堅守時不輕易動搖，該出手時不猶豫。心理上也一樣——覺察當下需要的是衝刺還是休整。",
    source: "《孫子兵法·軍爭篇》",
    category: "Art of War",
    imageQuery: "mountain forest wind fire storm calm contrast",
  },
  {
    original: "兵聞拙速，未睹巧之久也。",
    translation:
      "用兵寧可顯得笨拙也要爭取速決，沒聽說過為了精巧而久拖不決能有好結果的。",
    interpretation:
      "完美主義與過度打磨，有時只是拖延的藉口。在許多事情上，先做出可用的版本、盡快進入回饋循環，比空想一個「終極方案」更能降低焦慮。巧要巧在關鍵處，而不是無止境的雕琢。",
    source: "《孫子兵法·作戰篇》",
    category: "Art of War",
    imageQuery: "stopwatch simple action minimal desk",
  },
  {
    original: "投之亡地然後存，陷之死地然後生。",
    translation:
      "把人置於看似無路可退之地，反而能激發出生路；陷入絕境般的處境，反而可能轉出生機。",
    interpretation:
      "這不是鼓吹自找麻煩，而是描述人在壓力下的潛能：當退路被心智封死時，有時會爆發出意想不到的專注與創意。日常裡，適度限縮選項（例如設定截止日、公開承諾），反而能終結拖延。",
    source: "《孫子兵法·九地篇》",
    category: "Art of War",
    imageQuery: "narrow path cliff dawn hope light",
  },
  {
    original: "將在外，君命有所不受。",
    translation:
      "大將身在遠方戰場，若事事等候君命，可能貽誤戰機，因此在特定情境下可以不接受遙控指揮。",
    interpretation:
      "在高度不確定的現場，過度中央集權會害死人。授權與信任，讓第一線的人依實況做判斷，往往比層層請示更有效。用在個人生活上，也是：別人的期待很重要，但你最清楚當下該不該轉彎。",
    source: "《孫子兵法·九變篇》",
    category: "Art of War",
    imageQuery: "lone figure horizon responsibility calm",
  },
  {
    original: "主不可以怒而興師，將不可以慍而致戰。",
    translation:
      "君主不可因一時憤怒而發動戰爭，將帥不可因一時怨懟而貿然開戰。",
    interpretation:
      "情緒高點做的重大決定，事後往往最難收拾。孫子提醒我們在觸發「戰」之前先降溫——無論是爭執、離職、斷聯或重大承諾。等怒氣與委屈略為沉降，再問：這一步符合長期利益嗎？",
    source: "《孫子兵法·火攻篇》",
    category: "Art of War",
    imageQuery: "calm water after storm evening peace",
  },
  {
    original: "凡戰者，以正合，以奇勝。",
    translation:
      "用兵作戰，以正兵交鋒，以奇兵取勝。",
    interpretation:
      "生活裡「正」是原則與基本功，「奇」是創意與時機。只靠小聰明走捷徑，底子會空；只會硬拼不懂變通，會耗竭。兩者交替，才較可持續。",
    source: "《孫子兵法·勢篇》",
    category: "Art of War",
    imageQuery: "chess knight surprise strategy board",
  },
  {
    original: "兵者，國之大事，死生之地，存亡之道，不可不察也。",
    translation:
      "戰爭是國家大事，是生死存亡之所繫，不可以不慎重省察。",
    interpretation:
      "對個人而言，重大決定（轉職、結婚、遷移、決裂）也值得同樣的慎重：情報是否足夠？情緒是否已降溫？後果能否承擔？「察」不是膽小，是對自己負責。",
    source: "《孫子兵法·始計篇》",
    category: "Art of War",
    imageQuery: "crossroads night thoughtful person city",
  },
  {
    original: "致人而不致於人。",
    translation:
      "善於作戰的人，能調動對方、掌握主動，而不被對方牽著鼻子走。",
    interpretation:
      "用在生活與工作上，就是盡量讓自己選戰場與節奏：先想清楚目標與底線，再決定是否接招，而不是被別人的情緒、期限或話題帶著跑。主動不是強勢，而是對自己時間與注意力有主權。",
    source: "《孫子兵法·虛實篇》",
    category: "Art of War",
    imageQuery: "chess board initiative move first calm strategy",
  },
];

// 最近已展示過的經文索引，用來避免短期內重複（條目變多後略為提高緩衝）
const RECENT_ENTRY_LIMIT = 18;
const recentEntryIndices = [];

function pickRandomEntry(list) {
  if (!Array.isArray(list) || list.length === 0) return null;

  // 經文總數較少時，直接隨機即可
  if (list.length <= RECENT_ENTRY_LIMIT) {
    const index = Math.floor(Math.random() * list.length);
    return list[index];
  }

  let index;
  let attempts = 0;

  // 儘量避免抽到最近展示過的幾條
  do {
    index = Math.floor(Math.random() * list.length);
    attempts += 1;
  } while (recentEntryIndices.includes(index) && attempts < 20);

  recentEntryIndices.push(index);
  if (recentEntryIndices.length > RECENT_ENTRY_LIMIT) {
    recentEntryIndices.shift();
  }

  return list[index];
}

const LAYOUT_CLASSES = ["layout-left", "layout-right", "layout-bottom"];

function pickRandomLayout() {
  const i = Math.floor(Math.random() * LAYOUT_CLASSES.length);
  return LAYOUT_CLASSES[i];
}

function applyLayout(container, layoutClass) {
  if (!container) return;
  LAYOUT_CLASSES.forEach((c) => container.classList.remove(c));
  container.classList.add(layoutClass);
}

// ---- Unsplash 背景圖邏輯 ----

const UNSPLASH_ACCESS_KEY = "fbNy8AUtpi9YlI2t5cbtlcXTRBqS7DHF08cXdzDhGcQ";
const UNSPLASH_CACHE = {};

async function fetchUnsplashPhotoUrl(query) {
  // 基本保險：如果沒設 query，就退回一個通用關鍵詞
  const fallbackQuery = "zen nature ink wash";
  const finalQuery = query && query.trim() ? query : fallbackQuery;

  // 如果之前已經為這個關鍵詞拿過一張圖，就直接用快取，加快後續顯示速度
  if (UNSPLASH_CACHE[finalQuery]) {
    return UNSPLASH_CACHE[finalQuery];
  }

  const url = new URL("https://api.unsplash.com/search/photos");
  url.searchParams.set("query", finalQuery);
  url.searchParams.set("orientation", "landscape");
  url.searchParams.set("per_page", "20");
  url.searchParams.set("content_filter", "high");
  url.searchParams.set("client_id", UNSPLASH_ACCESS_KEY);

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error("Unsplash API error: " + response.status);
  }

  const data = await response.json();
  if (!data.results || data.results.length === 0) {
    throw new Error("Unsplash API: no results");
  }

  const randomIndex = Math.floor(Math.random() * data.results.length);
  const photo = data.results[randomIndex];

  // 優先使用 raw，加上高解析度與品質參數，讓背景更銳利
  if (photo.urls && photo.urls.raw) {
    const rawUrl = new URL(photo.urls.raw);
    rawUrl.searchParams.set("w", "2560");
    rawUrl.searchParams.set("h", "1440");
    rawUrl.searchParams.set("fit", "cover");
    rawUrl.searchParams.set("q", "90");
    const builtUrl = rawUrl.toString();
    UNSPLASH_CACHE[finalQuery] = builtUrl;
    return builtUrl;
  }

  // 退回 full 或 regular 作為保險
  if (photo.urls && photo.urls.full) {
    UNSPLASH_CACHE[finalQuery] = photo.urls.full;
    return photo.urls.full;
  }
  UNSPLASH_CACHE[finalQuery] = photo.urls.regular;
  return photo.urls.regular;
}

async function updateBackgroundForEntry(entry) {
  const bgEl = document.querySelector(".zen-background");
  if (!bgEl) return;

  // 優先順序：entry.imageQuery > entry.category > 通用關鍵詞
  const baseQuery = entry && entry.imageQuery
    ? entry.imageQuery
    : entry && entry.category
      ? `${entry.category} zen`
      : null;

  try {
    const imageUrl = await fetchUnsplashPhotoUrl(baseQuery);
    // 先用 Image 對象預加載，確保新圖準備好後再切換，避免中途空白
    const img = new Image();
    img.onload = () => {
      bgEl.style.backgroundImage = `url("${imageUrl}")`;
      requestAnimationFrame(() => {
        bgEl.style.opacity = "1";
      });
    };
    img.onerror = () => {
      console.error("Preload Unsplash image failed, fallback to picsum.");
      bgEl.style.backgroundImage = 'url("https://picsum.photos/1920/1080?random")';
    };
    img.src = imageUrl;
  } catch (error) {
    // 失敗時退回原本的 picsum 隨機圖，保證永遠有畫面
    console.error(error);
    bgEl.style.backgroundImage = 'url("https://picsum.photos/1920/1080?random")';
  }
}

function renderEntry(entry) {
  if (!entry) return;

  const container = document.getElementById("zen-container");
  const originalEl = document.getElementById("entry-original");
  const translationEl = document.getElementById("entry-translation");
  const interpretationEl = document.getElementById("entry-interpretation");
  const categoryEl = document.getElementById("entry-category");
  const sourceEl = document.getElementById("entry-source");

  if (!container || !originalEl || !translationEl || !interpretationEl || !categoryEl || !sourceEl) {
    return;
  }

  applyLayout(container, pickRandomLayout());

  originalEl.textContent = entry.original;
  translationEl.textContent = entry.translation;
  interpretationEl.textContent = entry.interpretation;
  categoryEl.textContent = entry.category;
  sourceEl.textContent = entry.source;

  // 根據當前經文動態更新背景圖
  updateBackgroundForEntry(entry);
}

document.addEventListener("DOMContentLoaded", () => {
  const entry = pickRandomEntry(entries);
  renderEntry(entry);
});

