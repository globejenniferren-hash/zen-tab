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
];

// 最近已展示過的經文索引，用來避免短期內重複
const RECENT_ENTRY_LIMIT = 5;
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

