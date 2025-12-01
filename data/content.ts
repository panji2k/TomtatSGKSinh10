import { SummaryData, TextbookSection, ExampleItem } from '../types';

interface ChapterContent {
  summary: SummaryData;
  textbook: TextbookSection[];
  examples: ExampleItem[];
}

export const staticContent: Record<string, ChapterContent> = {
  // =================================================================
  // PHẦN MỞ ĐẦU
  // =================================================================
  'bai1': {
    summary: {
      intro: "Sinh học là khoa học về sự sống, nghiên cứu các cấp độ tổ chức của thế giới sống, từ phân tử, tế bào đến cơ thể, quần thể và hệ sinh thái. Môn học này giúp chúng ta hiểu rõ bản chất của sự sống và vai trò của sinh vật trong tự nhiên.",
      coreKnowledge: [
        { title: "Đối tượng của Sinh học", content: "Nghiên cứu cấu trúc và chức năng của các cấp độ tổ chức sống (tế bào, cơ thể, quần thể, quần xã, hệ sinh thái).", emoji: "🔬" },
        { title: "Vai trò của Sinh học", content: "Cung cấp kiến thức nền tảng để ứng dụng vào y học, nông nghiệp, công nghệ thực phẩm, bảo vệ môi trường.", emoji: "🌍" },
        { title: "Phát triển bền vững", content: "Sinh học cung cấp cơ sở khoa học để khai thác tài nguyên hợp lí, bảo vệ đa dạng sinh học và môi trường.", emoji: "🌱" },
        { title: "Các ngành nghề", content: "Sinh học là nền tảng của nhiều ngành nghề quan trọng như y, dược, nông nghiệp công nghệ cao, công nghệ sinh học, pháp y.", emoji: "🧬" }
      ],
      vocabulary: [
        { term: "Thế giới sống", definition: "Bao gồm toàn bộ sinh vật sống trên Trái Đất, được tổ chức theo các cấp độ khác nhau." },
        { term: "Phát triển bền vững", definition: "Sự phát triển đáp ứng nhu cầu của thế hệ hiện tại mà không làm tổn hại đến khả năng đáp ứng nhu cầu của các thế hệ tương lai." },
        { term: "Sinh học hệ thống", definition: "Ngành sinh học kết hợp sinh học, toán học và tin học để nghiên cứu các hệ thống sinh học phức tạp." }
      ]
    },
    examples: [
      { title: "Ứng dụng trong Y học", scenario: "Sản xuất vaccine mRNA phòng bệnh COVID-19.", explanation: "Hiểu biết về cấu trúc của virus và cơ chế di truyền ở cấp độ phân tử cho phép các nhà khoa học tạo ra vaccine hiệu quả trong thời gian ngắn.", emoji: "💉" },
      { title: "Ứng dụng trong Nông nghiệp", scenario: "Tạo ra các giống cây trồng biến đổi gen có khả năng kháng sâu bệnh, chịu hạn, cho năng suất cao.", explanation: "Kiến thức về di truyền học và sinh học phân tử giúp cải tiến bộ gen của cây trồng.", emoji: "🌽" },
      { title: "Bảo vệ môi trường", scenario: "Sử dụng vi khuẩn Shewanella oneidensis để sản xuất năng lượng điện từ các chất thải hữu cơ.", explanation: "Nghiên cứu về vi sinh vật giúp khai thác khả năng chuyển hóa vật chất của chúng để xử lý ô nhiễm và tạo ra năng lượng sạch.", emoji: "♻️" }
    ],
    textbook: [
      {
        header: "I. SINH HỌC VÀ CÁC LĨNH VỰC CỦA SINH HỌC",
        subsections: [
          { title: "1. Khái niệm và đối tượng của sinh học", content: "Sinh học là ngành khoa học nghiên cứu về sự sống. Vì vậy, đối tượng của sinh học chính là các sinh vật cùng các cấp độ tổ chức của thế giới sống." },
          { title: "2. Mục tiêu của sinh học", content: "Mục tiêu của sinh học là tìm hiểu cấu trúc và sự vận hành của các quá trình sống ở các cấp độ tổ chức của sự sống, qua đó, con người có thể điều khiển, tối ưu hoá được nguồn tài nguyên sinh học cũng như phi sinh học, phục vụ cho sự phát triển của xã hội loài người một cách bền vững." },
          { title: "3. Các lĩnh vực nghiên cứu của sinh học", content: "Các lĩnh vực nghiên cứu của sinh học có thể chia thành hai loại chính là nghiên cứu cơ bản và nghiên cứu ứng dụng. Lĩnh vực nghiên cứu cơ bản tập trung vào việc tìm hiểu cấu trúc của các cấp độ tổ chức sống, phân loại, các thực vận và tiến hoá của thế giới sống.\nLĩnh vực nghiên cứu ứng dụng khám phá thế giới sống tìm cách đưa những phát kiến mới về sinh học ứng dụng vào thực tiễn đời sống. Hai lĩnh vực này ngày càng giao thoa với nhau, nhiều nghiên cứu cơ bản trong sinh học kết hợp với các ngành khoa học khác nhau và với sự phát triển của các ngành công nghệ đã và đang đưa các thành tựu sinh học vào thực tiễn đời sống. Ở góc độ môn học trong Chương trình Giáo dục phổ thông, chúng ta sẽ lần lượt nghiên cứu các lĩnh vực theo các phân chia dựa trên các cấp độ tổ chức của thế giới sống. Lớp 10 tìm hiểu về sinh học tế bào và thế giới vi sinh vật; lớp 11 nghiên cứu sinh học cơ thể; lớp 12 nghiên cứu di truyền học, tiến hoá và sinh thái học." },
          { title: "4. Vai trò của sinh học", content: "Có lẽ không có ngành khoa học nào lại liên quan đến mọi mặt đời sống xã hội của con người như sinh học. Những hiểu biết về sinh học, đặc biệt về thế giới vi sinh vật trong nhiều thập kỉ qua đã giúp giảm tỉ lệ bệnh tật, gia tăng đáng kể tuổi thọ của con người qua sự cải thiện điều kiện vệ sinh, chăm sóc sức khoẻ và điều trị bệnh. Những phát hiện về giá trị dinh dưỡng của các loại thực phẩm, các hoạt chất có khả năng chữa bệnh từ các sinh vật trong tự nhiên, không chỉ giúp chúng ta có cuộc sống mạnh khoẻ hơn mà còn biết tôn trọng, yêu quý và gìn giữ sự đa dạng của sinh giới.\nVai trò của sinh học vô cùng đa dạng và to lớn, nó không chỉ giúp con người khoẻ mạnh hơn, sống lâu hơn mà còn tác động vào đời sống học tập, đời sống tinh thần hằng ngày của con người. Hãy thử tưởng tượng xem, kết quả học tập của chúng ta có sự đóng góp của sinh học hay không? Nếu có sự hiểu biết về sinh lí học của trí nhớ, chúng ta có thể cải thiện kết quả học tập của mình một cách đáng kể. Bạn có sự hưng phấn trong trí óc, biết tuân thủ các nguyên lí lưu trữ thông tin của bộ não và với sự quyết tâm cao thì kết quả học tập chắc chắn sẽ có sự tiến bộ đáng kể. Các em hãy khám phá thêm sinh học còn có những vai trò gì trong cuộc sống của chúng ta." },
          { title: "5. Sinh học trong tương lai", content: "Sự kết hợp của ngành sinh học với hoá học, tin học, toán học và vật lí đang hình thành nên một ngành mới được gọi là sinh học hệ thống. Một trong những ứng dụng của sinh học hệ thống trong nghiên cứu của sinh học phân tử đem lại giá trị ứng dụng cao trong y – dược là sản xuất thuốc chữa bệnh. Ví dụ: Hàng nghìn loại protein trong tế bào tương tác với nhau duy trì sự sống theo cách vô cùng phức tạp, các nhà khoa học cũng phối hợp dùng phần mềm tin học chuyên dụng để mô tả kiểu tương tác giữa các protein, từ đó có thể dự đoán được nếu một protein nào bị đột biến, mất chức năng thì hậu quả sẽ ra sao, đặc điểm bệnh lí nào sẽ xuất hiện. Nhờ vậy, việc thử một loại thuốc sẽ được kiểm nghiệm nhanh chóng trên mô hình máy tính trước khi đưa vào thử nghiệm trên động vật.\nKết quả thử nghiệm thuốc trên động vật vào cơ sở dữ liệu để điều chỉnh cho đến khi tìm được mô hình tối ưu. Nhờ đó, có thể sản xuất được thuốc đặc hiệu điều trị các chứng bệnh (được gọi là thuốc hướng đích). Việc sản xuất thuốc hướng đích sẽ diễn ra nhanh hơn. Thành tựu mới nhất trong việc sản xuất vaccine mRNA là một ví dụ. Giải trình tự hệ gene của SARS – CoV – 2 giúp các nhà khoa học tìm ra trình tự nucleotide của gene quy định gai protein của virus. Từ đó có thể tổng hợp nên mRNA nhân tạo quy định gai protein của virus, sau đó bao bọc chúng trong màng phospholipids rồi tiêm vào người để tế bào người tạo ra protein gai của virus. Nhờ vậy, hệ thống miễn dịch được kích hoạt tạo ra kháng thể chống lại virus. Loại vaccine mới này đã được sản xuất thành công trong một thời gian ngắn." }
        ]
      },
      {
        header: "II. CÁC NGÀNH NGHỀ LIÊN QUAN ĐẾN SINH HỌC",
        subsections: [
          { title: "1. Sinh học và các ngành y – dược học", content: "Thành tựu trong giải trình tự hệ gene người và nhiều loài sinh vật khác nhau trong thời gian gần đây đã giúp con người sản xuất ra nhiều loại thuốc được gọi là thuốc hướng đích, các loại thuốc này tác động tới những loại protein riêng biệt để chữa các bệnh hiểm nghèo như ung thư.\nY học đang hướng đến cá thể hoá việc chăm sóc sức khoẻ và chữa trị bệnh tật. Các loại thuốc hướng đích ở cấp độ nano có thể tự tìm đến các tế bào đích, tương tác đặc hiệu với các phân tử trong tế bào bị bệnh, giúp giảm đáng kể tác động không mong muốn ở nhiều loại thuốc." },
          { title: "2. Sinh học và ngành pháp y", content: "Từ sợi tóc, vết máu hay các tế bào khác nhau để lại trên hiện trường của vụ án, các nhân viên điều tra có thể truy tìm ra chủ nhân của chúng thông qua việc giải trình tự DNA. Những trình tự nucleotide đặc biệt có thể giúp nhận diện từng cá thể cũng như dấu vân tay của mỗi người nên được gọi là dấu vân tay DNA. Nhờ dấu vân tay DNA chúng ta có thể xác định được nhân thân của những nạn nhân trong các vụ tai nạn và xác định được quan hệ huyết thống. Trong tương lai, dấu vân tay DNA cũng có thể được dùng thay dấu vân tay trong thẻ căn cước công dân hiện nay." },
          { title: "3. Sinh học và các ngành nông – lâm – ngư nghiệp", content: "Từ xa xưa, những hiểu biết về các đặc điểm sinh học của vật nuôi, cây trồng đã giúp con người tạo ra những giống vật nuôi, cây trồng có năng suất, chất lượng cao, giúp hiệu quả chăn nuôi và trồng trọt tăng lên rõ rệt.\nCông nghệ di truyền trong thời gian gần đây và trong tương lai còn giúp các nhà sinh học có thể chuyển gene từ loài này sang loài khác hoặc biến đổi gene của một loài sinh vật, tạo ra những sinh vật chuyển gene hay còn gọi là biến đổi gene theo nhu cầu của con người. Sinh vật biến đổi gene có thể đem lại năng suất cao, chất lượng tốt hoặc giá trị chữa bệnh với giá thành rẻ. Trong lâm nghiệp, những giống cây lâu năm có giá trị cao nếu được nhân giống vô tính mà không cần phải mất nhiều thời gian chờ cây sinh trưởng, ra hoa kết trái. Các giống cây chống chịu virus cũng có thể được nhân giống bằng biện pháp nuôi cấy mô (H 1.1)." },
          { title: "4. Sinh học và công nghệ thực phẩm", content: "Không chỉ giúp tạo ra sản phẩm làm thức ăn, thuốc chữa bệnh, nghiên cứu sinh học còn giúp ngành công nghệ chế biến thực phẩm sản xuất ra nhiều loại thức ăn, nước uống có giá trị dinh dưỡng cao như sữa chua và các sản phẩm của quá trình lên men khác, đáp ứng được nhu cầu rất đa dạng của con người ở mọi lứa tuổi.\nNhững hiểu biết về vi sinh vật, hô hấp tế bào còn giúp con người có được các biện pháp bảo quản thực phẩm lâu dài mà vẫn đảm bảo chất lượng." },
          { title: "5. Sinh học và vấn đề bảo vệ môi trường", content: "Việc giải trình tự hệ gene của nhiều loài vi sinh vật đã mở ra những tiềm năng ứng dụng vi sinh vật trong giải quyết các vấn đề về môi trường và năng lượng. Ví dụ: Loài Deinococcus radiodurans là vi khuẩn chống chịu được phóng xạ tốt nhất được biết đến. Sinh vật này có thể giúp chúng ta làm sạch các địa điểm bị ô nhiễm phóng xạ và các hoá chất độc hại. Nghiên cứu hệ gene của các loài vi sinh vật sử dụng CO₂ làm nguồn carbon, duy nhất một số giúp làm giảm lượng CO₂ trong khí quyển. Ví dụ: khuẩn Chlorobium tepidum có khả năng sản sinh ra năng lượng từ ánh sáng. Một số vi khuẩn khác như Shewanella oneidensis (H 1.2) không chỉ hữu ích trong việc làm sạch nước nhiễm thuỷ ngân, chì và sắt mà còn có khả năng sản sinh năng lượng điện. Nghiên cứu sử dụng các loài sinh vật như vậy góp phần tạo ra nguồn năng lượng sạch trong tương lai.\nKết quả nghiên cứu trên nhiều đối tượng sinh vật còn làm xuất hiện những ngành nghề mới như những sinh học học bay bắt chước sinh vật để sản xuất vật liệu dựa trên những nguyên lí vận hành của các sinh vật đã và đang đem lại những lợi ích to lớn cho xã hội." }
        ]
      },
      {
        header: "III. SINH HỌC VỚI SỰ PHÁT TRIỂN BỀN VỮNG VÀ NHỮNG VẤN ĐỀ XÃ HỘI",
        subsections: [
          { title: "1. Khái niệm phát triển bền vững", content: "Theo định nghĩa của Uỷ ban Môi trường và Phát triển Thế giới (WCED) của Liên Hợp quốc (1987), phát triển bền vững được hiểu là sự phát triển đáp ứng được nhu cầu của xã hội hiện tại nhưng không làm tổn hại đến khả năng đáp ứng nhu cầu của các thế hệ tương lai.\nKhoa học phát triển đem lại những ứng dụng thực tiễn to lớn không thể phủ nhận, tuy nhiên cũng mang đến nhiều thách thức đối với đời sống xã hội. Sự gia tăng dân số đã và đang làm cạn kiệt nguồn tài nguyên thiên nhiên, giảm đa dạng sinh vật, gia tăng ô nhiễm môi trường và các vấn đề liên quan như sự ấm lên toàn cầu, nước biển dâng,... không chỉ đe doạ đến sự tồn vong của loài người mà cả hàng triệu loài sinh vật khác trên Trái Đất. Đứng đầu với những thách thức như vậy, đòi hỏi sự nỗ lực của các nhà sinh học và các nhà khoa học khác, các chuyên gia y tế, các nhà giáo dục học, các nhà chính trị và cả các công dân có sự hiểu biết nhất định về sinh học." },
          { title: "2. Vai trò của sinh học trong phát triển bền vững", content: "Phổ biến kiến thức sinh học cơ bản đến toàn dân về bảo vệ sự đa dạng sinh vật, khai thác tài nguyên thiên nhiên hợp lí,... không chỉ cần thiết ở trong nhà trường mà phải qua mọi phương tiện thông tin đại chúng đến mọi người trong xã hội.\nMọi nghiên cứu sinh học cũng cần tính đến việc có tác động như thế nào đến môi trường, xã hội và phải hướng tới sự phát triển bền vững. Ví dụ: Nghiên cứu tạo giống mới không chỉ chú trọng đến năng suất cao, chất lượng tốt, mà còn phải xem xét giống mới ảnh hưởng như thế nào đến các loài sinh vật trong tự nhiên và liệu có tác động tiêu cực đến sức khoẻ con người hay không?\nNghiên cứu sinh học góp phần cung cấp cơ sở khoa học giúp cho chính phủ có những chiến lược phát triển kinh tế phù hợp với sự phát triển bền vững. Ví dụ: Nghiên cứu về hệ sinh thái và sự ấm lên toàn cầu giúp cho việc quy hoạch xây dựng các đập thuỷ điện, đường sá, nhà máy,...\nPhát triển bền vững đòi hỏi mọi người trong xã hội cần có ý thức trách nhiệm bảo vệ nguồn tài nguyên thiên nhiên, bảo vệ môi trường. Việc trang bị kiến thức tối thiểu về sinh học không những giúp chúng ta trở thành nhà tiêu dùng thông thái, biết cách bảo vệ sức khoẻ bản thân mà còn xây dựng xã hội phát triển bền vững cho các thế hệ mai sau." },
          { title: "3. Sinh học và những vấn đề xã hội", content: "a) Sinh học và vấn đề đạo đức: Xét ở góc độ đạo đức của xã hội loài người, nghiên cứu sinh học cũng làm nảy sinh vấn đề đạo đức và được gọi là đạo đức sinh học. Ví dụ: Việc giải trình tự hệ gene của một người có thể giúp cho công tác chữa bệnh được hiệu quả, nhưng những ai có quyền biết thông tin này? Liệu các công ty bảo hiểm có sẵn sàng bảo hiểm cho một người khi biết rằng người đó mang gene quy định một bệnh hiểm nghèo? Liệu kĩ thuật chỉnh sửa gene hiện đang phát triển có nên áp dụng để chỉnh sửa gene của người? Liệu xã hội có cho phép nhân bản vô tính con người? Liệu các giống cây trồng biến đổi gene có thực sự an toàn với con người?\n\nb) Sinh học và kinh tế: Những ứng dụng của sinh học đã đem lại giá trị kinh tế vô cùng to lớn cho con người. Ví dụ: Những giống vật nuôi, cây trồng có năng suất, chất lượng cao, khả năng chống chịu tốt được tạo ra bằng phương pháp gây đột biến nhân tạo và lai hữu tính hay những giống cây trồng biến đổi gene mang những đặc tính đặc biệt hữu ích được nhân nhanh bằng kĩ thuật nuôi cấy mô tế bào đã giúp nâng cao hiệu quả kinh tế.\nTuy nhiên, bên cạnh những lợi ích cũng có nhiều vấn đề phải tính khi áp dụng công nghệ sinh học vào thực tiễn. Ví dụ: Khi trồng các giống tạo ra từ phương pháp nuôi cấy mô tế bào trên diện tích lớn sẽ tiềm ẩn rủi ro mất mùa nếu điều kiện môi trường bất lợi với cây trồng,...\n\nc) Sinh học và công nghệ: Nghiên cứu sinh học cơ bản còn giúp phát triển các công nghệ bắt chước các sinh vật (công nghệ phỏng sinh học) áp dụng trong cải tiến, tối ưu hoá các công cụ máy móc. Ví dụ: Nghiên cứu tập tính của các loài côn trùng như kiến, người ta có thể chế tạo ra robot hoạt động độc lập nhưng có thể “giao tiếp” với nhau để thực hiện một nhiệm vụ nhất định đã được lập trình." }
        ]
      }
    ]
  },
  'bai2': {
    summary: {
      intro: "Nghiên cứu và học tập Sinh học đòi hỏi các phương pháp khoa học bài bản, từ quan sát, đặt câu hỏi, hình thành giả thuyết đến thiết kế thí nghiệm và rút ra kết luận. An toàn trong phòng thí nghiệm và việc sử dụng các thiết bị phù hợp là yếu tố tiên quyết.",
      coreKnowledge: [
        { title: "Phương pháp nghiên cứu", content: "Gồm các bước: Quan sát và đặt câu hỏi, hình thành giả thuyết khoa học, thiết kế và tiến hành thí nghiệm, phân tích kết quả và rút ra kết luận.", emoji: "📝" },
        { title: "Phương pháp thực nghiệm", content: "Bao gồm việc đối chứng để so sánh kết quả giữa nhóm thí nghiệm và nhóm đối chứng, đảm bảo tính khách quan.", emoji: "🔬" },
        { title: "An toàn thí nghiệm", content: "Tuân thủ các quy định về an toàn khi làm việc với hóa chất, dụng cụ và mẫu vật để bảo vệ bản thân và môi trường.", emoji: "⚠️" },
        { title: "Tin sinh học (Bioinformatics)", content: "Là lĩnh vực sử dụng công nghệ thông tin để thu thập, phân tích và xử lí các dữ liệu sinh học, đặc biệt là dữ liệu hệ gene.", emoji: "💻" }
      ],
      vocabulary: [
        { term: "Giả thuyết khoa học", definition: "Một lời giải thích có thể kiểm chứng được cho một hiện tượng quan sát được trong tự nhiên." },
        { term: "Thí nghiệm đối chứng", definition: "Một thí nghiệm trong đó một nhóm (nhóm đối chứng) không nhận được sự tác động đang được kiểm tra, dùng để so sánh với nhóm thí nghiệm." },
        { term: "Tin sinh học", definition: "Ngành khoa học ứng dụng các công cụ của toán học, thống kê và khoa học máy tính để giải quyết các vấn đề sinh học." }
      ]
    },
    examples: [
      { title: "Kiểm chứng giả thuyết", scenario: "Một nhà khoa học cho rằng một loại phân bón mới (X) giúp cây ngô phát triển nhanh hơn. Họ trồng hai lô ngô trong điều kiện giống hệt nhau, nhưng chỉ bón phân X cho một lô.", explanation: "Lô không được bón phân là lô đối chứng. Bằng cách so sánh chiều cao của cây ở hai lô sau một thời gian, nhà khoa học có thể kết luận về tác dụng của phân bón X.", emoji: "🌽" },
      { title: "Ứng dụng Tin sinh học", scenario: "Các nhà khoa học so sánh hệ gene của các chủng virus cúm khác nhau để dự đoán sự tiến hóa và phát triển vaccine hiệu quả hơn.", explanation: "Các công cụ tin sinh học giúp phân tích lượng dữ liệu gene khổng lồ một cách nhanh chóng, tìm ra các đột biến và các vùng gene được bảo tồn.", emoji: "🦠" }
    ],
    textbook: [
      {
        header: "I. PHƯƠNG PHÁP NGHIÊN CỨU SINH HỌC",
        subsections: [
          { title: "1. Phương pháp quan sát", content: "Bất cứ công trình nghiên cứu sinh học nào cũng được bắt đầu từ các quan sát và được thực hiện qua các bước:\n- Lựa chọn đối tượng và phạm vi quan sát: Đối tượng quan sát là những sinh vật và các quá trình sống diễn ra trong tự nhiên cũng như ở trong phòng thí nghiệm (với các điều kiện được kiểm soát chặt chẽ).\n- Lựa chọn công cụ quan sát: Việc quan sát có thể được thực hiện bằng các giác quan hay thông qua sự hỗ trợ của các công cụ đơn giản hoặc các thiết bị tinh xảo.\n- Ghi chép số liệu: Số liệu quan sát có thể được thu nhận bởi các giác quan hoặc thông qua các thiết bị bị quan sát như máy ghi âm, ghi hình. Các số liệu ghi chép được phải đủ lớn (được lặp đi lặp lại nhiều lần) và phải khách quan để có thể xử lí bằng phương pháp thống kê và xác suất." },
          { title: "2. Phương pháp làm việc trong phòng thí nghiệm", content: "a) Phương pháp đảm bảo an toàn khi làm việc trong phòng thí nghiệm:\n- Người nghiên cứu cần tuân thủ các quy định để giữ an toàn cho bản thân và các thiết bị, tài sản của phòng thí nghiệm.\n- Các lưu ý về an toàn cháy nổ, an toàn về hoá chất: Khi làm việc với những hoá chất độc hại dễ bay hơi cần phải thực hiện ở nơi có tủ hút khí độc hoặc ở nơi thoáng khí. Tuân thủ các quy tắc pha hoá chất để tránh xảy ra cháy nổ, đặc biệt khi thí nghiệm có sử dụng acid hoặc những chất dễ cháy nổ như cồn. Kiểm tra sự vận hành của các thiết bị phòng chống cháy nổ, các máy móc hút mùi, chống độc, các trang thiết bị cấp cứu khi có sự cố.\n- Vận hành thiết bị: Trước khi sử dụng bất cứ thiết bị nào trong phòng thí nghiệm, người nghiên cứu cần nắm được quy tắc vận hành máy móc, thiết bị để có thể thu được kết quả chính xác nhất và không làm hư hại máy móc, thiết bị. Cần ghi lại nhật kí làm việc và tình trạng hoạt động vận hành của máy móc.\n- Trang bị cá nhân: Tuỳ theo từng yêu cầu của nghiên cứu mà mỗi người khi làm việc trong phòng thí nghiệm cần phải có các trang thiết bị riêng biệt. Thông thường, để đảm bảo an toàn, người thực hiện nghiên cứu phải mặc áo choàng, đeo găng tay, kính bảo hộ hoặc mặt nạ để tránh tiếp xúc với hoá chất độc hại, vi sinh vật gây bệnh.\n\nb) Một số kĩ thuật phòng thí nghiệm:\n- Phương pháp giải phẫu: Để tìm hiểu cấu trúc của cơ thể hay các bộ phận của tế bào, người ta thường phải tiến hành giải phẫu để quan sát các bộ phận cấu thành. Ví dụ: giải phẫu các bộ phận rễ, thân, lá của cây hay các bộ phận của cơ thể động vật.\n- Phương pháp làm tiêu bản tế bào/nhiễm sắc thể (NST): Có nhiều cách khác nhau để có thể quan sát được các tế bào hay các cấu trúc bên trong tế bào như NST. Để quan sát tế bào, mẫu mô cần cắt thành lát đủ mỏng để có thể quan sát tế bào hoặc các cấu trúc của tế bào dưới kính hiển vi.\n- Để quan sát NST của tế bào, có thể quan sát bằng phương pháp làm tiêu bản tươi theo các bước: mẫu vật sống được cố định bằng hoá chất và nhuộm màu, chia nhỏ mẫu, dầm ép để phá vỡ tế bào giải phóng các NST." },
          { title: "3. Phương pháp thực nghiệm khoa học", content: "Các phương pháp nghiên cứu thực nghiệm có thể tiến hành ngay tại thực địa hoặc trong phòng thí nghiệm với các điều kiện môi trường được kiểm soát một cách chặt chẽ. Sinh học là môn khoa học thực nghiệm, vì vậy, có nhiều phương pháp thực nghiệm được sử dụng trong nghiên cứu sinh học, một số phương pháp thường được sử dụng như: phương pháp nghiên cứu phân lập, phân loại sinh vật; định danh dựa trên hình thái của sinh vật, phân tích tích gene, phân lập (đối với vi khuẩn).\n- Phương pháp tách, chiết: Tách enzyme, các chất có hoạt tính sinh học.\n- Phương pháp nuôi cấy: Nuôi cấy mô tế bào động vật, thực vật; nuôi động vật, thực vật trong phòng thí nghiệm và ngoài thực địa,..." }
        ]
      },
      {
        header: "II. CÁC THIẾT BỊ NGHIÊN CỨU VÀ HỌC TẬP MÔN SINH HỌC",
        subsections: [
          { title: "1. Kính hiển vi", content: "Dựa trên nguồn sáng được sử dụng, kính hiển vi được chia thành hai loại: kính hiển vi quang học và kính hiển vi điện tử. Kính hiển vi quang học (H 2.2) sử dụng nguồn sáng điện hay ánh sáng mặt trời chiếu lên mẫu vật, còn kính hiển vi điện tử sử dụng nguồn sáng là các chùm electron chiếu qua hoặc lên bề mặt của mẫu vật. Ba thông số quan trọng của kính hiển vi là độ phóng đại, độ phân giải và độ tương phản. Độ phóng đại của kính hiển vi quang học tối đa là 1 500 lần và độ phân giải chỉ khoảng 200 nm. Trong khi đó, độ phóng đại của kính hiển vi điện tử (TEM) có thể lên tới 50 triệu lần và độ phân giải nhỏ hơn 1 Å. Kính hiển vi điện tử giúp con người nghiên cứu cấu trúc siêu hiển vi của tế bào cũng như cấu trúc phân tử." },
          { title: "2. Máy li tâm", content: "Máy li tâm được sử dụng trong kĩ thuật phân đoạn tế bào. Đây là kĩ thuật tách các loại bào quan dựa trên khối lượng của chúng. Để tách và phân lập các bào quan, chúng ta cần phá vỡ tế bào, sau đó cho vào ống nghiệm đem li tâm trong máy li tâm. Lực li tâm ở các tốc độ vòng quay khác nhau làm cho các bộ phận tế bào có khối lượng khác nhau được phân tách riêng và nằm ở các vùng khác nhau của ống li tâm (H 2.3)." },
          { title: "3. Các thiết bị khác", content: "Ở môn sinh học bậc Trung học phổ thông, các thiết bị đơn giản khác mà chúng ta hay sử dụng là các loại kính lúp, ống hút đơn giản hay pipet, một số loại ống hút có thể điều chỉnh định lượng dung dịch cần lấy một cách rất chính xác. Khi sử dụng bất cứ loại thiết bị thí nghiệm nào dù đơn giản hay phức tạp, chúng ta cần hiểu rõ cấu trúc, cách vận hành và sử dụng thiết bị để tránh làm hư hỏng dụng cụ, máy móc thiết bị cũng như thu được kết quả chính xác và đảm bảo an toàn." }
        ]
      },
      {
        header: "III. CÁC KĨ NĂNG TRONG TIẾN TRÌNH NGHIÊN CỨU KHOA HỌC",
        subsections: [
          { title: "1. Quan sát, thu thập dữ liệu", content: "Mọi nghiên cứu đều bắt đầu từ những quan sát để thu thập dữ liệu. Điều quan trọng trong khi quan sát là cần rèn luyện đức tính kiên trì, thận trọng. Việc sử dụng các công cụ nghiên cứu thích hợp cũng giúp các nhà khoa học thu được các số liệu chính xác và nhanh chóng. Dữ liệu thu được sau khi quan sát được dùng để hình thành nên các giả thuyết khoa học." },
          { title: "2. Đặt câu hỏi", content: "Sau khi thu được số liệu, các nhà khoa học thường đặt ra các câu hỏi và tìm cách lí giải (đưa ra giả thuyết)." },
          { title: "3. Hình thành giả thuyết", content: "Những cách giải thích có thể kiểm chứng được bằng thực nghiệm cho các câu hỏi đề ra được gọi là giả thuyết khoa học.\nMột giả thuyết chỉ được gọi là khoa học khi nó có thể được kiểm chứng bằng thực nghiệm. Để có thể kiểm chứng được giả thuyết, các nhà khoa học sử dụng cách suy luận logic ngược lại với suy nạp, đi từ cái đúng tới cái đúng được gọi là diễn giải. Suy luận diễn giải giúp chúng ta suy diễn từ giả thuyết hay nguyên lí chung ra những điều tất yếu sẽ xảy ra nếu giả thuyết hay nguyên lí đó là đúng. Những điều tất yếu sẽ xảy ra mà chúng ta có thể suy ra từ giả thuyết hay nguyên lí chung được gọi là các dự đoán. Dự đoán được diễn đạt dưới dạng “nếu ... thì”." },
          { title: "4. Thiết kế và tiến hành thí nghiệm kiểm chứng", content: "Thí nghiệm kiểm chứng thường được thiết kế hai lô: Một lô được gọi là lô đối chứng, một lô được gọi là lô thí nghiệm. Đối tượng nghiên cứu trong hai lô phải giống nhau về số lượng cũng như mọi đặc điểm sinh học. Môi trường nuôi dưỡng và mọi yếu tố của môi trường ở hai lô đều giống nhau ngoại trừ yếu tố cần nghiên cứu.\nVí dụ: Để nghiên cứu sự tác động của một loại nguyên tố khoáng lên sự sinh trưởng của cây trồng cần thiết kế hai lô thí nghiệm, trong đó cả hai lô cùng trồng một loài cây, các cây cùng độ tuổi sinh lí với số lượng cây như nhau và được đặt trong cùng một điều kiện môi trường. Ở lô thí nghiệm, bón cho cây đầy đủ các nguyên tố khoáng thiết yếu, còn lô đối chứng vẫn bón đầy đủ các nguyên tố khoáng như lô thí nghiệm ngoại trừ nguyên tố khoáng cần nghiên cứu. Sự khác biệt của cây ở hai lô sẽ cho thấy ảnh hưởng của nguyên tố khoáng cần nghiên cứu lên cây." },
          { title: "5. Phân tích kết quả nghiên cứu và xử lí dữ liệu", content: "Dữ liệu thu được từ các quan sát thực địa hay từ các thí nghiệm trong phòng thí nghiệm phải được xử lí thận trọng để có thể rút ra được những kết luận phù hợp. Dữ liệu thường được các nhà khoa học trình bày dưới dạng bảng biểu, đồ thị khác nhau (đường thẳng, đường cong, dạng cột,...). Đồ thị có hai thông số được ghi trên trục tung và trục hoành được gọi là các biến. Trục hoành thường thể hiện sự thay đổi của các biến độc lập, là thông số mà nhà nghiên cứu có thể chủ động thay đổi. Trục tung thường thể hiện sự thay đổi của biến phụ thuộc. Ví dụ: đồ thị trong hình 2.5, ở trục hoành biểu diễn số lượng điếu thuốc lá hút mỗi ngày là biến độc lập, còn ở trục tung là tần suất bị ung thư phổi trên 100 000 người là biến phụ thuộc. Giá trị của biến phụ thuộc thay đổi theo biến độc lập. Biểu đồ trong hình 2.5 cho chúng ta thấy tần suất bị ung thư phổi thay đổi như thế nào khi biến độc lập là số lượng điếu thuốc lá thay đổi." },
          { title: "6. Rút ra kết luận", content: "Kết quả nghiên cứu thường được thẩm định và công bố trên các tạp chí khoa học và các nhà khoa học khác có thể tiến hành các thí nghiệm tương tự trên các đối tượng sinh vật khác nhau nhằm tìm kiếm thêm các bằng chứng ủng hộ giả thuyết. Một giả thuyết được kiểm nghiệm ở nhiều đối tượng khác nhau bởi các nhà khoa học khác nhau trên thế giới và được giới khoa học thừa nhận thì sẽ trở thành thuyết phục khoa học." }
        ]
      },
      {
        header: "IV. TIN SINH HỌC - CÔNG CỤ NGHIÊN CỨU VÀ HỌC TẬP MÔN SINH HỌC",
        subsections: [
          { title: "Tin sinh học (Bioinformatics)", content: "Tin sinh học (Bioinformatics) là ngành khoa học sử dụng các phần mềm máy tính chuyên dụng, các thuật toán, mô hình để lưu trữ, phân tích, các bộ dữ liệu sinh học ở quy mô lớn nhằm sử dụng chúng một cách có hiệu quả trong nghiên cứu khoa học và trong cuộc sống. Tin sinh học đòi hỏi có sự cộng tác của các chuyên gia từ nhiều ngành khoa học khác nhau như các nhà sinh học phân tử, hoá học, vật lí toán học và các chuyên gia về công nghệ thông tin. Một trong số những ứng dụng của tin sinh học là dùng phần mềm máy tính tìm kiếm các gene trong hệ gene và so sánh các hệ gene của các loài với nhau để tìm hiểu mối quan hệ tiến hoá giữa các loài sinh vật. Tin sinh học hỗ trợ rất nhiều cho các nghiên cứu sinh học và làm xuất hiện các ngành mới như sinh học hệ thống mà ta đã đề cập ở trên." },
          { title: "Ứng dụng trí tuệ nhân tạo", content: "Việc áp dụng trí tuệ nhân tạo trong nghiên cứu sinh học còn đem lại nhiều ứng dụng tuyệt vời khác mà trước đây chúng ta khó có thể hình dung được. Ví dụ: Sử dụng trí tuệ nhân tạo để xử lí thông tin của bệnh nhân giúp các bác sĩ đưa ra được biện pháp chữa bệnh hiệu quả nhất cho từng bệnh nhân.\nĐể học tập môn Sinh học một cách có hiệu quả, chúng ta cũng có thể sử dụng các công cụ tin học đơn giản trong việc tìm kiếm, khai thác thông tin trên internet, sử dụng các chương trình tin học hay tự lập trình phần mềm mô tả các quá trình sinh học phức tạp. Ví dụ: Học sinh có thể học và tự lập trình các phần mềm mô tả quá trình tái bản DNA, phiên mã và dịch mã. Sử dụng phần mềm xây dựng sơ đồ tư duy để hệ thống liên hệ kiến thức cũng là một cách tiếp thu kiến thức hiệu quả. Sinh học là một ngành khoa học thực nghiệm. Nghiên cứu sinh học chính là tìm hiểu các quy luật vật lí và hoá học vận hành như thế nào để tạo nên các đặc điểm kì diệu của sự sống. Vì vậy, để học giỏi môn Sinh học, các em cần trang bị một nền tảng kiến thức vững chắc về khoa học tự nhiên như toán học, vật lí học và hoá học." }
        ]
      }
    ]
  },
  'bai3': {
    summary: {
      intro: "Thế giới sống được tổ chức theo các cấp độ từ thấp đến cao (phân tử → bào quan → tế bào → mô → cơ quan → hệ cơ quan → cơ thể → quần thể → quần xã → hệ sinh thái). Các cấp độ tổ chức này có mối quan hệ chặt chẽ, thể hiện đặc tính nổi trội và nguyên tắc thứ bậc.",
      coreKnowledge: [
        { title: "Nguyên tắc thứ bậc", content: "Cấp độ tổ chức cao hơn được hình thành từ các cấp độ tổ chức thấp hơn liền kề, và mang những đặc tính mới mà cấp độ dưới không có (đặc tính nổi trội).", emoji: "📈" },
        { title: "Tế bào - Đơn vị cơ bản", content: "Tế bào là đơn vị cấu trúc và chức năng cơ bản của mọi cơ thể sống.", emoji: "🔬" },
        { title: "Hệ thống mở và tự điều chỉnh", content: "Các cấp độ tổ chức sống là những hệ thống mở, luôn trao đổi vật chất và năng lượng với môi trường, đồng thời có khả năng tự điều chỉnh để duy trì trạng thái cân bằng nội môi.", emoji: "🔄" },
        { title: "Liên hệ các cấp độ", content: "Mối quan hệ hữu cơ giữa các cấp độ tổ chức được dựa trên các hoạt động sống ở cấp độ tế bào, sự truyền năng lượng và vật chất giữa các cấp độ.", emoji: "🔗" }
      ],
      vocabulary: [
        { term: "Cấp độ tổ chức sống", definition: "Các cấp của thế giới vật chất có biểu hiện đầy đủ đặc tính của sự sống." },
        { term: "Đặc tính nổi trội", definition: "Những đặc tính của một cấp độ tổ chức mà các thành phần cấu tạo nên nó ở cấp độ thấp hơn không có được." },
        { term: "Hệ thống mở", definition: "Một hệ thống có khả năng trao đổi vật chất và năng lượng với môi trường bên ngoài." }
      ]
    },
    examples: [
      { title: "Đặc tính nổi trội của tim", scenario: "Các tế bào cơ tim riêng lẻ chỉ có thể co dãn, nhưng khi chúng tập hợp lại thành mô cơ tim và cấu trúc thành quả tim (cơ quan), chúng có khả năng bơm máu đi khắp cơ thể.", explanation: "Khả năng bơm máu là đặc tính nổi trội của cấp độ cơ quan (tim), mà từng tế bào cơ tim (cấp độ tế bào) không thể thực hiện được.", emoji: "❤️" },
      { title: "Hệ sinh thái là hệ thống mở", scenario: "Một khu rừng (hệ sinh thái) nhận năng lượng ánh sáng từ Mặt Trời, CO2 từ không khí; cây cối quang hợp tạo chất hữu cơ, các sinh vật tiêu thụ và phân giải, giải phóng nhiệt và các chất dinh dưỡng trở lại môi trường.", explanation: "Hệ sinh thái liên tục trao đổi vật chất (nước, khí, khoáng) và năng lượng (ánh sáng, nhiệt) với môi trường xung quanh, thể hiện tính chất của một hệ thống mở.", emoji: "🌳" }
    ],
    textbook: [
      {
        header: "I. CÁC CẤP ĐỘ TỔ CHỨC CỦA THẾ GIỚI SỐNG",
        subsections: [
          { title: "1. Khái niệm cấp độ tổ chức sống", content: "Cấp độ tổ chức sống là cấp độ tổ chức của vật chất có biểu hiện đầy đủ đặc tính của sự sống. Thế giới sống được tổ chức thành nhiều cấp bậc từ nhỏ đến lớn gồm các cấp tổ chức trung gian như: nguyên tử, phân tử, bào quan, mô và các cấp tổ chức cơ bản như: tế bào, cơ thể, quần thể, quần xã và hệ sinh thái. Tất cả cấp độ tổ chức cơ bản của thế giới sống đều được cấu tạo từ một hoặc nhiều tế bào." },
          { title: "2. Mối quan hệ giữa các cấp độ tổ chức của thế giới sống", content: "Tế bào là đơn vị tổ chức nhỏ nhất có đầy đủ các đặc điểm của sự sống, được tổ chức từ các bậc tổ chức nhỏ hơn là các bào quan, phân tử, nguyên tử. Tiếp đến là cấp độ tổ chức ở bậc cơ thể, đây là cấp độ tổ chức có các bậc trung gian là mô, cơ quan. Tập hợp các cá thể của cùng một loài sống trong một khu vực địa lí nhất định và vào thời điểm nhất định tạo nên một cấp độ tổ chức cao hơn là quần thể. Các quần thể của nhiều loài khác nhau cùng tồn tại trong một khu vực địa lí ở cùng một thời điểm tạo nên cấp tổ chức được gọi là quần xã. Các quần xã tương tác với nhau và với môi trường tạo nên các cấp tổ chức hệ sinh thái (H 3.1).\nMối quan hệ hữu cơ giữa các cấp độ tổ chức dựa trên các hoạt động sống ở cấp độ tế bào. Ví dụ: Các cá thể tương tác với cá thể khác và với môi trường vật lí dựa trên cơ sở các hoạt động truyền tin ở cấp độ tế bào. Các cấp độ tổ chức sống còn liên hệ với nhau bởi quá trình chuyển hoá vật chất và năng lượng trong thế giới sống. Nguồn năng lượng cung cấp cho thế giới sống chủ yếu đến từ Mặt Trời và được truyền từ cấp độ tổ chức này sang cấp độ tổ chức khác của thế giới sống cùng với sự chuyển hoá của vật chất." }
        ]
      },
      {
        header: "II. ĐẶC ĐIỂM CHUNG CỦA THẾ GIỚI SỐNG",
        subsections: [
          { title: "1. Thế giới sống được tổ chức theo nguyên tắc thứ bậc", content: "Thế giới sống được tổ chức theo các nguyên tắc từ thấp đến cao, từ đơn giản đến phức tạp, cấp tổ chức thấp (nhỏ) làm nền tảng cấu thành nên cấp cao hơn. Cấp độ tổ chức nhỏ nhất hay cơ bản nhất cấu tạo nên các cấp bậc cao hơn chính là tế bào.\nMỗi cấp tổ chức sống đều được cấu thành từ những bộ phận nhỏ hơn tương tác với nhau tạo nên những đặc điểm mới mà ở cấp tổ chức nhỏ hơn không có (gọi là đặc tính nổi trội). Ví dụ: Các phân tử sinh học chỉ tạo ra được các đặc tính của sự sống khi được bao gói và tổ chức tinh vi trong một cấu trúc là tế bào. Các tế bào thần kinh riêng biệt không giúp sinh vật có “tư duy” mà chỉ khi chúng được tổ chức trong một cấu trúc như bộ não của người mới cho chúng ta năng lực tư duy sáng tạo mà không sinh vật nào có được.\nVật sống cũng có thể được tổ chức theo các cấp độ và có chung một số đặc điểm với vật không sống nhưng không thể có được những đặc tính như sinh trưởng, sinh sản, chuyển hoá vật chất và năng lượng." },
          { title: "2. Các cấp độ tổ chức sống là những hệ mở và tự điều chỉnh", content: "Các cấp độ tổ chức sống đều là những hệ thống mở (không ngừng trao đổi vật chất và năng lượng với môi trường). Đây là đặc điểm cơ bản, đảm bảo sự tồn tại và phát triển của các cấp tổ chức sống. Nếu như ở thế giới vô cơ, các vật chất ban đầu có tổ chức cấu tạo phức tạp thế nào đi chăng nữa thì theo quy luật nhiệt động học nó sẽ dần dần trở về trạng thái hỗn độn, vô tổ chức. Ngược lại, thế giới sống với cơ cấu tổ chức đặc biệt luôn trao đổi vật chất và năng lượng với môi trường bên ngoài và tự điều chỉnh để phù hợp với điều kiện môi trường, nên sinh vật có khả năng sinh trưởng, sinh sản, cảm ứng,.. cũng như những đặc điểm khác mà thế giới vô cơ không có được. Sinh vật không chỉ chịu sự tác động của môi trường mà còn góp phần làm biến đổi môi trường.\nVí dụ: Tế bào chỉ có thể tồn tại, lớn lên và phân chia khi nó thường xuyên thu nhận các chất hoá học từ bên ngoài, biến đổi chúng để tạo nên các chất sống, đồng thời loại bỏ các chất thải ra khỏi tế bào. Cơ thể cũng không ngừng trao đổi khí, trao đổi nước, lấy thức ăn và thải chất thải ra ngoài môi trường trong quá trình sống.\nHệ thống mở cũng là hệ thống tiếp nhận và xử lí thông tin từ môi trường, đồng thời truyền thông tin trong hệ thống cũng như giữa các hệ thống sống. Ví dụ: Tế bào nhận biết các thông tin bên ngoài nhờ hệ thống các protein trên màng tế bào rồi truyền tín hiệu qua hệ thống các protein trung gian, sau đó đưa ra các đáp ứng cần thiết. Các cá thể sinh vật trong một quần thể cũng tiếp nhận và truyền đạt thông tin cho nhau và truyền cho các cá thể của loài khác.\nMặc dù các hệ thống sống đều là các hệ mở nhưng chúng lại có khả năng tự điều chỉnh, duy trì các thông số bên trong hệ thống một cách ổn định cho dù điều kiện môi trường luôn thay đổi. Khả năng này của cơ thể được gọi là sự cân bằng nội môi. Ví dụ: Cơ thể con người có các cơ chế duy trì thân nhiệt, pH, đường huyết, nồng độ các ion quan trọng,... ở một mức độ tương đối ổn định. Nếu khả năng tự điều chỉnh bị trục trặc, chúng ta có thể bị bệnh, thậm chí là tử vong." },
          { title: "3. Thế giới sống liên tục tiến hoá", content: "Nhờ khả năng tiến hoá của sinh giới, sự sống trên hành tinh của chúng ta được sinh sôi và tiếp diễn liên tục qua hàng tỉ năm tạo ra thế giới sống vô cùng đa dạng, nhưng cũng có nhiều đặc điểm chung. Sở dĩ, tiến hoá xảy ra được là nhờ thông tin di truyền trong các phân tử DNA được truyền từ thế hệ này sang thế hệ khác, từ thế hệ này sang thế hệ khác một cách tương đối chính xác nhưng cũng luôn phát sinh những đột biến. Điều kiện môi trường sống khác nhau làm nhiệm vụ lựa chọn những đột biến có kiểu hình thích nghi nhất với môi trường." }
        ]
      }
    ]
  },
  // =================================================================
  // PHẦN MỘT: SINH HỌC TẾ BÀO
  // =================================================================
  'chap1-0': { // Bài 4
    summary: {
      intro: "Tế bào được cấu tạo từ các nguyên tố hóa học, trong đó C, H, O, N chiếm phần lớn. Nước, với cấu trúc phân cực độc đáo, là dung môi của sự sống, tham gia vào mọi hoạt động trao đổi chất và duy trì sự ổn định của tế bào.",
      coreKnowledge: [
        { title: "Nguyên tố đa lượng", content: "Chiếm > 0,01% khối lượng khô của cơ thể (C, H, O, N, S, P, K,...). Đóng vai trò cấu trúc nên các đại phân tử hữu cơ và điều hòa các hoạt động sống.", emoji: "🧱" },
        { title: "Nguyên tố vi lượng", content: "Chiếm < 0,01% khối lượng khô (Fe, Cu, Zn, Mn,...). Thường là thành phần của enzyme, hormone, vitamin, có vai trò điều tiết quá trình trao đổi chất.", emoji: "⚙️" },
        { title: "Cấu trúc của nước", content: "Phân tử H₂O có tính phân cực, tạo ra các liên kết hydrogen với nhau, quyết định các đặc tính lí hóa quan trọng như tính dung môi, sức căng bề mặt, nhiệt dung riêng cao.", emoji: "💧" },
        { title: "Vai trò của nước", content: "Là thành phần chính cấu tạo tế bào, là dung môi hòa tan nhiều chất, môi trường cho các phản ứng sinh hóa, và tham gia trực tiếp vào việc điều hòa nhiệt độ cơ thể.", emoji: "🌡️" }
      ],
      vocabulary: [
        { term: "Nguyên tố đa lượng", definition: "Các nguyên tố hóa học mà cơ thể cần với số lượng lớn để sinh trưởng và phát triển." },
        { term: "Nguyên tố vi lượng", definition: "Các nguyên tố hóa học mà cơ thể chỉ cần một lượng rất nhỏ nhưng không thể thiếu." },
        { term: "Liên kết hydrogen", definition: "Một loại liên kết yếu được hình thành giữa nguyên tử H (đã liên kết cộng hóa trị với một nguyên tử có độ âm điện cao) và một nguyên tử có độ âm điện cao khác." }
      ]
    },
    examples: [
      { title: "Thiếu Iodine (Iốt)", scenario: "Một người không bổ sung đủ muối iốt trong khẩu phần ăn, dẫn đến bị bệnh bướu cổ.", explanation: "Iodine là một nguyên tố vi lượng cần thiết để tuyến giáp tổng hợp hormone. Thiếu iodine làm tuyến giáp phì đại, gây ra bệnh bướu cổ và các rối loạn chuyển hóa khác.", emoji: "⛑️" },
      { title: "Cây thoát hơi nước", scenario: "Vào ngày nắng nóng, cây thoát hơi nước qua lá, giúp làm mát bề mặt lá và toàn bộ cây.", explanation: "Nước có nhiệt dung riêng và nhiệt bay hơi cao. Quá trình bay hơi nước qua lá lấy đi một lượng nhiệt lớn, giúp cây không bị quá nóng và duy trì các hoạt động sinh lí bình thường.", emoji: "🌿" }
    ],
    textbook: [
      {
        header: "I. KHÁI QUÁT VỀ HỌC THUYẾT TẾ BÀO",
        subsections: [
          { title: "", content: "Năm 1839, hai nhà sinh học người Đức là Matthias Jakob Schleiden và Theodor Schwann sau khi quan sát cấu tạo của nhiều loại tế bào thực vật và động vật đã nhận thấy các sinh vật đều có cấu trúc tế bào giống nhau và họ đã đưa ra học thuyết tế bào đầu tiên.\nHọc thuyết tế bào hiện đại bao gồm ba nội dung sau:\n- Tất cả mọi sinh vật đều được cấu tạo từ một hoặc nhiều tế bào. Sự sống được tiếp diễn do có sự chuyển hoá và sự di truyền xảy ra bên trong các tế bào.\n- Tế bào là đơn vị nhỏ nhất, đơn vị cấu trúc và chức năng cấu tạo nên mọi cơ thể sinh vật.\n- Tế bào chỉ được sinh ra từ sự phân chia của các tế bào có trước." }
        ]
      },
      {
        header: "II. CÁC NGUYÊN TỐ HOÁ HỌC TRONG TẾ BÀO",
        subsections: [
          { title: "", content: "Trong số 92 nguyên tố hoá học có trong tự nhiên, chỉ có khoảng 20% đến 25% nguyên tố hoá học cần thiết cho sự tồn tại, sinh trưởng và phát triển của các sinh vật, được gọi là các nguyên tố thiết yếu. Các nguyên tố hoá học trong tế bào đều có mặt trong tự nhiên, nhưng tỉ lệ các nguyên tố trong tế bào và ở môi trường rất khác nhau. Các nguyên tố có trong tế bào được chia thành hai loại: nguyên tố vi lượng và đa lượng. Nguyên tố đa lượng chiếm tỉ lệ lớn, giữ vai trò cấu trúc nên mọi phân tử trong tế bào. Nguyên tố vi lượng chiếm tỉ lệ rất nhỏ nhưng cũng đóng vai trò quan trọng trong việc điều hoà các hoạt động sống của tế bào. Không có nguyên tố nước sẽ không có sự sống." },
        ]
      },
      {
        header: "III. NƯỚC VÀ VAI TRÒ CỦA NƯỚC ĐỐI VỚI SỰ SỐNG",
        subsections: [
          { title: "1. Cấu trúc và tính chất vật lí, hoá học của nước", content: "Nước tinh khiết chỉ bao gồm các phân tử H₂O, mỗi phân tử nước có một nguyên tử oxygen liên kết với hai nguyên tử hydrogen bằng hai liên kết cộng hoá trị. Nguyên tử oxygen có khả năng hút điện tử cao hơn nhiều so với hydrogen nên các electron trong liên kết lệch về phía oxygen. Do vậy, trong phân tử nước, phía các nguyên tử hydrogen tích điện dương (δ+), còn phía nguyên tử oxygen tích điện âm (δ–). Với cấu trúc như vậy, phân tử nước là phân tử phân cực (giống như thanh nam châm). Khi các phân tử nước tiếp xúc gần với nhau hay với các phân tử phân cực khác, lực hút giữa các phân tử mang điện tích trái dấu của các phân tử hình thành nên các liên kết hydrogen (H 4.3).\nCấu trúc hoá học của nước làm cho nước có các đặc tính vật lí rất đặc biệt. Các phân tử nước ở nơi bề mặt tiếp xúc với không khí liên kết chặt với nhau tạo nên sức căng bề mặt. Nhờ vậy, nhiều sinh vật nhỏ có thể đi lại trên mặt nước. Các phân tử nước liên kết với nhau bằng rất nhiều liên kết hydrogen nên phải được cung cấp một nhiệt lượng lớn mới có thể làm tăng nhiệt độ của nước. Vì nước có nhiệt dung đặc trưng cao nên sinh vật trên cạn có thể dễ dàng điều chỉnh nhiệt độ tế bào và cơ thể cũng như tránh được sự thay đổi đột ngột của nhiệt độ môi trường sống. Nhờ có nhiệt bay hơi cao nên nước bay hơi sẽ lấy một lượng lớn nhiệt từ cơ thể sinh vật giúp làm giảm nhiệt độ cơ thể cũng như nhiệt độ của môi trường." },
          { title: "2. Vai trò sinh học của nước đối với tế bào", content: "Nước có vai trò đặc biệt quan trọng đối với tế bào do:\n- Nước là thành phần chủ yếu cấu tạo nên tế bào và cơ thể.\n- Nhờ có tính phân cực nên nước có khả năng hoà tan nhiều chất cần thiết cho các hoạt động sống của tế bào.\n- Nước là nguyên liệu của nhiều phản ứng và là môi trường cho các phản ứng sinh hoá diễn ra trong tế bào.\n- Nước góp phần định hình cấu trúc không gian đặc trưng của nhiều phân tử hữu cơ trong tế bào, đảm bảo cho chúng thực hiện được các chức năng sinh học, góp phần điều hoà nhiệt độ tế bào và cơ thể." }
        ]
      }
    ]
  },
  'chap1-1': { // Bài 5
    summary: {
      intro: "Tế bào được cấu tạo từ bốn loại phân tử sinh học chính: carbohydrate, lipid, protein và nucleic acid. Mỗi loại đều có cấu trúc và chức năng riêng biệt nhưng phối hợp chặt chẽ để duy trì sự sống.",
      coreKnowledge: [
        { title: "Carbohydrate (Đường bột)", content: "Là nguồn năng lượng chính và vật liệu cấu trúc của tế bào. Gồm đường đơn (glucose), đường đôi (sucrose) và đường đa (tinh bột, cellulose).", emoji: "🍞" },
        { title: "Lipid (Chất béo)", content: "Dự trữ năng lượng, cấu tạo màng tế bào, và là thành phần của hormone. Kị nước. Gồm mỡ, dầu, phospholipid, steroid.", emoji: "🥑" },
        { title: "Protein (Chất đạm)", content: "Cực kỳ đa dạng về chức năng: cấu trúc, enzyme, vận chuyển, bảo vệ, điều hòa... Cấu tạo theo nguyên tắc đa phân từ các amino acid.", emoji: "🥩" },
        { title: "Nucleic Acid", content: "Lưu trữ, bảo quản và truyền đạt thông tin di truyền. Gồm DNA (deoxyribonucleic acid) và RNA (ribonucleic acid), được cấu tạo từ các nucleotide.", emoji: "🧬" }
      ],
      vocabulary: [
        { term: "Đại phân tử sinh học", definition: "Các phân tử hữu cơ lớn và phức tạp, thường được cấu tạo theo nguyên tắc đa phân, như protein, nucleic acid." },
        { term: "Polymer (Chất đa phân)", definition: "Một phân tử lớn được tạo thành từ sự lặp lại của nhiều đơn vị nhỏ hơn gọi là monomer." },
        { term: "Amino acid", definition: "Đơn phân cấu tạo nên protein. Có 20 loại amino acid phổ biến." },
        { term: "Nucleotide", definition: "Đơn phân cấu tạo nên nucleic acid. Mỗi nucleotide gồm 1 nhóm phosphate, 1 đường pentose, và 1 base nito." }
      ]
    },
    examples: [
      { title: "Bệnh tiểu đường", scenario: "Một bệnh nhân có nồng độ đường glucose trong máu cao do cơ thể không sản xuất đủ insulin hoặc insulin hoạt động không hiệu quả.", explanation: "Insulin là một loại hormone có bản chất là protein, giúp điều hòa lượng đường trong máu. Sự thiếu hụt hoặc rối loạn chức năng của protein này dẫn đến bệnh tiểu đường.", emoji: "🩸" },
      { title: "Xét nghiệm DNA huyết thống", scenario: "Sử dụng mẫu tóc hoặc niêm mạc miệng để phân tích trình tự DNA, so sánh và xác định mối quan hệ cha-con.", explanation: "DNA chứa thông tin di truyền đặc trưng cho mỗi cá thể và được truyền từ thế hệ này sang thế hệ khác. Việc so sánh các trình tự DNA cho phép xác định quan hệ huyết thống với độ chính xác cao.", emoji: "👨‍👧‍👦" }
    ],
    textbook: [
      {
        header: "I. KHÁI NIỆM VÀ THÀNH PHẦN CÁC PHÂN TỬ SINH HỌC TRONG TẾ BÀO",
        subsections: [
          { title: "", content: "Phân tử sinh học là những phân tử hữu cơ được tổng hợp và tồn tại trong các tế bào sống. Các phân tử sinh học chính bao gồm protein, lipid, carbohydrate, nucleic acid. Trong đó, protein, carbohydrate và nucleic acid là những đại phân tử được cấu tạo theo nguyên tắc đa phân gồm nhiều đơn phân phân hợp thành. Vì vậy, những loại phân tử sinh học này có kích thước rất lớn và được gọi là các polymer.\nThành phần hoá học chủ yếu của các phân tử sinh học là các nguyên tử carbon và các nguyên tử hydrogen, chúng liên kết với nhau hình thành nên bộ khung hydrocarbon rất đa dạng. Bộ khung hydrocarbon có khả năng liên kết với các nhóm chức khác nhau (như nhóm amino, carboxyl,...) tạo ra vô số các hợp chất với các đặc tính hoá học khác nhau." }
        ]
      },
      {
        header: "II. CÁC PHÂN TỬ SINH HỌC",
        subsections: [
          { title: "1. Carbohydrate – chất đường bột", content: "a) Đường đơn: Đường đơn có 6 nguyên tử carbon, gồm ba loại chính là glucose, fructose và galactose (H 5.1). Các loại đường đơn này có hai chức năng chính: (1) dùng làm nguồn cung cấp năng lượng cho các hoạt động sống của tế bào; (2) dùng làm nguyên liệu để cấu tạo nên các loại phân tử sinh học khác.\nb) Đường đôi: Đường đôi được hình thành do hai phân tử đường đơn liên kết với nhau (sau khi loại đi một phân tử nước) bằng một liên kết glycosidic. Hai phân tử đường đơn liên kết với nhau tạo nên đường đôi maltose, trong khi một phân tử glucose liên kết với một phân tử galactose thành đường lactose. Đường đôi phổ biến nhất trong thực vật là đường sucrose (H 5.2).\nc) Đường đa: Đường đa là loại polymer được cấu tạo từ hàng trăm tới hàng nghìn phân tử đường đơn (phần lớn là glucose). Đường đa hay còn gọi là đường phức, bao gồm các loại: tinh bột, glycogen, cellulose, chitin. Đường đa có chức năng chính là dự trữ năng lượng và làm nguyên liệu cấu trúc nên một số thành phần của tế bào.\n- Tinh bột: Tinh bột là loại carbohydrate được dùng làm năng lượng dự trữ ở các loài thực vật. Tinh bột được cấu tạo từ hàng trăm đến hàng nghìn đơn phân là glucose. Nhìn chung, các loại tinh bột có cấu trúc ít phân nhánh.\n- Glycogen: Glycogen được cấu tạo từ nhiều phân tử glucose kết hợp lại nhưng phân tử này phân nhánh rất mạnh (H 5.3B) và tan trong nước tốt hơn so với tinh bột. Glycogen có chức năng dự trữ năng lượng trong cơ thể động vật và một số loài nấm. Ở người và các loài động vật, glycogen được tổng hợp chủ yếu ở gan, cơ và được dùng làm nguồn năng lượng dự trữ ngắn hạn (trong ngày).\n- Cellulose: Phân tử cellulose được cấu tạo từ các phân tử glucose liên kết với nhau tạo thành mạch thẳng, không phân nhánh. Nhiều phân tử cellulose liên kết với nhau tạo thành bó sợi dài nằm song song có cấu trúc vững chắc (H 5.3C). Cellulose là thành phần chính cấu tạo nên thành tế bào của thực vật.\n- Chitin: Chitin là một loại đường được cấu tạo từ nhiều đơn phân là phân tử glucose hoặc galactose, đã được gắn thêm nhóm chức amino thành glucosamine hoặc galactosamine. Chitin là loại đường cấu tạo nên bộ khung xương ngoài của nhiều loài như tôm, cua, nhện và thành tế bào của nhiều loài nấm." },
          { title: "2. Lipid – Chất béo", content: "a) Mỡ và dầu: Lipid thường gặp là dầu và mỡ, được cấu tạo gồm một phân tử glycerol liên kết với ba phân tử acid béo (H 5.4).\nDầu và mỡ là chất dự trữ năng lượng của tế bào và cơ thể. Cơ thể người và động vật dự trữ mỡ trong các tế bào mỡ, bao phủ các cơ quan và dùng như một lớp cách nhiệt giữ ấm cho cơ thể người và nhiều động vật xứ lạnh. Những động vật sống ở sa mạc như lạc đà sử dụng mỡ ở các bướu làm nguồn cung cấp nước nên chúng có thể đi trong sa mạc nhiều ngày mà không cần uống nước. Trong tế bào, mỡ còn có vai trò rất quan trọng trong việc dung môi hoà tan các loại vitamin quan trọng trong cơ thể như vitamin A, D, E, K,...\nb) Phospholipid: Phospholipid là một loại chất béo phức tạp, được cấu tạo từ một phân tử glycerol liên kết với hai acid béo ở một đầu, đầu còn lại liên kết với nhóm phosphate (−PO₄²⁻). Nhóm phosphate thường liên kết với một nhóm, được gọi là choline, tạo thành phosphatidylcholine (H 5.5A). Với cấu trúc như vậy, phospholipid được xem là một phân tử lưỡng cực, một đầu có tính ưa nước và hai đuôi acid béo kị nước. Nhờ có cấu trúc đặc biệt như vậy, phospholipid có vai trò quan trọng trong việc tạo nên các loại màng của các tế bào (H 5.5B).\nc) Steroid: Steroid là một loại lipid đặc biệt, không chứa phân tử acid béo, các nguyên tử carbon của chúng liên kết với nhau tạo nên 4 vòng (H 5.6).\nSteroid bao gồm nhiều loại như cholesterol, testosterone, estrogen, vitamin D và cortisone,... Cholesterol là thành phần quan trọng của màng tế bào, đồng thời cũng là chất tiền thân để tạo nên testosterone và estrogen là những hormone phát triển các đặc điểm khác biệt giữa nam và nữ. Cholesterol không tan trong nước nên để vận chuyển trong máu, chúng phải liên kết với các loại protein nhất định tạo nên các phân tử lipoprotein.\nd) Carotenoid: Carotenoid là nhóm sắc tố màu vàng cam ở thực vật có bản chất là một loại lipid. Con người và động vật khi ăn carotenoid sẽ chuyển hoá nó thành vitamin A, chất này sau đó được chuyển đổi thành sắc tố võng mạc, rất có lợi cho thị giác." },
          { title: "3. Protein – chất đạm", content: "a) Chức năng của protein: Trong cơ thể, protein có rất nhiều chức năng, có thể nói protein tham gia vào hầu hết tất cả các hoạt động sống của tế bào. Một số chức năng của protein được trình bày dưới đây:\n- Cấu trúc: Nhiều loại protein tham gia cấu trúc nên các bào quan, bộ khung tế bào.\n- Xúc tác: Protein cấu tạo nên các enzyme xúc tác cho các phản ứng hoá học trong tế bào.\n- Bảo vệ: Các kháng thể có bản chất là protein giữ chức năng chống lại các phân tử kháng nguyên từ môi trường ngoài xâm nhập vào cơ thể qua các tác nhân như vi khuẩn, virus,...\n- Vận động: Protein giúp tế bào thay đổi hình dạng cũng như di chuyển.\n- Tiếp nhận thông tin: Protein cấu tạo nên các thụ thể của tế bào, giúp tiếp nhận thông tin từ bên trong cũng như bên ngoài tế bào.\n- Điều hoà: Nhiều hormone có bản chất là protein đóng vai trò điều hoà hoạt động của gene trong tế bào, điều hoà các chức năng sinh lí của cơ thể.\nb) Cấu trúc của protein: Protein được cấu tạo từ các đơn phân là amino acid. Mỗi amino acid đều được cấu tạo từ một nguyên tử carbon trung tâm liên kết với một nhóm amino (–NH₂), một nhóm carboxyl (–COOH), một nguyên tử H và một chuỗi bên còn gọi là nhóm R (H 5.7). Hai amino acid liên kết với nhau bằng liên kết peptide. Nhiều amino acid liên kết với nhau tạo nên một chuỗi các amino acid được gọi là chuỗi polypeptide. Có 20 loại amino acid tham gia cấu tạo nên các protein. Trong số này có 9 loại amino acid không thay thế vì cơ thể người không tổng hợp được mà phải lấy từ thức ăn. Từ 20 loại amino acid có thể tạo ra vô số loại chuỗi polypeptide khác nhau về số lượng, thành phần và trình tự sắp xếp các amino acid. Trình tự các amino acid của protein có tính đặc thù và quyết định chức năng của protein. Chức năng của protein còn phụ thuộc vào các bậc cấu trúc của nó. Protein có 4 bậc cấu trúc (H 5.8): Cấu trúc bậc 1, bậc 2, bậc 3 và bậc 4." },
          { title: "4. Nucleic acid", content: "Nucleic acid hay còn gọi là acid nhân vì bạn đầu được phát hiện chủ yếu ở trong nhân tế bào. Có hai loại acid nhân là DNA và RNA.\na) Deoxyribonucleic acid – DNA: DNA có chức năng mang, bảo quản và truyền đạt thông tin di truyền – những chỉ dẫn cho tế bào sản sinh ra các loại protein và từ protein tạo nên mọi phân tử cần thiết cho tế bào nên tế bào. Nhờ có cấu trúc hoá học đặc biệt mà các phân tử DNA được nhân lên và truyền lại cho các tế bào con gần như nguyên vẹn cả về số lượng lẫn chất lượng. Quá trình truyền đạt thông tin di truyền bên trong tế bào cũng như giữa các thế hệ tế bào được thể hiện qua sơ đồ: DNA → mRNA → Protein.\nb) Ribonucleic acid – RNA: Khác với DNA, các loại RNA được cấu tạo một chuỗi polynucleotide. Mỗi nucleotide trong RNA có chứa base, đường ribose (đường 5 carbon) và gốc phosphate (–PO₄²⁻). Tuy nhiên, base trong RNA gồm adenine, guanine, cytosine và uracil (U) mà không có thymine.\nCó nhiều loại phân tử RNA khác nhau và do vậy chúng cũng khác nhau về đặc điểm cấu trúc. Chức năng của RNA rất đa dạng: làm khuôn để tổng hợp protein, vận chuyển amino acid, cấu tạo nên ribosome, điều hoà hoạt động gene, xúc tác cho một số loại phản ứng hoá học." }
        ]
      }
    ]
  },
  'chap1-2': { // Bài 6
    summary: {
      intro: "Bài thực hành giúp nhận biết các phân tử sinh học chính (đường, lipid, protein) thông qua các phản ứng hóa học đặc trưng với các loại thuốc thử như Benedict và Biuret, củng cố kiến thức lí thuyết và rèn luyện kĩ năng phòng thí nghiệm.",
      coreKnowledge: [
        { title: "Nhận biết đường khử", content: "Sử dụng thuốc thử Benedict. Khi đun nóng, dung dịch sẽ chuyển từ màu xanh lam sang màu lục, vàng, cam và đỏ gạch nếu có sự hiện diện của đường khử (glucose).", emoji: "🧪" },
        { title: "Nhận biết lipid", content: "Sử dụng phép thử nhũ tương. Lipid không tan trong nước nhưng tan trong cồn. Khi cho dung dịch này vào nước, lipid sẽ tạo thành các giọt nhỏ li ti, làm đục dung dịch (huyền phù).", emoji: "💧" },
        { title: "Nhận biết protein", content: "Sử dụng thuốc thử Biuret (dung dịch CuSO₄ trong môi trường kiềm). Phản ứng tạo phức màu tím hoặc tím hồng đặc trưng khi có từ hai liên kết peptide trở lên.", emoji: "🟣" }
      ],
      vocabulary: [
        { term: "Thuốc thử Benedict", definition: "Dung dịch chứa đồng (II) sulfate, natri carbonate và natri citrate, dùng để phát hiện sự có mặt của đường khử." },
        { term: "Phép thử Biuret", definition: "Phản ứng hóa học dùng để định tính sự có mặt của liên kết peptide, qua đó xác định sự có mặt của protein." },
        { term: "Nhũ tương", definition: "Một hệ phân tán của hai chất lỏng không hòa tan vào nhau, trong đó một chất lỏng (pha phân tán) được phân tán trong chất lỏng kia (môi trường phân tán) dưới dạng các giọt nhỏ." }
      ]
    },
    examples: [
      { title: "Kiểm tra đường trong nước tiểu", scenario: "Bác sĩ dùng que thử có tẩm thuốc thử tương tự Benedict để kiểm tra nhanh lượng đường trong nước tiểu của bệnh nhân tiểu đường.", explanation: "Glucose trong nước tiểu sẽ phản ứng với thuốc thử, làm que thử đổi màu. Mức độ đổi màu cho biết nồng độ đường cao hay thấp, giúp chẩn đoán và theo dõi bệnh.", emoji: "🩺" },
      { title: "Kiểm tra lòng trắng trứng", scenario: "Cho thuốc thử Biuret vào dung dịch lòng trắng trứng, dung dịch chuyển sang màu tím.", explanation: "Lòng trắng trứng chứa nhiều protein (albumin). Các liên kết peptide trong protein phản ứng với thuốc thử Biuret tạo ra phức chất màu tím, chứng tỏ sự hiện diện của protein.", emoji: "🥚" }
    ],
    textbook: [
      {
        header: "I. YÊU CẦU CẦN ĐẠT",
        subsections: [
            { title: "", content: "Sau khi học xong phần thực hành, học sinh cần đạt được các yêu cầu sau:\n- Tiến hành được thí nghiệm nhận biết các thành phần hoá học có trong tế bào như đường đơn, tinh bột, protein và lipid.\n- Áp dụng được nguyên lí của các phản ứng hoá học đặc thù để nhận biết được từng loại phân tử sinh học.\n- Có được kĩ năng thao tác trong phòng thí nghiệm như pha hoá chất, sử dụng các dụng cụ và đặc biệt là các kĩ thuật an toàn phòng thí nghiệm, tránh bị bỏng, hoá chất bắn vào cơ thể và quần áo." }
        ]
      },
      {
        header: "II. CHUẨN BỊ",
        subsections: [
          { title: "1. Dụng cụ, thiết bị", content: "Ống nghiệm các loại, bình thuỷ tinh chịu nhiệt, pipet, ống nhỏ giọt, đèn cồn, kẹp ống nghiệm." },
          { title: "2. Nguyên liệu, hoá chất", content: "Thuốc thử Benedict (C₆H₁₂O₆/CuNa₂O₇·5H₂O), nước cất, cồn ethanol tuyệt đối, dung dịch sodium hydroxide loãng (NaOH 10%), hydrochloric acid (HCl), copper (II) sulphate (CuSO₄·5H₂O), dung dịch albumin 1%.\nĐường glucose, lòng trắng trứng, dầu ăn." }
        ]
      },
      {
        header: "III. CÁCH TIẾN HÀNH THÍ NGHIỆM",
        subsections: [
          { title: "1. Nhận biết đường glucose", content: "a) Nguyên lí: Glucose được nhận biết bằng phép thử Benedict. Trong phép thử này, dung dịch copper sulphate trong môi trường kiềm có màu xanh đặc trưng, khi phản ứng với glucose (đun nóng) tạo nên chất kết tủa màu đỏ gạch.\nGlucose + Cu²⁺ (màu xanh) → Đường bị oxy hoá + Cu⁺ (màu đỏ gạch)\nb) Quy trình thí nghiệm: \nBước 1: Hoà tan khoảng 20 g glucose vào trong nước được dung dịch glucose loãng.\nBước 2: Trộn dung dịch glucose với dung dịch Benedict (thể tích bằng nhau) trong ống nghiệm rồi đun cách thuỷ.\nBước 3: Quan sát sự thay đổi màu trong ống nghiệm: Màu của dung dịch trong ống nghiệm sẽ chuyển dần từ xanh lục sang vàng và cam rồi xuất hiện kết tủa màu đỏ gạch ở dưới đáy ống nghiệm có màu đỏ của copper (I) oxide (Cu₂O)." },
          { title: "2. Nhận biết lipid bằng phép thử nhũ tương", content: "a) Nguyên lí: Lipid không tan trong nước nhưng tan trong cồn và các dung môi không phân cực như chloroform, ether, benzen,... Vì vậy, có thể nhận biết sự có mặt của lipid thông qua phép thử được gọi là phép thử nhũ tương.\nb) Quy trình thí nghiệm:\nBước 1: Cho hai giọt dầu ăn vào trong ống nghiệm cùng với 5 mL cồn tuyệt đối rồi lắc mạnh cho đến khi dầu hoà tan hoàn toàn.\nBước 2: Rót dung dịch này sang ống nghiệm chứa vài mL nước.\nBước 3: Quan sát màu sắc trong ống nghiệm: huyền phù trắng sữa sẽ xuất hiện trong ống nghiệm. Các giọt huyền phù phân xạ và hấp thụ ánh sáng, làm cho dung dịch trở nên trắng như những đám mây. Nếu dung dịch cồn không chứa triglyceride thì cồn sẽ hoà tan trong nước và khí đó ánh sáng sẽ xuyên qua hỗn hợp làm cho dung dịch trong và nước trở nên trong suốt." },
          { title: "3. Nhận biết protein bằng phép thử Biuret (Biuret test)", content: "a) Nguyên lí: Tất cả các protein đều có các liên kết peptide chứa nguyên tử nitrogen. Những nguyên tử này liên kết với Cu²⁺ tạo thành phức chất có màu tím đỏ. Đây chính là đặc điểm nhận biết protein trong phép thử Biuret.\nb) Quy trình thí nghiệm:\nBước 1: Cho một ít dung dịch albumin 1% hoặc một lượng nhỏ lòng trắng trứng vào ống nghiệm cùng với 5 mL dung dịch NaOH loãng.\nBước 2: Thêm vào ống nghiệm 5 mL dung dịch CuSO₄ 1%.\nBước 3: Quan sát sự thay đổi trong ống nghiệm: dung dịch sẽ chuyển dần từ màu xanh sang màu xanh tím sau vài phút." }
        ]
      },
      {
        header: "IV. THU HOẠCH",
        subsections: [
          { title: "BÁO CÁO THỰC HÀNH", content: "Học sinh viết báo cáo thực hành theo các nội dung sau:\n1. Mục đích\n2. Cách tiến hành\n3. Giải thích và kết luận\n4. Trả lời câu hỏi\n5. Quy trình thí nghiệm nhận biết protein và glucose trong thực phẩm có gì khác với quy trình thí nghiệm nhận biết lipid? Vì sao lại có sự khác nhau đó?" }
        ]
      }
    ]
  },
  'chap2-0': { // Bài 7
    summary: {
      intro: "Tế bào nhân sơ là dạng tế bào đơn giản, có kích thước nhỏ, chưa có nhân hoàn chỉnh và không có các bào quan có màng bao bọc. Chúng bao gồm vi khuẩn và archaea, có khả năng thích nghi cao với nhiều môi trường sống khác nhau.",
      coreKnowledge: [
        { title: "Đặc điểm chung", content: "Kích thước rất nhỏ (1-5 µm), tỉ lệ S/V lớn giúp trao đổi chất nhanh, sinh sản nhanh. Cấu trúc đơn giản, chưa có nhân chính thức.", emoji: "🦠" },
        { title: "Cấu tạo", content: "Gồm 3 thành phần chính: màng sinh chất, tế bào chất (chứa ribosome và vùng nhân), và các thành phần bên ngoài màng (thành tế bào, vỏ nhầy, lông, roi).", emoji: "🏗️" },
        { title: "Vùng nhân (Nucleoid)", content: "Chứa một phân tử DNA vòng, trần (không liên kết với protein histone) là vật chất di truyền của tế bào. Có thể có thêm các plasmid.", emoji: "🧬" },
        { title: "Thành tế bào", content: "Cấu tạo từ peptidoglycan, quy định hình dạng tế bào và bảo vệ tế bào. Dựa vào cấu trúc thành tế bào, vi khuẩn được chia làm 2 loại: Gram dương (Gr+) và Gram âm (Gr-).", emoji: "🧱" }
      ],
      vocabulary: [
        { term: "Tế bào nhân sơ (Prokaryote)", definition: "Tế bào không có nhân được bao bọc bởi màng và không có các bào quan có màng." },
        { term: "Peptidoglycan", definition: "Một loại polymer tạo nên thành tế bào của vi khuẩn, gồm các chuỗi carbohydrate liên kết với nhau bằng các peptide ngắn." },
        { term: "Plasmid", definition: "Một phân tử DNA nhỏ, dạng vòng, nằm ngoài vùng nhân của tế bào vi khuẩn, thường chứa các gene có lợi như gene kháng kháng sinh." },
        { term: "Nhuộm Gram", definition: "Phương pháp nhuộm dùng để phân biệt hai nhóm vi khuẩn chính (Gram dương và Gram âm) dựa trên sự khác biệt về cấu trúc thành tế bào." }
      ]
    },
    examples: [
      { title: "Vi khuẩn E. coli trong ruột", scenario: "Vi khuẩn Escherichia coli (E. coli) sống cộng sinh trong ruột người, giúp sản xuất vitamin K và ngăn chặn sự phát triển của các vi khuẩn có hại.", explanation: "E. coli là một vi khuẩn Gram âm, có cấu trúc tế bào nhân sơ điển hình. Tốc độ sinh sản nhanh của nó (khoảng 20 phút/lần) cho phép nó tồn tại và phát triển mạnh mẽ trong môi trường ruột.", emoji: "👤" },
      { title: "Vi khuẩn gây bệnh lao", scenario: "Vi khuẩn Mycobacterium tuberculosis có lớp thành tế bào đặc biệt chứa nhiều lipid, giúp chúng chống lại hệ thống miễn dịch của cơ thể và gây bệnh lao.", explanation: "Cấu trúc đặc biệt của thành tế bào (không phải Gr+ hay Gr-) là một đặc điểm thích nghi quan trọng, giúp vi khuẩn nhân sơ tồn tại trong các điều kiện khắc nghiệt, ví dụ như bên trong các tế bào miễn dịch của vật chủ.", emoji: "🫁" }
    ],
    textbook: [
      {
        header: "I. ĐẶC ĐIỂM CHUNG CỦA TẾ BÀO NHÂN SƠ",
        subsections: [
          { title: "", content: "Hầu hết các loại tế bào, kể cả nhân sơ và nhân thực, đều có kích thước rất nhỏ, thường chỉ quan sát được dưới kính hiển vi (H 7.1). Tế bào nhân sơ điển hình có kích thước dao động từ 1 µm đến 5 µm, bằng khoảng 1/10 tế bào nhân thực. Kích thước nhỏ đem lại ưu thế cho tế bào nhân sơ: Tỉ lệ S/V (diện tích bề mặt tế bào/thể tích tế bào) lớn dẫn đến tốc độ trao đổi chất với môi trường nhanh, nhờ đó tốc độ chuyển hoá vật chất, năng lượng và sinh sản nhanh nên chúng là loài sinh vật thích nghi nhất trên Trái Đất. So với tế bào nhân thực, tế bào nhân sơ chưa có màng nhân ngăn cách giữa chất nhân và tế bào chất, chưa có hệ thống nội màng chia các bào quan có màng bao bọc và bộ khung xương tế bào. Tế bào nhân sơ cấu trúc đơn giản, có nhiều hình dạng khác nhau, phổ biến nhất là hình cầu, hình que và hình xoắn." }
        ]
      },
      {
        header: "II. CẤU TẠO TẾ BÀO NHÂN SƠ",
        subsections: [
          { title: "1. Lông, roi và màng ngoài", content: "Lông và roi là những cấu trúc dạng sợi dài, nhô ra khỏi màng và thành tế bào.\nRoi được cấu tạo từ sợi protein, là cơ quan vận động của tế bào. Các tế bào vi khuẩn có thể có một hoặc một vài roi.\nLông ngắn hơn nhưng có số lượng nhiều hơn roi. Lông là bộ phận giúp các tế bào vi khuẩn bám dính, tiếp hợp với nhau hoặc bám vào bề mặt tế bào của sinh vật khác. Ví dụ: vi khuẩn Helicobacter pylori dùng lông bám dính vào tế bào niêm mạc dạ dày, gây bệnh viêm loét dạ dày.\nỞ một số loại vi khuẩn, thành tế bào được bao bọc bởi một lớp màng ngoài có cấu tạo chủ yếu từ lipopolysaccharide. Màng ngoài của vi khuẩn giúp bảo vệ chúng tránh khỏi sự tấn công của các tế bào bạch cầu." },
          { title: "2. Thành tế bào và màng tế bào", content: "Hầu hết vi khuẩn đều có thành tế bào dày từ 10 nm đến 20 nm, được cấu tạo bởi peptidoglycan. Dựa vào cấu tạo của thành tế bào (H 7.3), vi khuẩn được chia làm 2 nhóm: vi khuẩn Gram dương (Gr+), có thành dày bắt màu tím khi nhuộm Gram và vi khuẩn Gram âm (Gr-), có thành mỏng bắt màu đỏ khi nhuộm Gram. Thành tế bào như một cái khung bên ngoài, có tác dụng giữ ổn định hình dạng và bảo vệ tế bào. Một số loại thuốc kháng sinh như penicillin diệt vi khuẩn bằng cách ngăn không cho vi khuẩn tạo được thành tế bào (H 7.3), đặc biệt là đối với vi khuẩn Gr+." },
          { title: "3. Tế bào chất", content: "Nằm giữa màng tế bào và vùng nhân là khối tế bào chất. Thành phần chính của tế bào chất là bào tương. Bào tương là dạng keo lỏng có thành phần chủ yếu là nước, các hợp chất hữu cơ và vô cơ khác nhau. Ngoài ra, trong bào tương có các hạt dự trữ (đường, lipid) và nhiều ribosome (10 000 đến 100 000) là nơi xảy ra quá trình tổng hợp protein của tế bào. Tế bào chất là nơi diễn ra các phản ứng hoá sinh, đảm bảo duy trì các hoạt động sống của tế bào." },
          { title: "4. Vùng nhân", content: "Vùng nhân của tế bào vi khuẩn không có màng bao bọc và hầu hết chỉ chứa một phân tử DNA dạng vòng, mạch kép (H 7.2). Phân tử DNA này mang thông tin di truyền điều khiển mọi hoạt động sống của tế bào vi khuẩn. Ngoài vùng nhân, một số tế bào vi khuẩn còn có thêm các phân tử DNA nhỏ, dạng vòng, mạch kép khác được gọi là các plasmid. Trên các plasmid thường chứa nhiều gene kháng thuốc kháng sinh. Các gene kháng thuốc kháng sinh có thể được truyền từ tế bào vi khuẩn này sang tế bào vi khuẩn khác bằng con đường tiếp hợp. Trong kĩ thuật chuyển gene, các plasmid thường được sử dụng làm vector để biến nạp gene tái tổ hợp từ tế bào này sang tế bào khác. Tuy nhiên, nếu thiếu plasmid thì vi khuẩn vẫn sinh trưởng bình thường." }
        ]
      }
    ]
  },
  'chap2-1': { // Bài 8
    summary: {
      intro: "Tế bào nhân thực là đơn vị cấu trúc phức tạp của động vật, thực vật, nấm và nguyên sinh vật. Đặc trưng bởi sự hiện diện của nhân có màng bao bọc và hệ thống các bào quan chuyên hóa, thực hiện các chức năng sống khác nhau.",
      coreKnowledge: [
        { title: "Nhân tế bào", content: "Là trung tâm điều khiển mọi hoạt động sống của tế bào, chứa vật chất di truyền (DNA). Được bao bọc bởi màng kép có các lỗ nhân.", emoji: "🧠" },
        { title: "Hệ thống màng", content: "Gồm lưới nội chất (tổng hợp protein và lipid), bộ máy Golgi (biến đổi, đóng gói sản phẩm) và lysosome (tiêu hóa nội bào).", emoji: "🏭" },
        { title: "Bào quan năng lượng", content: "Gồm ti thể (trung tâm hô hấp tế bào, tạo ATP) và lục lạp (ở thực vật, nơi diễn ra quang hợp). Cả hai đều có màng kép và DNA riêng.", emoji: "⚡" },
        { title: "Khác biệt chính", content: "Tế bào thực vật có thành cellulose, lục lạp và không bào trung tâm lớn, trong khi tế bào động vật không có các cấu trúc này nhưng có trung thể.", emoji: "🌱🆚🐒" }
      ],
      vocabulary: [
        { term: "Tế bào nhân thực (Eukaryote)", definition: "Tế bào có nhân hoàn chỉnh với màng nhân bao bọc và có các bào quan có màng." },
        { term: "Bào quan", definition: "Một cấu trúc có màng bao bọc bên trong tế bào nhân thực, thực hiện một chức năng chuyên biệt." },
        { term: "Ribosome", definition: "Bào quan không có màng, là nơi tổng hợp protein. Có ở cả tế bào nhân sơ và nhân thực." },
        { term: "Màng sinh chất", definition: "Lớp màng kép phospholipid bao bọc tế bào, kiểm soát sự trao đổi chất giữa tế bào và môi trường." }
      ]
    },
    examples: [
      { title: "Tế bào cơ và ti thể", scenario: "Các tế bào cơ của một vận động viên điền kinh chứa số lượng ti thể rất lớn so với tế bào da.", explanation: "Tế bào cơ cần rất nhiều năng lượng (ATP) để co duỗi. Do đó, chúng có nhiều ti thể - 'nhà máy điện' của tế bào - để đáp ứng nhu cầu năng lượng cao này.", emoji: "🏃‍♂️" },
      { title: "Tế bào gan và lưới nội chất trơn", scenario: "Tế bào gan của người thường xuyên uống rượu bia có lưới nội chất trơn phát triển hơn người bình thường.", explanation: "Lưới nội chất trơn có chức năng khử độc. Khi cơ thể tiếp xúc với chất độc (như cồn), tế bào gan sẽ tăng cường phát triển lưới nội chất trơn để phân giải và loại bỏ chất độc đó.", emoji: "🍻" }
    ],
    textbook: [
      {
        header: "I. ĐẶC ĐIỂM CHUNG CỦA TẾ BÀO NHÂN THỰC",
        subsections: [
          { title: "", content: "Tế bào nhân thực có kích thước lớn và có cấu tạo phức tạp. Tế bào nhân thực đã có nhân chính thức với màng nhân ngăn cách chất nhân và tế bào chất, bộ khung xương tế bào cùng với hệ thống nội màng và hàng loạt các bào quan có màng bao bọc. Ngoài các đặc điểm chung, các loài sinh vật nhân thực khác nhau có các đặc điểm riêng, chất nền ngoại bào và bộ phận kết nối các tế bào." }
        ]
      },
      {
        header: "II. CẤU TẠO TẾ BÀO NHÂN THỰC",
        subsections: [
          { title: "1. Nhân – trung tâm thông tin của tế bào", content: "Nhân tế bào là cấu trúc lớn nhất có màng bao bọc. Mỗi tế bào nhân thực thường chỉ có một nhân. Tuy nhiên, ở một số tế bào nấm và sinh vật khác, một tế bào có thể có một vài nhân. Nhân tế bào có hình dạng hình cầu, với đường kính khoảng 5 µm và được bao bọc bởi lớp kép phospholipid và protein. Trên màng nhân có rất nhiều lỗ nhỏ đảm bảo cho các chất có thể ra vào nhân (H 8.2).\nTrong nhân có chất nhiễm sắc chứa DNA. Những thông tin trên DNA sẽ được phiên mã thành các phân tử RNA, sau đó được đưa ra khỏi nhân để tham gia tổng hợp protein – phân tử giữ chức năng cấu trúc và vận hành, các hoạt động sống của tế bào. Vì vậy, nhân là trung tâm điều khiển các hoạt động sống của tế bào, có vai trò rất quan trọng trong di truyền nên không có nhân thì tế bào không thể tồn tại và phát triển được. Trong nhân còn có một hoặc một vài hạch nhân (nhân con), là nơi diễn ra quá trình tổng hợp các phân tử rRNA." },
          { title: "2. Ribosome – “nhà máy” tổng hợp protein của tế bào", content: "Ribosome là bào quan không có màng bao bọc, có dạng hình cầu, đường kính khoảng 150 Å. Thành phần hoá học của ribosome gồm rRNA (khoảng 80 % – 90 %) và protein. Mỗi ribosome được tạo bởi hai tiểu đơn vị có kích thước khác nhau: tiểu đơn vị lớn và tiểu đơn vị nhỏ (H 8.3). Ribosome là nơi diễn ra quá trình tổng hợp protein. Ở các tế bào có tốc độ tổng hợp protein cao, số lượng ribosome trong một tế bào khá lớn, có thể lên tới vài triệu như tế bào tuyến tuỵ ở người." },
          { title: "3. Lưới nội chất – “bến cảng” và “nhà máy” tổng hợp sinh học", content: "Lưới nội chất là một hệ thống gồm các ống và các túi dẹp chứa dịch nối thông nhau thành một mạng lưới, gồm lưới nội chất hạt và lưới nội chất trơn.\nLưới nội chất hạt gồm hệ thống các đường ống tạo nên bởi lớp kép phospholipid, một đầu liên kết với màng nhân, đầu kia liên kết với lưới nội chất trơn (H 8.4). Trên màng lưới nội chất hạt có các hạt ribosome. Protein tổng hợp được ở ribosome sẽ được đưa vào trong lưới nội chất để chuyển qua các túi vận chuyển (túi tiết) và vận chuyển tới bộ máy Golgi.\nLưới nội chất trơn là hệ thống màng dạng ống dẹp thông với lưới nội chất hạt, có ít hoặc không có ribosome. Lưới nội chất trơn chứa các enzyme tham gia tổng hợp nhiều loại lipid, chuyển hoá đường, khử độc và là kho dự trữ Ca²⁺ để thực hiện nhiều chức năng khác nhau như co cơ và truyền tin tế bào,... Lưới nội chất trơn còn là nơi tổng hợp nên các sterol và phospholipid cấu tạo nên các loại màng của tế bào và các hormone sinh dục, tổng hợp và dự trữ triglyceride, tổng hợp và phân giải glycogen giúp điều hoà đường huyết.\nCác tế bào gan có lưới nội chất phát triển mạnh chứa các enzyme tham gia vào quá trình khử độc các chất như rượu và nhiều loại hoá chất độc hại khác. Người uống nhiều rượu, bia, trong tế bào gan của họ có lưới nội chất phát triển hơn nhiều so với ở người không uống rượu và nguy cơ tổn thương gan dẫn đến ung thư gan cũng tăng cao." },
          { title: "4. Bộ máy Golgi – nơi phân loại, đóng gói và phân phối sản phẩm của tế bào", content: "Bộ máy Golgi gồm các túi dẹp nằm song song với nhau nhưng tách rời nhau (H 8.5). Bộ máy Golgi là nơi tập trung chế biến, lắp ráp, đóng gói các phân tử protein, lipid rồi phân phối chúng đến những nơi cần thiết. Ví dụ: Protein được tổng hợp từ ribosome trên lưới nội chất hạt được gửi đến bộ máy Golgi bằng các túi vận chuyển. Tại đây, chúng được gắn thêm các chất khác, như chuỗi đường ngắn tạo nên glycoprotein rồi bao gói vào trong các túi vận chuyển để chuyển đến các vị trí khác nhau trong tế bào hoặc xuất ra ngoài màng tế bào." },
          { title: "5. Lysosome – “nhà máy” tái chế rác thải và chế biến thức ăn của tế bào", content: "Lysosome là bào quan có dạng túi có màng đơn, chứa các loại enzyme thuỷ phân protein, nucleic acid, carbohydrate, lipid, các bào quan và thậm chí cả các tế bào cần thay thế. Lysosome được hình thành từ bộ máy Golgi và có ở các tế bào động vật. Những tế bào bị tổn thương, các tế bào và bào quan quá hạn sử dụng được enzyme của lysosome phân giải, lấy những gì có thể tái sử dụng, còn chất thải được xuất ra ngoài tế bào. Lysosome không chỉ làm nhiệm vụ tái chế mà còn hỗ trợ tế bào tiêu hoá thức ăn theo con đường thực bào." },
          { title: "6. Không bào – “túi bảo dưỡng” đa năng của tế bào", content: "Ở tế bào thực vật, không bào là bào quan có một lớp màng bao bọc. Không bào lớn nằm giữa tế bào được gọi là không bào trung tâm (H 8.7a) giúp điều hoà áp suất thẩm thấu trong tế bào. Không bào thường được bắt nguồn từ lưới nội chất và bộ máy Golgi.\nMột số không bào ở tế bào của nhiều loại lá, hoa và quả có chứa các sắc tố nhằm thu hút côn trùng đến thụ phấn, các động vật đến ăn và phát tán hạt. Số khác được dùng làm kho chứa các chất như carbohydrate, ion, các loại muối, chất phế thải, các enzyme thuỷ phân các đại phân tử sinh học cũng như các enzyme khử các chất độc từ bên ngoài xâm nhập vào tế bào. Ví dụ: qua chanh có vị chua vì không bào của chúng chứa acid chanh (citric acid)." },
          { title: "7. Peroxysome – bào quan giải độc và chuyển hoá lipid", content: "Peroxysome là bào quan có dạng hình cầu, được bao bọc bởi một màng đơn mỏng, thường nằm gần lưới nội chất. Tuỳ nhiên, không có nguồn gốc từ hệ thống màng nội bào. Vì chứa enzyme phân giải H₂O₂ (peroxide) nên bào quan này có tên là peroxysome. H₂O₂ là một loại chất dễ phân giải thành các gốc oxy tự do làm tổn thương tế bào được sinh ra trong quá trình hoá học trong tế bào. Các tế bào gan của người có nhiều peroxysome chứa các enzyme khử các chất độc tự máu đưa tới. Một số peroxysome có enzyme phân giải các chất béo thành cholesterol và các dạng lipid khác. Một số enzyme phân giải chất béo trong peroxysome ở tế bào não bị mất chức năng, lipid bị tích tụ trong não làm tổn thương não và có thể dẫn đến tử vong." },
          { title: "8. Ti thể – “nhà máy điện” của tế bào", content: "Ti thể là một loại bào quan có màng kép. Lớp màng ngoài trơn nhẵn, màng trong gấp nếp hình răng lược tạo nhiều mào (cristae) ngăn ti thể thành hai khoang. Khoang ngoài là khoang không gian giữa hai màng, chứa ion H⁺ có vai trò quan trọng trong quá trình tổng hợp ATP. Khoang trong là chất nền chứa các enzyme tham gia quá trình tổng hợp ATP. Ngoài ra, trong chất nền còn chứa nhiều phân tử DNA nhỏ, dạng vòng và ribosome. Do đó, ti thể có khả năng tự nhân đôi và tổng hợp protein cho riêng mình. Ti thể là nơi diễn ra quá trình phân giải carbohydrate giải phóng năng lượng cung cấp cho mọi hoạt động sống, đồng thời tạo nhiều sản phẩm trung gian cho quá trình chuyển hoá vật chất của tế bào." },
          { title: "9. Lục lạp – bào quan hấp thụ năng lượng ánh sáng", content: "Lục lạp là bào quan hấp thụ năng lượng ánh sáng của tế bào thực vật nhờ tác dụng của loại bào quan với hai lớp màng được gọi là lục lạp. Bào quan này có khả năng thu nhận ánh sáng mặt trời thông qua quá trình quang hợp để tạo ra nguồn carbohydrate không chỉ cho riêng mình mà cho các loài sinh vật. Lục lạp thường có hình bầu dục. Mỗi tế bào thường có nhiều lục lạp.\nLớp màng ngoài của lục lạp tạo khoang không hẹp với lớp màng trong, màng trong không gấp khúc. Bên trong lục lạp có một hệ thống màng ở dạng các túi dẹp, được gọi là thylakoid. Trên bề mặt của màng thylakoid chứa chất diệp lục cùng các enzyme và protein tham gia vào quá trình quang hợp (H 8.9a). Các túi này xếp chồng lên nhau và nối thông với nhau bằng các phiến màng tạo nên cấu trúc được gọi là granum. Mỗi lục lạp có nhiều granum. Bao quanh các granum là vật chất dạng lỏng được gọi là chất nền (stroma).\nStroma chứa hệ enzyme tham gia vào quá trình cố định CO₂ trong quang hợp, ngoài ra, còn chứa nhiều phân tử DNA dạng vòng và ribosome. Giống như ti thể, lục lạp cũng có khả năng tự nhân đôi và một số gene của chúng tổng hợp được các protein tham gia vào quá trình quang hợp.\nỞ tế bào thực vật, lục lạp và ti thể có mối quan hệ mật thiết với nhau trong quá trình chuyển hoá nội bào (H 8.9B)." },
          { title: "10. Tế bào chất và bộ khung xương tế bào", content: "a) Tế bào chất: Tế bào chất là nơi diễn ra các hoạt động sống của tế bào. Tế bào chất gồm bào tương và các bào quan khác. Bào tương là vật chất dạng keo có thành phần chủ yếu là nước và các phân tử sinh học. Ngoài các bào quan, trong bào tương còn có mạng lưới các protein liên kết với nhau hình thành nên bộ khung của tế bào giống như bộ khung của cơ thể người.\nb) Bộ khung xương tế bào: Bộ khung xương tế bào là hệ thống mạng vi sợi, sợi trung gian và vi ống kết nối với nhau (H 8.10). Vai trò chính của bộ khung xương tế bào là nâng đỡ, duy trì hình dạng tế bào, neo giữ bào quan và các enzyme, hình thành nên trung thể có vai trò trong quá trình phân bào, hỗ trợ các bộ phận hay cả tế bào di chuyển." },
          { title: "11. Cấu trúc và chức năng của màng tế bào", content: "a) Cấu trúc: Năm 1972, hai nhà khoa học là Seymour Jonathan Singer và Garth Nicolson đã đưa ra mô hình cấu trúc màng tế bào được gọi là mô hình khảm lỏng (khảm động). Theo mô hình này, màng tế bào được cấu tạo từ thành phần chính là lớp kép phospholipid và các loại protein (H 8.11). Lớp kép phospholipid có cấu trúc lỏng lẻo. Nhờ đó, các phân tử trên màng dễ dàng di chuyển và tế bào cũng dễ dàng biến đổi hình dạng khi cần.\nb) Chức năng: Màng tế bào có chức năng quan trọng trong việc duy trì sự sống ở cấp độ tế bào. Có thể kể ra một số chức năng chính của màng như sau:\n- Ngăn cách tế bào chất với môi trường bên ngoài, đảm bảo cho các cấu trúc tế bào cũng như môi trường nội bào bị ảnh hưởng bởi các yếu tố bất lợi của môi trường.\n- Kiểm soát các chất ra vào tế bào theo các cơ chế điều chỉnh số lượng, tốc độ các chất ra vào tế bào theo nhu cầu (cho phép những chất cần thiết đi vào tế bào và loại bỏ những sản phẩm trao đổi chất không sử dụng ra khỏi tế bào). Nói một cách khác, màng tế bào có tính thấm chọn lọc, chỉ cho những chất nhất định ra vào tế bào.\n- Tiếp nhận thông tin từ môi trường và truyền tín hiệu vào trong tế bào, nhờ đó tế bào có thể đưa ra các đáp ứng thích nghi với điều kiện môi trường.\n- Quy định hình dạng tế bào phù hợp với chức năng của chúng." },
          { title: "12. Thành tế bào", content: "Khác với tế bào động vật, bên ngoài tế bào thực vật và nấm được bao bọc bởi một cấu trúc vững chắc được gọi là thành tế bào. Thành tế bào thực vật được cấu tạo từ các phân tử cellulose tạo nên các sợi vững chắc, được gia cố thêm bởi nhiều chất khác như lignin do tế bào tiết ra (H 8.13). Thành tế bào của nấm được cấu tạo từ chitin. Thành tế bào có chức năng bảo vệ, định hình tế bào." },
          { title: "13. Lông và roi", content: "Một số tế bào nhân thực cũng có lông và roi. Lông và roi là những cấu trúc dạng sợi nhô ra khỏi màng tế bào. Roi thường dài và lớn hơn lông nhưng chúng đều được cấu tạo từ các vi ống. Trên một tế bào, lông vận động thường có nhiều, còn roi chỉ có một hoặc một vài chiếc. Động vật đơn bào bơi được trong nước nhờ lông hoặc roi. Các tế bào trong niêm mạc khí quản, niêm mạc mũi dầy được dịch nhầy ra khỏi đường hô hấp là nhờ hoạt động của lông rung. Tinh trùng động vật và người có roi bơi đến thụ tinh cho trứng (H 8.14). Trứng đã thụ tinh di chuyển đến tử cung là nhờ hoạt động của lông trên tế bào niêm mạc của ống dẫn trứng." },
          { title: "14. Chất nền ngoại bào và các mối nối giữa các tế bào", content: "a) Chất nền ngoại bào: Các tế bào động vật tiết ra các chất cấu tạo nên các cấu trúc ở phía bên ngoài tế bào được gọi là chất nền ngoại bào. Đây là cấu trúc phức tạp gồm các phân tử proteoglycan (được hình thành từ các phân tử protein liên kết với carbohydrate) kết hợp với các sợi collagen tạo nên một mạng lưới bao quanh bên ngoài tế bào. Hệ thống này lại được nối với bộ khung xương trong tế bào qua protein màng là integrin và fibronectin (H 8.15).\nb) Mối nối giữa các tế bào: Các tế bào ở cơ thể đa bào kết nối với nhau thành các mô nhờ các loại mối nối khác nhau tuỳ theo chức năng của chúng. Mối nối kín, mối nối hở và mối nối neo giữ." }
        ]
      }
    ]
  },
  'chap2-2': { // Bài 9
    summary: {
      intro: "Bài thực hành giúp rèn luyện kĩ năng làm tiêu bản và sử dụng kính hiển vi để quan sát các loại tế bào khác nhau, qua đó phân biệt được cấu trúc cơ bản của tế bào nhân sơ (vi khuẩn) và tế bào nhân thực (tế bào biểu bì da người, tế bào thực vật).",
      coreKnowledge: [
        { title: "Mục tiêu", content: "Làm được tiêu bản tế bào nhân sơ (vi khuẩn) và tế bào nhân thực. Quan sát và nhận biết được hình dạng, một số bào quan trên tiêu bản.", emoji: "🎯" },
        { title: "Kĩ năng", content: "Rèn luyện kĩ năng làm tiêu bản tạm thời, sử dụng kính hiển vi, thao tác an toàn và chính xác trong phòng thí nghiệm.", emoji: "🔬" },
        { title: "Tế bào nhân sơ", content: "Quan sát vi khuẩn trong nước dưa muối hoặc sữa chua để thấy hình dạng và kích thước nhỏ bé.", emoji: "🦠" },
        { title: "Tế bào nhân thực", content: "Quan sát tế bào biểu bì vảy hành hoặc tế bào niêm mạc miệng để thấy rõ nhân, tế bào chất và màng sinh chất.", emoji: "🧅" }
      ],
      vocabulary: [
        { term: "Tiêu bản", definition: "Mẫu vật được chuẩn bị trên một phiến kính (lam kính) để quan sát dưới kính hiển vi." },
        { term: "Nhuộm mẫu vật", definition: "Sử dụng các loại thuốc nhuộm (xanh methylene, fuchsin) để làm nổi bật các cấu trúc của tế bào, giúp quan sát dễ dàng hơn." },
        { term: "Vật kính", definition: "Bộ phận của kính hiển vi nằm gần mẫu vật, có các độ phóng đại khác nhau (10x, 40x, 100x)." }
      ]
    },
    examples: [
      { title: "Quan sát vi khuẩn trong sữa chua", scenario: "Lấy một giọt sữa chua, dàn mỏng trên lam kính, nhuộm màu và quan sát dưới vật kính 100x.", explanation: "Sẽ quan sát được các trực khuẩn và cầu khuẩn (vi khuẩn lactic) bắt màu của thuốc nhuộm. Chúng có kích thước rất nhỏ và thường đứng thành chuỗi hoặc đám.", emoji: "🥛" },
      { title: "Quan sát tế bào biểu bì hành", scenario: "Tách một lớp biểu bì mỏng ở mặt trong của vảy hành, đặt lên giọt nước trên lam kính và quan sát.", explanation: "Có thể thấy rõ các tế bào hình chữ nhật xếp sát nhau. Bên trong mỗi tế bào, có thể nhận ra thành tế bào, màng sinh chất, tế bào chất và nhân tế bào (thường nằm lệch về một phía).", emoji: "🧅" }
    ],
    textbook: [
      {
        header: "I. YÊU CẦU CẦN ĐẠT",
        subsections: [
            { title: "", content: "Sau khi học xong phần thực hành, học sinh cần đạt được các yêu cầu sau:\n- Làm được tiêu bản và quan sát được tế bào nhân sơ (vi khuẩn).\n- Làm được tiêu bản tế bào nhân thực và quan sát hình dạng và một số bào quan trên tiêu bản đó.\n- Rèn các kĩ năng làm tiêu bản tạm thời và sử dụng kính hiển vi.\n- Có thái độ trung thực, ý thức cẩn thận trong thực hành thí nghiệm để có kết quả chính xác và đảm bảo an toàn." }
        ]
      },
      {
        header: "II. CHUẨN BỊ",
        subsections: [
          { title: "1. Dụng cụ, thiết bị", content: "Lam kính, lamen, que cấy, đèn cồn, giá ống nghiệm, chậu đựng nước rửa, pipet hoặc bình rửa có vòi, giấy lọc cắt nhỏ (cỡ 2 cm x 3 cm), dao nhỏ, kim mũi mác, giấy thấm.\nKính hiển vi quang học (vật kính 10x, 40x và 100x)." },
          { title: "2. Nguyên liệu", content: "Nước cất; 12 g xanh methylene (có thể thay xanh methylene bằng màu xanh victorian, xanh toluidine hoặc các thuốc kiềm màu đỏ như fuchsin, safranin); 100 mL ethanol 90%.\nCác thuốc nhuộm cần được pha với ethanol thành dung dịch gốc nồng độ 10% (tỉ lệ 1:12), lọc và giữ trong lọ thuỷ tinh có nút mài. Trước buổi thí nghiệm cần pha dung dịch gốc với nước cất vô trùng (thường pha theo tỉ lệ 1 mL dung dịch gốc và 100 mL nước cất).\nNước dưa muối (nước dưa chua, không bị khú), lá thài lài tía hoặc củ hành tây, tế bào niêm mạc trong khoang miệng." }
        ]
      },
      {
        header: "III. CÁCH TIẾN HÀNH",
        subsections: [
          { title: "1. Làm tiêu bản và quan sát tế bào nhân sơ (vi khuẩn)", content: "Bước 1: Cố định mẫu\n- Nhỏ một giọt nước cất lên lam kính.\n- Dùng pipet hút một ít nước dưa muối và nhỏ một giọt lên lam kính.\n- Dùng que cấy hoặc lá kim dàn mỏng giọt nước dưa muối trên lam kính.\n- Hong khô vết bôi trong không khí hoặc hơ nhẹ vài lượt (2 – 3 lượt) nhanh phía trên cao của ngọn lửa đèn cồn (tránh hơ quá nóng làm biến dạng hình thái vi sinh vật).\nBước 2: Nhuộm mẫu vật\n- Nhỏ 1 – 2 giọt thuốc nhuộm xanh methylene lên vết bôi đã khô, để yên 1 – 2 phút.\nBước 3: Rửa mẫu nhuộm\n- Nghiêng lam kính, dùng bình rửa có vòi hoặc pipet rửa nhẹ bằng nước từ một đầu lam kính cho trôi qua vết bôi đến khi nước rửa không còn màu thuốc nhuộm và thấm (hong) khô tiêu bản.\nBước 4: Quan sát tiêu bản\n- Soi tiêu bản dưới kính hiển vi, lúc đầu dùng vật kính 10x, sau đó dùng vật kính 40x.\n- Quan sát, vẽ và nhận xét về kích thước, hình dạng tế bào vi khuẩn." },
          { title: "2. Làm tiêu bản và quan sát tế bào nhân thực", content: "Bước 1: Tách một vảy hành hoặc lá thài lài tía.\nBước 2: Dùng kim mũi mác tạo vết cắt hình vuông nhỏ, kích thước 1 cm x 1 cm ở mặt trong của vảy hành/lá thài lài tía. Sử dụng kim mũi mác tách nhẹ lớp tế bào trên cùng của vết cắt (lớp tế bào biểu bì). Để quan sát được rõ, cần tách lớp biểu bì càng mỏng càng tốt, nếu không tách được một lớp thì chồng lên nhau sẽ rất khó quan sát.\nBước 3: Đặt lớp tế bào vừa tách được vào lam kính vào chỗ giọt nước cất đã nhỏ sẵn.\nBước 4: Nhỏ 1 giọt xanh methylene và đậy lamen lên lam kính, để yên trong 2 – 3 phút. Lưu ý: Đặt lamen để tế bào không bị lẫn quá nhiều bọt khí (đặt lamen nghiêng 45°).\nBước 5: Thấm khô tiêu bản và đặt lên bàn kính hiển vi, sau đó điều chỉnh vùng có mẫu vật vào chính giữa thị trường kính hiển vi rồi quay vật kính 10x để quan sát vùng có mẫu vật. Chọn vùng có một lớp tế bào mỏng nhất (Lớp tế bào) để quan sát các tế bào biểu bì, sau đó chuyển sang vật kính 40x để quan sát cho rõ hơn.\nBước 6: Quan sát hình thái, phân biệt thành tế bào, màng sinh chất, tế bào chất, vị trí của nhân.\nBước 7: Vừa quan sát, vừa vẽ hình dạng tế bào và chú thích các thành phần chính của tế bào." }
        ]
      },
      {
        header: "IV. THU HOẠCH",
        subsections: [
            { title: "", content: "Học sinh viết báo cáo thực hành theo các nội dung sau:\n1. Mục đích\n2. Cách tiến hành\n3. Kết quả\na) Mô tả kết quả quan sát tế bào nhân sơ và tế bào nhân thực, vẽ vào vở hình tế bào quan sát được.\nb) Phân biệt điểm khác biệt giữa tế bào nhân sơ và tế bào nhân thực quan sát được.\n4. Giải thích và kết luận\n5. Trả lời câu hỏi" }
        ]
      }
    ]
  },
  'chap3-0': { // Bài 10
    summary: {
      intro: "Màng tế bào có tính thấm chọn lọc, kiểm soát chặt chẽ sự trao đổi chất giữa tế bào và môi trường. Các chất đi qua màng theo hai cơ chế chính: vận chuyển thụ động (không tiêu tốn năng lượng) và vận chuyển chủ động (cần năng lượng ATP).",
      coreKnowledge: [
        { title: "Vận chuyển thụ động", content: "Các chất di chuyển xuôi chiều gradient nồng độ. Gồm khuếch tán đơn giản (qua lớp lipid), khuếch tán tăng cường (qua kênh protein) và thẩm thấu (sự di chuyển của nước).", emoji: "💨" },
        { title: "Vận chuyển chủ động", content: "Các chất di chuyển ngược chiều gradient nồng độ, cần năng lượng ATP và protein vận chuyển (bơm). Giúp tế bào tích lũy các chất cần thiết.", emoji: "⚡" },
        { title: "Nhập bào và Xuất bào", content: "Là hình thức vận chuyển các phân tử lớn (protein, polysaccharide) hoặc cả tế bào qua màng bằng cách biến dạng màng sinh chất và tạo túi vận chuyển. Đều tiêu tốn năng lượng.", emoji: "📦" }
      ],
      vocabulary: [
        { term: "Thẩm thấu", definition: "Sự khuếch tán của các phân tử nước qua màng thấm chọn lọc từ nơi có nồng độ chất tan thấp đến nơi có nồng độ chất tan cao." },
        { term: "Môi trường ưu trương", definition: "Môi trường có nồng độ chất tan cao hơn bên trong tế bào, làm tế bào mất nước." },
        { term: "Môi trường nhược trương", definition: "Môi trường có nồng độ chất tan thấp hơn bên trong tế bào, làm tế bào nhận nước." },
        { term: "Thực bào", definition: "Quá trình tế bào 'ăn' các chất rắn có kích thước lớn bằng cách bao bọc chúng trong túi màng." }
      ]
    },
    examples: [
      { title: "Rau bị héo khi bón nhiều phân", scenario: "Một luống rau đang tươi tốt, sau khi bón quá nhiều phân đạm thì bị héo rũ đi.", explanation: "Nồng độ phân bón cao tạo ra môi trường đất ưu trương. Nước từ trong tế bào rễ cây sẽ thẩm thấu ra ngoài, làm tế bào mất nước, gây ra hiện tượng co nguyên sinh và làm cây bị héo.", emoji: "🥬" },
      { title: "Bơm Na⁺-K⁺", scenario: "Tế bào thần kinh duy trì nồng độ K⁺ bên trong cao và Na⁺ bên ngoài cao để tạo điện thế nghỉ.", explanation: "Bơm Na⁺-K⁺ là một protein vận chuyển chủ động, sử dụng ATP để bơm 3 ion Na⁺ ra ngoài và 2 ion K⁺ vào trong, ngược chiều gradient nồng độ của chúng. Quá trình này rất quan trọng cho sự dẫn truyền xung thần kinh.", emoji: "🧠" }
    ],
    textbook: [
      {
        header: "I. KHÁI NIỆM TRAO ĐỔI CHẤT QUA MÀNG TẾ BÀO",
        subsections: [
          { title: "", content: "Khái niệm trao đổi chất là quá trình vận chuyển các chất ra, vào tế bào qua màng tế bào. Tế bào không thể tồn tại nếu không có hoạt động trao đổi chất với môi trường bên ngoài. Vật chất mà tế bào cần trao đổi với môi trường có thể rất nhỏ như các loại ion cho tới các đại phân tử sinh học, thậm chí, tế bào bạch cầu của hệ miễn dịch có thể “nuốt” gọn cả một tế bào vi khuẩn hay một tế bào bị bệnh của cơ thể. Tế bào được cấu tạo từ thành phần hoá học nhất định ra, vào tế bào. Tế bào có cơ chế “chọn lọc” và kiểm soát sự trao đổi chất này nên các nguyên vật liệu để cấu tạo nên các phân tử sinh học như các loại đường đơn, amino acid, nucleotide, acid béo cũng như các loại nguyên tố vi lượng cần cho các hoạt động sống của tế bào. Những sản phẩm trao đổi chất thuộc loại phế thải luôn được thải vào môi trường như CO₂ và nhiều chất khác. Các tế bào trong cơ thể đa bào thường trao đổi chất và truyền các tin hiệu cho nhau." }
        ]
      },
      {
        header: "II. CÁC CƠ CHẾ TRAO ĐỔI CHẤT QUA MÀNG TẾ BÀO",
        subsections: [
          { title: "1. Vận chuyển thụ động", content: "a) Khuếch tán đơn giản: Là khuếch tán của các chất qua lớp kép phospholipid có tính kị nước, không phân cực nên chỉ có những phân tử có kích thước nhỏ cũng như các phân tử có kích thước nhỏ mới có thể đi qua. Các ion dù có kích thước nhỏ cũng không thể khuếch tán qua lớp kép phospholipid, trong khi đó những phân tử nhỏ như O₂, CO₂ hay nước vẫn có thể khuếch tán qua. Tốc độ khuếch tán qua lớp kép phospholipid phụ thuộc vào bản chất của chất khuếch tán, sự chênh lệch nồng độ của các chất bên trong và ngoài màng cũng như thành phần hoá học của lớp kép phospholipid.\nb) Khuếch tán tăng cường: Những chất khuếch tán qua màng tế bào như các ion, các chất phân cực, các acid amin,... có thể ra, vào tế bào nhờ các kênh protein chuyên biệt – protein xuyên màng. Khuếch tán tăng cường còn được gọi là khuếch tán qua kênh protein hoặc vận chuyển thụ động. Tốc độ khuếch tán tăng cường không chỉ phụ thuộc vào sự chênh lệch nồng độ chất tan (gradient nồng độ) mà còn phụ thuộc vào số lượng kênh protein trên màng.\nc) Thẩm thấu: Sự khuếch tán của các phân tử nước qua màng tế bào được gọi là thẩm thấu. Tốc độ thẩm thấu của nước phụ thuộc vào áp suất thẩm thấu của tế bào. Áp suất thẩm thấu cao hay thấp phụ thuộc vào tổng nồng độ chất tan trong tế bào so với môi trường." },
          { title: "2. Vận chuyển chủ động", content: "Vận chuyển chủ động (hay vận chuyển tích cực) là kiểu vận chuyển các chất qua màng từ nơi có nồng độ chất tan thấp tới nơi có nồng độ chất tan cao (ngược chiều gradient nồng độ) và cần tiêu tốn năng lượng. Để làm được điều này, tế bào cần có những protein kênh vận chuyển hoạt động như những chiếc bơm các chất từ nơi có nồng độ thấp tới nơi có nồng độ cao. Muốn bơm hoạt động, tế bào phải cung cấp cho nó năng lượng ATP (H 10.3)." },
          { title: "3. Vận chuyển vật chất nhờ biến dạng màng tế bào", content: "a) Thực bào và ẩm bào: Thực bào là thuật ngữ chỉ hoạt động “ăn” của tế bào, tế bào có thể lấy các phân tử có kích thước lớn, thậm chí là cả một tế bào vào trong tế bào bao bọc lấy vật cần vận chuyển tạo nên một túi vận chuyển tách rời khỏi màng và đi vào trong tế bào (H 10.4a). Ẩm bào là thuật ngữ chỉ hoạt động “uống” của tế bào, các giọt dịch ngoại bào được màng tế bào bao bọc lấy các chất tan từ môi trường theo cách tương tự được gọi là ẩm bào (H 10.4b).\nb) Xuất bào: Xuất bào là hình thức vận chuyển các phân tử có kích thước lớn ra khỏi tế bào. Các phân tử có kích thước lớn cần đưa ra khỏi tế bào được bao bọc trong túi vận chuyển, sau đó túi này liên kết với màng tế bào giải phóng các chất ra bên ngoài (H 10.4d). Ví dụ: Protein sữa sau khi được đóng gói trong túi vận chuyển và xuất ra khỏi tế bào tuyến sữa." }
        ]
      }
    ]
  },
  'chap3-1': { // Bài 11
    summary: {
      intro: "Bài thực hành này giúp quan sát trực quan hiện tượng co và phản co nguyên sinh ở tế bào thực vật khi đặt chúng vào các dung dịch có nồng độ khác nhau, qua đó củng cố kiến thức về quá trình thẩm thấu qua màng tế bào.",
      coreKnowledge: [
        { title: "Mục tiêu", content: "Quan sát và vẽ được các tế bào ở các giai đoạn co và phản co nguyên sinh. Điều khiển được quá trình này bằng cách thay đổi nồng độ dung dịch môi trường.", emoji: "🎯" },
        { title: "Hiện tượng co nguyên sinh", content: "Khi tế bào thực vật được đặt trong môi trường ưu trương (nồng độ chất tan cao), nước từ trong tế bào sẽ di chuyển ra ngoài, làm cho khối nguyên sinh chất co lại, tách khỏi thành tế bào.", emoji: "💧➡️" },
        { title: "Hiện tượng phản co nguyên sinh", content: "Khi tế bào đang co nguyên sinh được chuyển sang môi trường nhược trương (nồng độ chất tan thấp), nước từ bên ngoài sẽ di chuyển vào trong, làm khối nguyên sinh chất trương lên và áp sát vào thành tế bào.", emoji: "💧⬅️" }
      ],
      vocabulary: [
        { term: "Co nguyên sinh", definition: "Hiện tượng khối nguyên sinh chất của tế bào thực vật co lại và tách khỏi thành tế bào do mất nước." },
        { term: "Phản co nguyên sinh", definition: "Hiện tượng khối nguyên sinh chất trương trở lại sau khi tế bào co nguyên sinh được đặt vào môi trường nhược trương." },
        { term: "Dung dịch NaCl", definition: "Dung dịch muối ăn, thường được sử dụng trong thí nghiệm để tạo môi trường ưu trương hoặc nhược trương với các nồng độ khác nhau." }
      ]
    },
    examples: [
      { title: "Ngâm rau trong nước muối", scenario: "Khi làm dưa muối, rau được ngâm trong dung dịch nước muối đậm đặc và sau một thời gian, rau trở nên mềm và ngót đi.", explanation: "Dung dịch nước muối là môi trường ưu trương. Nước bên trong tế bào rau di chuyển ra ngoài, gây ra hiện tượng co nguyên sinh, làm tế bào mất nước và mềm đi. Đây là nguyên tắc của việc muối dưa.", emoji: "🥒" },
      { title: "Tưới nước cho cây bị héo", scenario: "Một chậu cây bị héo do thiếu nước. Sau khi được tưới đủ nước, cây dần tươi trở lại.", explanation: "Khi thiếu nước, tế bào cây bị co nguyên sinh nhẹ. Khi tưới nước, môi trường đất trở nên nhược trương so với tế bào rễ, nước thẩm thấu vào trong tế bào, gây ra hiện tượng phản co nguyên sinh, giúp tế bào trương nước và làm cây tươi lại.", emoji: "🌱" }
    ],
    textbook: [
      {
        header: "I. YÊU CẦU CẦN ĐẠT",
        subsections: [
            { title: "", content: "Sau khi học xong phần thực hành, học sinh cần đạt được các yêu cầu sau:\n- Thực hiện thành thạo kĩ năng sử dụng kính hiển vi và làm tiêu bản hiển vi.\n- Quan sát và vẽ được các tế bào đang ở các giai đoạn khác nhau của quá trình co nguyên sinh.\n- Điều khiển được sự co nguyên sinh thông qua điều khiển mức độ thấm thấu của nước ra, vào tế bào.\n- Tự làm được thí nghiệm theo quy trình." }
        ]
      },
      {
        header: "II. CHUẨN BỊ",
        subsections: [
          { title: "1. Dụng cụ, thiết bị", content: "Lưỡi dao lam, lam kính, lamen, ống nhỏ giọt, giấy thấm, kính hiển vi quang học với vật kính 10x, 40x." },
          { title: "2. Hoá chất", content: "Dung dịch NaCl loãng (các em có thể sử dụng các nồng độ khác nhau để xem sự co nguyên sinh xảy ra nhanh hay chậm phụ thuộc vào nồng độ dung dịch)." },
          { title: "3. Mẫu vật", content: "Lá thài lài tía hoặc lá cây có kích thước tế bào lớn và có màu sắc để có thể dễ quan sát dưới kính hiển vi vì dễ dàng quan sát được một số tế bào bị của lá." }
        ]
      },
      {
        header: "III. CÁCH TIẾN HÀNH",
        subsections: [
          { title: "1. Nguyên lí", content: "Khi môi trường bên ngoài tế bào có nồng độ chất tan cao hơn nồng độ chất tan bên trong tế bào, nước sẽ thấm thấu từ bên trong tế bào ra bên ngoài tế bào và làm cho tế bào mất nước và teo lại. Ở cây có sắc tố nên ta có thể dễ dàng quan sát được mức độ co nguyên sinh của tế bào khi thấy khối nguyên sinh chất tách khỏi thành tế bào nhiều hay ít, nhanh hay chậm. Ngược lại, khi bên trong tế bào có nồng độ chất tan cao hơn bên ngoài tế bào, nước sẽ thấm thấu từ bên ngoài tế bào vào bên trong tế bào làm tế bào căng phồng lên." },
          { title: "2. Quy trình thí nghiệm", content: "a) Thí nghiệm co nguyên sinh\nBước 1: Dùng lưỡi dao lam nhẹ nhàng tách lớp biểu bì dưới phiến lá cây thài lài tía, sau đó đặt lớp biểu bì lên trên lam kính có nhỏ sẵn giọt dung dịch NaCl. Tiếp đến, đậy lamen lên trên mẫu vật rồi dùng giấy thấm hút bớt dung dịch thừa ở phía ngoài.\nBước 2: Đặt lam kính lên bàn kính hiển vi và điều chỉnh vùng có mẫu vật vào giữa thị trường kính hiển vi rồi quan sát mẫu vật ở vật kính 10x.\nBước 3: Chọn vùng biểu bì chỉ có một lớp tế bào, sau đó chuyển sang vật kính 40x để quan sát tế bào rõ hơn.\nBước 4: Quan sát và vẽ các tế bào ở trạng thái bình thường, tế bào khi không vào vờ.\nb) Thí nghiệm phản co nguyên sinh\nBước 1: Lấy tiêu bản ra khỏi kính hiển vi, dùng ống nhỏ giọt nhỏ một giọt nước cất vào rìa của phiến lamen. Sau đó, dùng giấy thấm đặt ở phía đối diện với phía vừa nhỏ giọt nước cất của lamen để hút bớt nước thừa.\nBước 2: Đặt tiêu bản lên kính hiển vi để quan sát sự thay đổi của chất nguyên sinh trong tế bào ở vật kính 10x.\nBước 3: Chọn vùng biểu bì chỉ có một lớp tế bào, sau đó chuyển sang vật kính 40x để quan sát tế bào rõ hơn.\nBước 4: Quan sát và vẽ các tế bào bình thường, các tế bào bị co nguyên sinh và các tế bào về độ mở khí khổng vào vờ." }
        ]
      }
    ]
  },
  'chap3-2': { // Bài 12
    summary: {
      intro: "Truyền tin tế bào là quá trình các tế bào tiếp nhận, xử lí và đáp ứng lại các tín hiệu từ môi trường bên ngoài. Quá trình này rất quan trọng để điều phối các hoạt động sống trong cơ thể đa bào, từ sinh trưởng, phát triển đến đáp ứng miễn dịch.",
      coreKnowledge: [
        { title: "Phương thức truyền tin", content: "Gồm truyền tin trực tiếp (qua mối nối), cận tiết (tế bào gần nhau), nội tiết (qua máu đi xa) và qua synapse (tế bào thần kinh).", emoji: "📡" },
        { title: "Giai đoạn tiếp nhận", content: "Phân tử tín hiệu (ligand) từ bên ngoài liên kết đặc hiệu với thụ thể trên màng tế bào hoặc trong tế bào chất, giống như 'chìa khóa và ổ khóa'.", emoji: "🔑" },
        { title: "Giai đoạn truyền tin", content: "Sự liên kết làm thay đổi cấu hình thụ thể, kích hoạt một chuỗi các phản ứng truyền tin (thác tín hiệu) bên trong tế bào, thường khuếch đại tín hiệu lên nhiều lần.", emoji: "⛓️" },
        { title: "Giai đoạn đáp ứng", content: "Tế bào đưa ra đáp ứng cuối cùng, ví dụ như hoạt hóa một gene, tổng hợp một protein, hay thay đổi hoạt động của enzyme.", emoji: "🎯" }
      ],
      vocabulary: [
        { term: "Phân tử tín hiệu (Ligand)", definition: "Các phân tử hóa học (như hormone, chất dẫn truyền thần kinh) mang thông tin từ tế bào này đến tế bào khác." },
        { term: "Thụ thể (Receptor)", definition: "Protein chuyên biệt trên màng hoặc bên trong tế bào, có khả năng liên kết đặc hiệu với một phân tử tín hiệu nhất định." },
        { term: "Thác truyền tin", definition: "Một chuỗi các phản ứng trong đó một protein được hoạt hóa sẽ hoạt hóa protein tiếp theo, và cứ thế tiếp diễn, làm khuếch đại tín hiệu ban đầu." }
      ]
    },
    examples: [
      { title: "Tác động của Adrenaline", scenario: "Khi gặp nguy hiểm, tuyến thượng thận tiết ra hormone adrenaline. Adrenaline theo máu đến các tế bào gan.", explanation: "Adrenaline (tín hiệu) gắn vào thụ thể trên màng tế bào gan (tiếp nhận), kích hoạt chuỗi phản ứng (truyền tin) dẫn đến việc phân giải glycogen thành glucose (đáp ứng), cung cấp năng lượng cho cơ thể để phản ứng 'chiến đấu hay bỏ chạy'.", emoji: "🏃‍♀️" },
      { title: "Bệnh tiểu đường type 1", scenario: "Tuyến tụy không sản xuất được insulin, dẫn đến nồng độ đường trong máu cao.", explanation: "Insulin là tín hiệu cho các tế bào hấp thụ glucose. Khi không có tín hiệu này, các tế bào không nhận được 'lệnh' lấy glucose từ máu, dẫn đến glucose tích tụ và gây bệnh. Đây là một ví dụ về lỗi trong giai đoạn phát tín hiệu.", emoji: "🩸" }
    ],
    textbook: [
      {
        header: "I. TRUYỀN TIN GIỮA CÁC TẾ BÀO",
        subsections: [
          { title: "", content: "Truyền tin tế bào có thể thực hiện giữa các tế bào của cùng một cơ thể, hoặc giữa các tế bào của các cá thể cùng loài cũng như khác loài. Các sinh vật đơn bào không sống biệt lập mà luôn tiếp nhận và phát tín hiệu cho nhau. Tế bào của một số loài vi khuẩn trong điều kiện môi trường bất lợi chúng phát tán tín hiệu cho nhau và tập hợp lại thành từng cụm. Trong cơ thể đa bào, các tế bào trao đổi thông tin với nhau và với môi trường để duy trì hoạt động sống của cả cơ thể." }
        ]
      },
      {
        header: "II. TRUYỀN TIN TRONG TẾ BÀO",
        subsections: [
          { title: "1. Tiếp nhận tín hiệu", content: "Tế bào tiếp nhận tín hiệu bằng các protein thụ thể trên màng tế bào hoặc thụ thể nằm trong tế bào chất. Mỗi loại thụ thể liên kết với một phân tử tín hiệu như chìa khoá với ổ khoá. Thụ thể có thể là các protein kênh, các enzyme, các loại protein tham gia vào hoạt hoá gene hoặc nhiều loại protein kết cặp với enzyme. Các phân tử protein thụ thể được phân bố ở màng hay trong tế bào chất." },
          { title: "2. Truyền tín hiệu", content: "Sau khi thụ thể tiếp nhận tín hiệu từ người này sang người khác, các thụ thể không những truyền tín hiệu cho người này sang người khác. Sự truyền tín hiệu trong tế bào thực chất là sự chuyển đổi tín hiệu giữa các phân tử tín hiệu trong tế bào. Quá trình truyền tín hiệu từ phân tử tín hiệu bên ngoài được khuếch đại lên đến các phân tử đáp ứng. Sự thay đổi cấu hình của thụ thể khiến nó thay đổi trạng thái hoạt động sang hoạt động. Sự thay đổi trạng thái hoạt động lại tác động đến các phân tử tín hiệu bên trong tế bào gây hoạt hoá toàn bộ tế bào. Do như vậy, sự thay đổi trạng thái của phân tử này làm biến đổi cấu hình dẫn đến hoạt hoá hay bất hoạt phân tử kế tiếp cho đến khi đến phân tử đích cuối cùng của một chuỗi truyền tin. Trong trường hợp thụ thể nằm ở bên trong tế bào, con đường truyền tín hiệu của các phân tử tín hiệu từ các phân tử đích gây ra đáp ứng tế bào hoạt hoá gene nhất định." },
          { title: "3. Đáp ứng tín hiệu", content: "Kết quả của quá trình truyền tin hiệu là sự đáp ứng của tế bào trước thông tin mà nó nhận được (H 12.3). Đáp ứng của tế bào rất đa dạng, sản phẩm tạo ra có thể là enzyme giúp tế bào sửa chữa các sai sót trong DNA khi nó nhận được tín hiệu là hệ gene bị tổn thương, sản phẩm cũng có thể làm thay đổi hình dạng tế bào giúp tế bào có thể di chuyển hướng tới nguồn tín hiệu. Đáp ứng cũng có thể tạo ra các tín hiệu gửi đến tế bào khác khiến tế bào nhận tiếp tín hiệu liên quan đến truyền tin tế bào." }
        ]
      }
    ]
  },
  'chap4-0': { // Bài 13
    summary: {
      intro: "Mọi hoạt động sống của tế bào đều cần năng lượng. Năng lượng này được dự trữ và vận chuyển trong tế bào dưới dạng ATP. Các phản ứng hóa sinh được xúc tác bởi enzyme, giúp chúng diễn ra nhanh và hiệu quả hơn.",
      coreKnowledge: [
        { title: "Năng lượng trong tế bào", content: "Tồn tại ở hai dạng chính: động năng (liên quan đến sự chuyển động) và thế năng (năng lượng dự trữ trong các liên kết hóa học).", emoji: "⚡" },
        { title: "ATP - 'Đồng tiền' năng lượng", content: "Adenosine triphosphate (ATP) là phân tử mang năng lượng chính, dễ dàng biến đổi để cung cấp năng lượng cho các quá trình như co cơ, tổng hợp chất, vận chuyển chủ động.", emoji: "💰" },
        { title: "Enzyme - Chất xúc tác sinh học", content: "Có bản chất là protein, làm tăng tốc độ phản ứng bằng cách giảm năng lượng hoạt hóa. Mỗi enzyme có tính đặc hiệu cao với một hoặc một vài cơ chất.", emoji: "⚙️" },
        { title: "Các yếu tố ảnh hưởng đến enzyme", content: "Hoạt tính của enzyme bị ảnh hưởng bởi nhiệt độ, độ pH, nồng độ cơ chất và chất ức chế hoặc hoạt hóa.", emoji: "🌡️" }
      ],
      vocabulary: [
        { term: "Chuyển hóa vật chất", definition: "Tập hợp các phản ứng sinh hóa xảy ra bên trong tế bào, bao gồm quá trình tổng hợp (đồng hóa) và phân giải (dị hóa)." },
        { term: "ATP (Adenosine Triphosphate)", definition: "Hợp chất hữu cơ cao năng, cung cấp năng lượng cho hầu hết các hoạt động của tế bào." },
        { term: "Năng lượng hoạt hóa", definition: "Năng lượng tối thiểu cần thiết để các chất phản ứng có thể bắt đầu một phản ứng hóa học." },
        { term: "Trung tâm hoạt động", definition: "Vùng không gian đặc biệt trên enzyme, nơi cơ chất liên kết vào để phản ứng xảy ra." }
      ]
    },
    examples: [
      { title: "Tiêu hóa thức ăn", scenario: "Enzyme pepsin trong dạ dày hoạt động hiệu quả nhất ở môi trường pH acid (khoảng 2), giúp phân giải protein trong thức ăn.", explanation: "Độ pH là một yếu tố quan trọng ảnh hưởng đến hoạt tính enzyme. Mỗi enzyme có một khoảng pH tối ưu. Nếu pH quá cao hoặc quá thấp, cấu trúc không gian của enzyme sẽ bị thay đổi, làm mất hoạt tính.", emoji: "🍖" },
      { title: "Bảo quản thực phẩm trong tủ lạnh", scenario: "Thịt, cá để trong tủ lạnh sẽ lâu bị ôi thiu hơn so với để ở nhiệt độ phòng.", explanation: "Nhiệt độ thấp làm giảm hoạt tính của các enzyme do vi khuẩn tiết ra để phân hủy thực phẩm, do đó làm chậm quá trình hư hỏng.", emoji: "❄️" }
    ],
    textbook: [
      {
        header: "I. NĂNG LƯỢNG VÀ CÁC DẠNG NĂNG LƯỢNG TRONG TẾ BÀO",
        subsections: [
          { title: "1. Khái niệm năng lượng", content: "Năng lượng là khả năng sinh công. Trong tế bào, năng lượng tồn tại ở nhiều dạng khác nhau như hóa năng, nhiệt năng, điện năng. Các dạng năng lượng này có thể chuyển đổi cho nhau." },
          { title: "2. Các dạng năng lượng trong tế bào", content: "Năng lượng trong tế bào tồn tại chủ yếu ở hai dạng: động năng (năng lượng gắn với sự chuyển động của các vật thể) và thế năng (năng lượng dự trữ, tiềm ẩn). Thế năng trong các liên kết hóa học của các phân tử hữu cơ được gọi là hóa năng. Đây là dạng năng lượng chính dự trữ trong tế bào." }
        ]
      },
      {
        header: "II. ATP - PHÂN TỬ MANG NĂNG LƯỢNG TRONG TẾ BÀO",
        subsections: [
          { title: "1. Cấu trúc của ATP", content: "ATP (Adenosine Triphosphate) là một phân tử nhỏ, gồm 3 thành phần: base nito adenine, đường ribose và ba nhóm phosphate. Liên kết giữa hai nhóm phosphate cuối cùng là liên kết cao năng, rất dễ bị phá vỡ để giải phóng năng lượng." },
          { title: "2. Chức năng của ATP", content: "ATP được mệnh danh là “đồng tiền năng lượng” của tế bào vì nó cung cấp năng lượng cho mọi hoạt động sống của tế bào như: tổng hợp các chất, vận chuyển các chất qua màng, co cơ, dẫn truyền xung thần kinh,... Năng lượng được giải phóng khi ATP bị thủy phân thành ADP (Adenosine Diphosphate) và một nhóm phosphate (Pi)." }
        ]
      },
      {
        header: "III. ENZYME",
        subsections: [
          { title: "1. Khái niệm và cấu trúc của enzyme", content: "Enzyme là chất xúc tác sinh học có bản chất là protein (một số ít là RNA). Enzyme làm tăng tốc độ phản ứng mà không bị biến đổi sau phản ứng. Mỗi enzyme có một vùng cấu trúc không gian đặc biệt gọi là trung tâm hoạt động, có cấu hình phù hợp với cơ chất mà nó tác động." },
          { title: "2. Cơ chế tác động của enzyme", content: "Enzyme làm giảm năng lượng hoạt hóa cần thiết cho phản ứng, do đó làm tăng tốc độ phản ứng. Cơ chế tác động gồm hai bước chính: (1) Enzyme liên kết với cơ chất tại trung tâm hoạt động tạo thành phức hợp enzyme-cơ chất. (2) Enzyme xúc tác biến đổi cơ chất thành sản phẩm, sau đó sản phẩm được giải phóng và enzyme trở về trạng thái ban đầu, sẵn sàng cho phản ứng tiếp theo." },
          { title: "3. Các yếu tố ảnh hưởng đến hoạt tính của enzyme", content: "Hoạt tính của enzyme có thể bị ảnh hưởng bởi nhiều yếu tố:\n- Nhiệt độ: Mỗi enzyme có một nhiệt độ tối ưu. Nhiệt độ quá cao hoặc quá thấp đều làm giảm hoạt tính enzyme.\n- Độ pH: Mỗi enzyme hoạt động hiệu quả trong một khoảng pH nhất định.\n- Nồng độ cơ chất: Khi nồng độ cơ chất tăng, hoạt tính enzyme tăng cho đến khi đạt mức bão hòa.\n- Chất ức chế và chất hoạt hóa: Một số chất hóa học có thể làm tăng (chất hoạt hóa) hoặc giảm (chất ức chế) hoạt tính của enzyme." }
        ]
      }
    ]
  },
  'chap4-1': { // Bài 14
    summary: {
      intro: "Tế bào duy trì sự sống thông qua hai quá trình chuyển hóa năng lượng cơ bản: phân giải (dị hóa) các chất hữu cơ để giải phóng năng lượng (hô hấp tế bào) và tổng hợp (đồng hóa) các chất hữu cơ cần thiết từ các phân tử đơn giản, tích lũy năng lượng (quang hợp).",
      coreKnowledge: [
        { title: "Hô hấp tế bào", content: "Là quá trình phân giải hoàn toàn glucose thành CO₂, H₂O và giải phóng năng lượng dưới dạng ATP. Gồm 3 giai đoạn chính: đường phân, chu trình Krebs và chuỗi chuyền electron.", emoji: "🔥" },
        { title: "Quang hợp", content: "Là quá trình tế bào thực vật và một số sinh vật khác sử dụng năng lượng ánh sáng để tổng hợp chất hữu cơ (glucose) từ CO₂ và H₂O. Gồm pha sáng và pha tối (chu trình Calvin).", emoji: "☀️" },
        { title: "Tổng hợp các chất khác", content: "Tế bào có khả năng tổng hợp carbohydrate, protein, lipid và nucleic acid từ các sản phẩm trung gian của quá trình phân giải và các nguyên liệu lấy từ môi trường.", emoji: "🏗️" },
        { title: "Mối quan hệ", content: "Tổng hợp và phân giải là hai quá trình ngược chiều nhưng liên quan mật thiết. Sản phẩm của quá trình này là nguyên liệu cho quá trình kia, tạo thành một chu trình vật chất và năng lượng khép kín trong tế bào.", emoji: "🔄" }
      ],
      vocabulary: [
        { term: "Đồng hóa", definition: "Quá trình tổng hợp các chất hữu cơ phức tạp từ các chất đơn giản, kèm theo tích lũy năng lượng." },
        { term: "Dị hóa", definition: "Quá trình phân giải các chất hữu cơ phức tạp thành các chất đơn giản, kèm theo giải phóng năng lượng." },
        { term: "Hô hấp hiếu khí", definition: "Quá trình phân giải chất hữu cơ cần có sự tham gia của oxygen." },
        { term: "Lên men", definition: "Quá trình phân giải chất hữu cơ trong điều kiện không có oxygen, tạo ra ít ATP hơn." }
      ]
    },
    examples: [
      { title: "Làm sữa chua", scenario: "Sữa được ủ ấm với men vi khuẩn lactic. Sau một thời gian, sữa đông lại và có vị chua.", explanation: "Vi khuẩn lactic tiến hành quá trình lên men (một dạng phân giải kị khí), chuyển hóa đường lactose trong sữa thành acid lactic. Acid lactic làm giảm pH, khiến protein trong sữa (casein) bị biến tính và đông tụ, tạo thành sữa chua.", emoji: "🥛" },
      { title: "Cây trồng dưới ánh đèn", scenario: "Trong các nhà kính hiện đại, người ta thường lắp đặt hệ thống đèn chiếu sáng để cây có thể quang hợp cả ngày lẫn đêm.", explanation: "Pha sáng của quang hợp cần năng lượng ánh sáng. Bằng cách cung cấp ánh sáng nhân tạo, con người có thể kéo dài thời gian quang hợp, giúp cây tổng hợp được nhiều chất hữu cơ hơn, từ đó tăng năng suất cây trồng.", emoji: "💡" }
    ],
    textbook: [
      {
        header: "I. PHÂN GIẢI CÁC CHẤT",
        subsections: [
          { title: "1. Phân giải carbohydrate", content: "Quá trình phân giải carbohydrate chủ yếu là hô hấp tế bào, phân giải hoàn toàn phân tử glucose. Hô hấp tế bào diễn ra trong tế bào chất và ti thể, gồm 3 giai đoạn chính:\n- Đường phân: Xảy ra trong tế bào chất. Một phân tử glucose (6C) được phân giải thành hai phân tử pyruvic acid (3C), tạo ra 2 ATP và 2 NADH.\n- Chu trình Krebs (Chu trình citric acid): Xảy ra trong chất nền ti thể. Hai phân tử pyruvic acid được chuyển hóa thành acetyl-CoA rồi đi vào chu trình, bị oxy hóa hoàn toàn thành CO₂, tạo ra 2 ATP, 6 NADH và 2 FADH₂.\n- Chuỗi chuyền electron: Xảy ra ở màng trong ti thể. Các phân tử NADH và FADH₂ từ hai giai đoạn trước nhường electron cho chuỗi các protein. Năng lượng từ electron được dùng để bơm H⁺, tạo ra sự chênh lệch nồng độ H⁺. Khi H⁺ khuếch tán ngược lại qua enzyme ATP synthase, một lượng lớn ATP được tạo ra (khoảng 26-28 ATP). Oxygen là chất nhận electron cuối cùng.\nTrong điều kiện không có oxygen, tế bào thực hiện lên men. Pyruvic acid không đi vào ti thể mà được chuyển hóa thành rượu ethyl hoặc acid lactic, tạo ra rất ít ATP." },
          { title: "2. Phân giải protein và lipid", content: "Khi thiếu carbohydrate, tế bào có thể phân giải protein và lipid để lấy năng lượng. Protein được phân giải thành các amino acid, sau đó được khử amin và chuyển hóa thành các sản phẩm trung gian của đường phân hoặc chu trình Krebs. Lipid được phân giải thành glycerol và các acid béo. Glycerol được chuyển hóa thành một sản phẩm của đường phân, còn acid béo được phân giải thành acetyl-CoA và đi vào chu trình Krebs." }
        ]
      },
      {
        header: "II. TỔNG HỢP CÁC CHẤT",
        subsections: [
          { title: "1. Quang hợp", content: "Quang hợp ở thực vật là quá trình tổng hợp chất hữu cơ từ các chất vô cơ đơn giản (CO₂, H₂O) nhờ năng lượng ánh sáng. Quá trình này diễn ra trong lục lạp và gồm 2 pha:\n- Pha sáng: Xảy ra ở màng thylakoid. Năng lượng ánh sáng được diệp lục hấp thụ, dùng để phân li nước, giải phóng O₂, H⁺ và electron. Năng lượng này cũng được chuyển thành năng lượng trong các phân tử ATP và NADPH.\n- Pha tối (Chu trình Calvin): Xảy ra trong chất nền (stroma) của lục lạp. Sử dụng ATP và NADPH từ pha sáng để khử CO₂ thành carbohydrate (glucose)." },
          { title: "2. Tổng hợp carbohydrate, protein, lipid", content: "Tế bào sử dụng các sản phẩm trung gian của quang hợp và hô hấp tế bào để làm nguyên liệu tổng hợp các phân tử sinh học khác. Ví dụ, từ glucose, tế bào có thể tổng hợp tinh bột, cellulose. Các sản phẩm của chu trình Krebs có thể được dùng để tổng hợp các amino acid. Acetyl-CoA có thể được dùng để tổng hợp acid béo." },
          { title: "3. Mối quan hệ giữa tổng hợp và phân giải", content: "Tổng hợp (đồng hóa) và phân giải (dị hóa) là hai mặt của một quá trình chuyển hóa vật chất và năng lượng thống nhất. Quá trình phân giải cung cấp năng lượng (ATP) và nguyên liệu cho quá trình tổng hợp. Ngược lại, quá trình tổng hợp tạo ra các chất hữu cơ là nguyên liệu cho quá trình phân giải." }
        ]
      }
    ]
  },
  'chap4-2': { // Bài 15
    summary: {
      intro: "Bài thực hành này giúp kiểm chứng ảnh hưởng của nhiệt độ đến hoạt tính của enzyme catalase (có trong khoai tây) và xác định hoạt tính của enzyme amylase (có trong nước bọt) trong việc phân giải tinh bột.",
      coreKnowledge: [
        { title: "Mục tiêu", content: "Thực hiện được thí nghiệm chứng minh ảnh hưởng của nhiệt độ đến enzyme và thí nghiệm xác định hoạt tính của amylase. Quan sát, mô tả và giải thích được kết quả.", emoji: "🎯" },
        { title: "Enzyme catalase", content: "Xúc tác cho phản ứng phân giải hydrogen peroxide (H₂O₂) thành nước và oxygen (gây sủi bọt). Hoạt tính của nó bị ảnh hưởng bởi nhiệt độ.", emoji: "🥔" },
        { title: "Enzyme amylase", content: "Có trong nước bọt, xúc tác cho phản ứng phân giải tinh bột thành đường. Có thể nhận biết sự phân giải tinh bột bằng thuốc thử Iodine.", emoji: " saliva" },
        { title: "Thuốc thử Iodine", content: "Dung dịch Iodine có màu nâu, khi gặp tinh bột sẽ tạo phức chất có màu xanh tím đặc trưng. Khi tinh bột bị phân giải hết, dung dịch sẽ mất màu xanh tím.", emoji: "🧪" }
      ],
      vocabulary: [
        { term: "Catalase", definition: "Một enzyme phổ biến trong hầu hết các sinh vật sống tiếp xúc với oxy, xúc tác cho sự phân hủy hydro peroxide." },
        { term: "Amylase", definition: "Một enzyme xúc tác quá trình thủy phân tinh bột thành các loại đường đơn giản hơn." },
        { term: "Đối chứng", definition: "Mẫu thí nghiệm được giữ ở điều kiện chuẩn hoặc không có yếu tố tác động, dùng để so sánh với các mẫu thí nghiệm khác." }
      ]
    },
    examples: [
      { title: "Ứng dụng enzyme trong bột giặt", scenario: "Nhiều loại bột giặt sinh học có chứa enzyme protease và amylase.", explanation: "Các enzyme này giúp phân giải các vết bẩn có nguồn gốc protein (máu, sữa) và tinh bột (thức ăn) ở nhiệt độ thường, giúp giặt sạch hiệu quả và tiết kiệm năng lượng.", emoji: "🧺" },
      { title: "Nhai cơm lâu có vị ngọt", scenario: "Khi nhai cơm hoặc bánh mì lâu trong miệng, ta cảm thấy có vị ngọt.", explanation: "Enzyme amylase trong nước bọt bắt đầu phân giải tinh bột (không ngọt) trong cơm thành đường maltose (có vị ngọt), tạo ra cảm giác ngọt.", emoji: "🍚" }
    ],
    textbook: [
      {
        header: "I. THÍ NGHIỆM PHÂN TÍCH ẢNH HƯỞNG CỦA NHIỆT ĐỘ ĐẾN HOẠT TÍNH CỦA ENZYME CATALASE",
        subsections: [
          { title: "1. Chuẩn bị", content: "Dụng cụ: ống nghiệm, dao, đũa thuỷ tinh. Mẫu vật: khoai tây tươi. Hoá chất: dung dịch H₂O₂ 3%." },
          { title: "2. Tiến hành", content: "Bước 1: Cắt ba lát khoai tây có kích thước và độ dày tương tự nhau.\nBước 2: Một lát để ở nhiệt độ phòng, một lát luộc chín trong 5 phút, một lát ngâm trong nước đá khoảng 5-10 phút.\nBước 3: Cho mỗi lát khoai tây vào một ống nghiệm riêng.\nBước 4: Nhỏ vào mỗi ống nghiệm 1 mL dung dịch H₂O₂.\nBước 5: Quan sát hiện tượng sủi bọt khí ở mỗi ống nghiệm, so sánh và giải thích." }
        ]
      },
      {
        header: "II. THÍ NGHIỆM KIỂM TRA HOẠT TÍNH CỦA ENZYME AMYLASE",
        subsections: [
          { title: "1. Chuẩn bị", content: "Dụng cụ: ống nghiệm, ống nhỏ giọt. Hoá chất: hồ tinh bột 1%, dung dịch Iodine 1%, nước bọt pha loãng." },
          { title: "2. Tiến hành", content: "Bước 1: Lấy 4 ống nghiệm, đánh số từ 1 đến 4.\nBước 2: Cho vào ống 1 và 2 mỗi ống 2 mL hồ tinh bột. Cho vào ống 3 và 4 mỗi ống 2 mL nước cất.\nBước 3: Cho vào ống 1 và 3 mỗi ống 1 mL nước bọt pha loãng. Cho vào ống 2 và 4 mỗi ống 1 mL nước cất.\nBước 4: Lắc đều và để các ống nghiệm ở nhiệt độ phòng trong 15 phút.\nBước 5: Nhỏ vào mỗi ống vài giọt dung dịch Iodine. Quan sát sự thay đổi màu sắc và giải thích." }
        ]
      },
      {
        header: "III. THU HOẠCH",
        subsections: [
            { title: "BÁO CÁO THỰC HÀNH", content: "Học sinh viết báo cáo thực hành theo các nội dung sau:\n1. Tên thí nghiệm.\n2. Mục đích thí nghiệm.\n3. Kết quả và giải thích.\n4. Kết luận." }
        ]
      }
    ]
  },
  'chap5-0': { // Bài 16
    summary: {
      intro: "Chu kì tế bào là một chuỗi các sự kiện có trật tự từ khi tế bào được sinh ra, lớn lên cho đến khi phân chia tạo ra tế bào con. Quá trình nguyên phân đảm bảo sự phân chia đồng đều vật chất di truyền cho hai tế bào con, là cơ sở cho sự lớn lên và tái tạo của cơ thể.",
      coreKnowledge: [
        { title: "Chu kì tế bào", content: "Gồm hai giai đoạn chính: kì trung gian (chiếm phần lớn thời gian, tế bào lớn lên và nhân đôi DNA) và pha M (tế bào phân chia).", emoji: "🔄" },
        { title: "Kì trung gian", content: "Gồm 3 pha: G1 (tổng hợp chất cần thiết), S (nhân đôi DNA và NST), G2 (chuẩn bị cho phân bào).", emoji: "⏳" },
        { title: "Nguyên phân", content: "Là quá trình phân chia tế bào mẹ thành hai tế bào con có bộ NST giống hệt nhau và giống hệt tế bào mẹ. Gồm 4 kì: kì đầu, kì giữa, kì sau và kì cuối.", emoji: "➗" },
        { title: "Ý nghĩa của nguyên phân", content: "Giúp cơ thể lớn lên, thay thế các tế bào già, tổn thương. Là cơ sở của sinh sản vô tính ở nhiều loài sinh vật.", emoji: "🌱" }
      ],
      vocabulary: [
        { term: "Chu kì tế bào", definition: "Vòng đời của một tế bào, bao gồm sự sinh trưởng và phân chia." },
        { term: "Nhiễm sắc thể (NST)", definition: "Cấu trúc mang gene, có thể ở dạng sợi mảnh (kì trung gian) hoặc co xoắn (phân bào)." },
        { term: "Thoi phân bào", definition: "Cấu trúc gồm các vi ống, có vai trò phân li các NST về hai cực của tế bào." },
        { term: "Ung thư", definition: "Bệnh lý gây ra do sự phân chia tế bào một cách không kiểm soát, tạo thành các khối u." }
      ]
    },
    examples: [
      { title: "Lành vết thương", scenario: "Khi bị đứt tay, các tế bào da xung quanh vết thương sẽ tăng cường nguyên phân.", explanation: "Quá trình nguyên phân tạo ra các tế bào da mới để thay thế các tế bào đã bị tổn thương, giúp vết thương dần dần lành lại.", emoji: "🩹" },
      { title: "Giâm cành", scenario: "Một đoạn cành cây được cắt ra, cắm xuống đất ẩm, sau một thời gian sẽ mọc rễ và phát triển thành cây mới.", explanation: "Các tế bào ở phần cắt của cành cây thực hiện nguyên phân mạnh mẽ để tạo ra các tế bào mới, biệt hóa thành rễ và các bộ phận khác, tạo thành một cơ thể hoàn chỉnh. Đây là ứng dụng của nguyên phân trong sinh sản vô tính.", emoji: "🌿" }
    ],
    textbook: [
      {
        header: "I. CHU KÌ TẾ BÀO",
        subsections: [
          { title: "1. Khái niệm chu kì tế bào", content: "Chu kì tế bào là khoảng thời gian từ khi một tế bào được sinh ra cho đến khi nó phân chia xong. Chu kì tế bào bao gồm kì trung gian và quá trình phân bào (pha M)." },
          { title: "2. Các giai đoạn của chu kì tế bào", content: "Kì trung gian là giai đoạn sinh trưởng của tế bào, chiếm phần lớn thời gian của chu kì. Gồm các pha:\n- Pha G1: Tế bào tổng hợp các chất cần thiết cho sự sinh trưởng. Cuối pha G1 có điểm kiểm soát G1.\n- Pha S: Diễn ra sự nhân đôi DNA và nhiễm sắc thể.\n- Pha G2: Tế bào tổng hợp các chất còn lại và chuẩn bị cho quá trình phân bào. Cuối pha G2 có điểm kiểm soát G2.\nPha M (Phân bào): Gồm quá trình nguyên phân và phân chia tế bào chất." },
          { title: "3. Kiểm soát chu kì tế bào", content: "Chu kì tế bào được điều hòa chặt chẽ bởi một hệ thống kiểm soát. Các điểm kiểm soát (checkpoint) ở cuối các pha G1, G2 và trong quá trình nguyên phân sẽ đảm bảo các sự kiện diễn ra đúng trình tự và sửa chữa các sai sót. Nếu sai hỏng không thể sửa chữa, tế bào sẽ được lập trình để tự chết (apoptosis). Sự rối loạn trong kiểm soát chu kì tế bào có thể dẫn đến bệnh ung thư." }
        ]
      },
      {
        header: "II. NGUYÊN PHÂN",
        subsections: [
          { title: "1. Các kì của nguyên phân", content: "Nguyên phân là quá trình phân chia nhân, gồm 4 kì liên tiếp:\n- Kì đầu: Các NST kép bắt đầu co xoắn. Thoi phân bào hình thành. Màng nhân và nhân con tiêu biến.\n- Kì giữa: Các NST kép co xoắn cực đại và xếp thành một hàng trên mặt phẳng xích đạo của thoi phân bào.\n- Kì sau: Các nhiễm sắc tử chị em trong mỗi NST kép tách nhau ra và di chuyển trên thoi phân bào về hai cực của tế bào.\n- Kì cuối: Các NST đơn dãn xoắn. Màng nhân và nhân con xuất hiện trở lại. Thoi phân bào tiêu biến.\nSau khi phân chia nhân xong là quá trình phân chia tế bào chất, tạo thành hai tế bào con." },
          { title: "2. Ý nghĩa của nguyên phân", content: "Đối với sinh vật nhân thực đơn bào, nguyên phân là cơ chế sinh sản. Đối với sinh vật nhân thực đa bào, nguyên phân giúp làm tăng số lượng tế bào, giúp cơ thể lớn lên, tái tạo các mô và cơ quan bị tổn thương, và là cơ sở của sinh sản vô tính." }
        ]
      }
    ]
  },
  'chap5-1': { // Bài 17
    summary: {
      intro: "Giảm phân là hình thức phân bào đặc biệt xảy ra ở các tế bào sinh dục chín, tạo ra các giao tử có bộ nhiễm sắc thể giảm đi một nửa (đơn bội, n). Qua thụ tinh, bộ nhiễm sắc thể lưỡng bội được khôi phục, duy trì ổn định bộ NST của loài qua các thế hệ.",
      coreKnowledge: [
        { title: "Diễn biến giảm phân", content: "Gồm hai lần phân bào liên tiếp (Giảm phân I và Giảm phân II) nhưng nhiễm sắc thể chỉ nhân đôi một lần ở kì trung gian trước giảm phân I.", emoji: "➗➗" },
        { title: "Giảm phân I", content: "Là lần phân bào giảm nhiễm. Các NST kép trong cặp tương đồng phân li về hai cực tế bào, tạo ra hai tế bào con có bộ NST kép giảm đi một nửa (n kép).", emoji: "👨‍👩‍👧‍👦 ➡️ 👨‍👧 + 👩‍👦" },
        { title: "Giảm phân II", content: "Tương tự nguyên phân. Các nhiễm sắc tử chị em của mỗi NST kép tách nhau ra, tạo ra các tế bào con có bộ NST đơn bội (n đơn).", emoji: "👨‍👧 ➡️ 👨 + 👧" },
        { title: "Ý nghĩa của giảm phân", content: "Tạo ra giao tử (n), qua thụ tinh khôi phục bộ NST lưỡng bội (2n). Sự kết hợp của trao đổi chéo và phân li độc lập tạo ra vô số biến dị tổ hợp, là nguồn nguyên liệu cho tiến hóa và chọn giống.", emoji: "🎲" }
      ],
      vocabulary: [
        { term: "Nhiễm sắc thể tương đồng", definition: "Cặp NST giống nhau về hình dạng, kích thước và trình tự gene; một chiếc có nguồn gốc từ bố, một chiếc từ mẹ." },
        { term: "Trao đổi chéo", definition: "Hiện tượng các nhiễm sắc tử không chị em trong cặp NST tương đồng trao đổi các đoạn tương ứng cho nhau, xảy ra ở kì đầu I." },
        { term: "Giao tử", definition: "Tế bào sinh sản (trứng, tinh trùng) có bộ NST đơn bội (n), được tạo ra qua giảm phân." },
        { term: "Biến dị tổ hợp", definition: "Sự tổ hợp lại các tính trạng của bố mẹ do sự phân li độc lập và tổ hợp tự do của các cặp NST trong giảm phân và thụ tinh." }
      ]
    },
    examples: [
      { title: "Sự đa dạng của anh chị em", scenario: "Trong một gia đình, anh chị em ruột (không phải sinh đôi cùng trứng) đều có những đặc điểm giống bố mẹ nhưng cũng có nhiều điểm khác nhau và khác với anh chị em của mình.", explanation: "Do quá trình giảm phân tạo giao tử, hiện tượng trao đổi chéo và phân li độc lập đã tạo ra vô số loại giao tử khác nhau về tổ hợp gen. Sự kết hợp ngẫu nhiên của các giao tử này trong thụ tinh tạo ra những đứa con có kiểu gen độc nhất, làm tăng sự đa dạng di truyền.", emoji: "👨‍👩‍👧‍👦" },
      { title: "Hội chứng Down", scenario: "Người mắc hội chứng Down có 3 nhiễm sắc thể số 21 trong bộ gen.", explanation: "Đây là hậu quả của một rối loạn trong giảm phân. Cặp NST 21 đã không phân li trong quá trình tạo giao tử ở bố hoặc mẹ, dẫn đến tạo ra giao tử mang hai NST 21. Khi giao tử này kết hợp với giao tử bình thường (mang một NST 21), sẽ tạo ra hợp tử có ba NST 21.", emoji: "🧬" }
    ],
    textbook: [
      {
        header: "I. GIẢM PHÂN I",
        subsections: [
          { title: "1. Kì đầu I", content: "Các NST kép bắt đầu co xoắn. Xảy ra hiện tượng tiếp hợp và trao đổi chéo giữa các chromatid khác nguồn gốc trong cặp NST kép tương đồng. Màng nhân và nhân con tiêu biến, thoi phân bào hình thành." },
          { title: "2. Kì giữa I", content: "Các cặp NST kép tương đồng co xoắn cực đại và xếp thành hai hàng trên mặt phẳng xích đạo của thoi phân bào." },
          { title: "3. Kì sau I", content: "Mỗi NST kép trong cặp tương đồng phân li độc lập về một cực của tế bào." },
          { title: "4. Kì cuối I", content: "Các NST kép đi về hai cực của tế bào. Tế bào chất phân chia tạo thành hai tế bào con có số lượng NST kép giảm đi một nửa (n kép)." }
        ]
      },
      {
        header: "II. GIẢM PHÂN II",
        subsections: [
          { title: "1. Kì đầu II", content: "NST kép co lại. Thoi phân bào hình thành." },
          { title: "2. Kì giữa II", content: "Các NST kép xếp thành một hàng trên mặt phẳng xích đạo của thoi phân bào." },
          { title: "3. Kì sau II", content: "Các chromatid chị em trong từng NST kép tách nhau ra và di chuyển về hai cực của tế bào, trở thành các NST đơn." },
          { title: "4. Kì cuối II", content: "Các NST đơn dãn xoắn. Màng nhân và nhân con xuất hiện. Tế bào chất phân chia, tạo ra bốn tế bào con có bộ NST đơn bội (n đơn)." }
        ]
      },
      {
        header: "III. Ý NGHĨA CỦA GIẢM PHÂN",
        subsections: [
          { title: "1. Ý nghĩa", content: "Giảm phân tạo ra các giao tử mang bộ NST đơn bội (n). Thông qua thụ tinh, bộ NST lưỡng bội (2n) của loài được khôi phục, đảm bảo duy trì ổn định bộ NST đặc trưng của loài qua các thế hệ sinh sản hữu tính.\nSự phân li độc lập của các cặp NST tương đồng và hiện tượng trao đổi chéo trong giảm phân đã tạo ra rất nhiều loại giao tử khác nhau, làm xuất hiện các biến dị tổ hợp, là nguồn nguyên liệu phong phú cho quá trình tiến hoá và chọn giống." }
        ]
      }
    ]
  },
  'chap5-2': { // Bài 18
    summary: {
      intro: "Bài thực hành này hướng dẫn cách làm tiêu bản tạm thời của tế bào rễ hành và bao phấn ở hoa hẹ (hoặc châu chấu đực) để quan sát các kì của quá trình nguyên phân và giảm phân dưới kính hiển vi.",
      coreKnowledge: [
        { title: "Mục tiêu", content: "Làm được tiêu bản và nhận biết được một số kì của nguyên phân và giảm phân qua hình ảnh quan sát được từ kính hiển vi.", emoji: "🎯" },
        { title: "Quan sát Nguyên phân", content: "Sử dụng mẫu rễ hành, tập trung vào vùng mô phân sinh ngọn rễ, nơi các tế bào đang phân chia mạnh mẽ. Có thể nhận biết các kì dựa vào hình thái và sự sắp xếp của NST.", emoji: "🧅" },
        { title: "Quan sát Giảm phân", content: "Sử dụng mẫu bao phấn hoa hẹ hoặc tinh hoàn châu chấu đực. Đây là các cơ quan chứa các tế bào sinh dục đang trong quá trình giảm phân tạo giao tử/bào tử.", emoji: "🌸" },
        { title: "Các bước chính", content: "Bao gồm cố định mẫu, thủy phân (làm mềm tế bào bằng acid), nhuộm màu (để làm NST bắt màu và dễ quan sát) và làm dập tiêu bản (dàn mỏng tế bào).", emoji: "🔬" }
      ],
      vocabulary: [
        { term: "Tiêu bản tạm thời", definition: "Loại tiêu bản được làm nhanh để quan sát ngay, không dùng để lưu trữ lâu dài." },
        { term: "Dung dịch cố định", definition: "Hóa chất (ví dụ: cồn-acid acetic) dùng để giết chết tế bào một cách nhanh chóng nhưng vẫn giữ nguyên cấu trúc của chúng." },
        { term: "Nhuộm Aceto-carmine", definition: "Thuốc nhuộm có tính acid, có khả năng bắt màu đặc hiệu với nhiễm sắc thể, làm chúng hiện rõ dưới kính hiển vi." }
      ]
    },
    examples: [
      { title: "Nhận biết Kì giữa Nguyên phân", scenario: "Quan sát tiêu bản rễ hành, tìm một tế bào có các cấu trúc hình que đậm màu xếp thẳng hàng ở giữa tế bào.", explanation: "Đây là hình ảnh đặc trưng của kì giữa nguyên phân, khi các NST kép co xoắn cực đại và xếp thành một hàng trên mặt phẳng xích đạo.", emoji: "🔬" },
      { title: "Nhận biết Kì sau Giảm phân I", scenario: "Quan sát tiêu bản bao phấn hoa, thấy một tế bào có các NST kép đang di chuyển về hai phía đối diện của tế bào.", explanation: "Đây là hình ảnh của kì sau I giảm phân, khi các NST kép trong cặp tương đồng phân li về hai cực của tế bào.", emoji: "🔬" }
    ],
    textbook: [
      {
        header: "I. THỰC HÀNH LÀM VÀ QUAN SÁT TIÊU BẢN QUÁ TRÌNH NGUYÊN PHÂN",
        subsections: [
          { title: "1. Chuẩn bị", content: "Dụng cụ: kính hiển vi, lam kính, lamen, dao lam, kim mũi mác, đèn cồn, lọ đựng mẫu. Mẫu vật: rễ hành. Hóa chất: dung dịch cố định Carnoy, HCl 1N, thuốc nhuộm Aceto-carmine, nước cất." },
          { title: "2. Tiến hành", content: "Bước 1: Cắt lấy các đầu rễ hành dài 1-1.5 cm và cố định trong dung dịch Carnoy trong 1-2 giờ.\nBước 2: Rửa rễ bằng nước cất.\nBước 3: Thủy phân mẫu trong HCl 1N ở 60°C trong 5-7 phút, sau đó rửa lại bằng nước cất.\nBước 4: Cắt một đoạn mô phân sinh (khoảng 2-3 mm) ở đầu chóp rễ đặt lên lam kính, nhỏ 1 giọt thuốc nhuộm Aceto-carmine.\nBước 5: Đậy lamen và dùng cán kim mũi mác gõ nhẹ lên lamen, sau đó dùng ngón tay cái ấn nhẹ lên lamen qua một tờ giấy lọc để làm dập tế bào.\nBước 6: Quan sát dưới kính hiển vi từ vật kính nhỏ đến lớn, tìm và nhận biết các kì của nguyên phân." }
        ]
      },
      {
        header: "II. THỰC HÀNH LÀM VÀ QUAN SÁT TIÊU BẢN QUÁ TRÌNH GIẢM PHÂN",
        subsections: [
          { title: "1. Chuẩn bị", content: "Mẫu vật: Bao phấn hoa hẹ non hoặc tinh hoàn của châu chấu đực. Dụng cụ và hóa chất tương tự thí nghiệm nguyên phân." },
          { title: "2. Tiến hành", content: "Các bước cố định, thủy phân, nhuộm màu và làm dập tiêu bản được tiến hành tương tự như với mẫu rễ hành. Sau đó quan sát dưới kính hiển vi để tìm các tế bào đang ở các kì khác nhau của giảm phân I và giảm phân II." }
        ]
      },
      {
        header: "III. THU HOẠCH",
        subsections: [
          { title: "BÁO CÁO THỰC HÀNH", content: "Vẽ hình các kì nguyên phân và giảm phân quan sát được, chú thích các thành phần chính. Nêu nhận xét về hình thái NST qua các kì." }
        ]
      }
    ]
  },
  'chap5-3': { // Bài 19
    summary: {
      intro: "Công nghệ tế bào là một lĩnh vực của công nghệ sinh học, sử dụng các kĩ thuật nuôi cấy tế bào hoặc mô để tạo ra các sản phẩm phục vụ đời sống con người. Lĩnh vực này có nhiều thành tựu và ứng dụng to lớn trong nông nghiệp, y học và thực phẩm.",
      coreKnowledge: [
        { title: "Nguyên lí", content: "Dựa trên tính toàn năng của tế bào (khả năng một tế bào có thể phát triển thành cơ thể hoàn chỉnh) và khả năng biệt hóa, phản biệt hóa của tế bào.", emoji: "🔬" },
        { title: "Công nghệ tế bào thực vật", content: "Gồm các kĩ thuật như nuôi cấy mô tế bào, tạo giống cây trồng sạch bệnh, nhân nhanh giống quý hiếm, và tạo các giống cây trồng mới thông qua lai tế bào soma hoặc nuôi cấy hạt phấn.", emoji: "🌱" },
        { title: "Công nghệ tế bào động vật", content: "Bao gồm các kĩ thuật như nhân bản vô tính (tạo ra các cá thể có kiểu gen giống hệt nhau) và nuôi cấy tế bào gốc để ứng dụng trong y học tái tạo, điều trị bệnh.", emoji: "🐑" },
        { title: "Thành tựu và triển vọng", content: "Tạo ra các giống cây trồng có năng suất cao, kháng bệnh; sản xuất các hoạt chất sinh học; liệu pháp tế bào gốc trong điều trị bỏng, tim mạch, Parkinson; nhân bản động vật quý hiếm.", emoji: "🏆" }
      ],
      vocabulary: [
        { term: "Tính toàn năng", definition: "Khả năng của một tế bào đơn lẻ có thể phân chia và biệt hóa để phát triển thành một cơ thể hoàn chỉnh." },
        { term: "Nuôi cấy mô", definition: "Kĩ thuật nuôi cấy các tế bào, mô, hoặc cơ quan thực vật trong môi trường dinh dưỡng nhân tạo, vô trùng." },
        { term: "Nhân bản vô tính", definition: "Quá trình tạo ra một cá thể mới có thông tin di truyền giống hệt cá thể gốc, bằng cách chuyển nhân của tế bào soma vào một tế bào trứng đã bị loại bỏ nhân." },
        { term: "Tế bào gốc", definition: "Các tế bào chưa biệt hóa, có khả năng tự tái tạo và biệt hóa thành nhiều loại tế bào chuyên hóa khác nhau." }
      ]
    },
    examples: [
      { title: "Nhân giống hoa lan", scenario: "Từ một đỉnh sinh trưởng của cây lan quý, người ta có thể tạo ra hàng triệu cây con giống hệt cây mẹ trong một thời gian ngắn.", explanation: "Đây là ứng dụng của kĩ thuật nuôi cấy mô. Các tế bào từ đỉnh sinh trưởng được nuôi cấy trong môi trường dinh dưỡng thích hợp, chúng sẽ nguyên phân và phát triển thành các cây con hoàn chỉnh, giữ nguyên đặc tính của cây mẹ.", emoji: "🌸" },
      { title: "Liệu pháp tế bào gốc", scenario: "Bệnh nhân bị bỏng nặng được ghép da nuôi cấy từ chính tế bào gốc của họ.", explanation: "Tế bào gốc được lấy từ cơ thể bệnh nhân, nuôi cấy để tạo ra các tấm da lớn trong phòng thí nghiệm. Các tấm da này sau đó được ghép lại cho bệnh nhân, giúp tái tạo vùng da bị tổn thương mà không bị hệ miễn dịch đào thải.", emoji: "👨‍⚕️" }
    ],
    textbook: [
      {
        header: "I. CÔNG NGHỆ TẾ BÀO THỰC VẬT",
        subsections: [
          { title: "1. Nuôi cấy mô tế bào", content: "Đây là phương pháp tách rời tế bào, mô, cơ quan từ cơ thể thực vật rồi nuôi cấy trong môi trường dinh dưỡng nhân tạo, vô trùng để chúng tiếp tục sống, phát triển thành mô sẹo hoặc tái sinh thành cây hoàn chỉnh. Kĩ thuật này được ứng dụng để nhân nhanh các giống cây trồng quý hiếm, tạo ra số lượng lớn cây con đồng đều về mặt di truyền và sạch bệnh." },
          { title: "2. Tạo giống cây trồng mới", content: "Các kĩ thuật như dung hợp tế bào trần (lai tế bào soma) cho phép tạo ra các cây lai mang đặc điểm của cả hai loài khác xa nhau mà không thể lai hữu tính được. Nuôi cấy hạt phấn hoặc noãn chưa thụ tinh rồi lưỡng bội hóa có thể tạo ra các dòng cây đồng hợp tử thuần chủng, rút ngắn thời gian tạo giống." }
        ]
      },
      {
        header: "II. CÔNG NGHỆ TẾ BÀO ĐỘNG VẬT",
        subsections: [
          { title: "1. Nhân bản vô tính", content: "Là kĩ thuật chuyển nhân của một tế bào soma (2n) vào một tế bào trứng đã lấy mất nhân, rồi kích thích tế bào trứng phát triển thành phôi. Phôi này sau đó được cấy vào tử cung của một cá thể cái để mang thai và sinh ra con non có kiểu gen giống hệt cá thể cho nhân. Thành tựu nổi bật là cừu Dolly (1996). Kĩ thuật này có ý nghĩa trong việc nhân bản các động vật có giá trị kinh tế cao hoặc các loài quý hiếm có nguy cơ tuyệt chủng." },
          { title: "2. Nuôi cấy tế bào gốc", content: "Tế bào gốc là các tế bào chưa biệt hóa, có khả năng phân chia và biệt hóa thành nhiều loại tế bào khác nhau. Công nghệ tế bào gốc nghiên cứu các ứng dụng của tế bào gốc để thay thế các tế bào, mô bị tổn thương hoặc mắc bệnh. Đây là một hướng đi đầy triển vọng trong y học tái tạo, điều trị các bệnh như tiểu đường, Parkinson, tim mạch, bỏng,..." }
        ]
      }
    ]
  },
  // =================================================================
  // PHẦN HAI: SINH HỌC VI SINH VẬT VÀ VIRUS
  // =================================================================
  'chap6-0': { // Bài 20
    summary: {
      intro: "Vi sinh vật là những sinh vật có kích thước hiển vi, bao gồm nhiều nhóm đa dạng như vi khuẩn, archaea, virus, nấm, tảo đơn bào, và động vật nguyên sinh. Do kích thước nhỏ, việc nghiên cứu chúng đòi hỏi các phương pháp chuyên biệt như phân lập, nuôi cấy và định danh.",
      coreKnowledge: [
        { title: "Sự đa dạng", content: "Vi sinh vật có mặt ở khắp mọi nơi, trong các môi trường khắc nghiệt nhất. Chúng rất đa dạng về cấu tạo (nhân sơ, nhân thực), hình dạng và phương thức sống.", emoji: "🌍" },
        { title: "Các phương pháp nghiên cứu", content: "Gồm phân lập (tách riêng từng loài), nuôi cấy (tạo điều kiện cho VSV phát triển trên môi trường dinh dưỡng), định danh (xác định tên loài) và quan sát hình thái.", emoji: "🔬" },
        { title: "Môi trường nuôi cấy", content: "Có nhiều loại môi trường khác nhau: môi trường tự nhiên, môi trường tổng hợp (biết rõ thành phần), môi trường bán tổng hợp. Môi trường có thể ở dạng lỏng hoặc đặc (thêm agar).", emoji: "🧪" },
        { title: "Nhuộm Gram", content: "Là phương pháp nhuộm phân biệt quan trọng, chia vi khuẩn thành hai nhóm Gram dương (Gr+) và Gram âm (Gr-) dựa trên sự khác biệt về cấu trúc thành tế bào.", emoji: "🟣" }
      ],
      vocabulary: [
        { term: "Vi sinh vật (VSV)", definition: "Những sinh vật đơn bào hoặc tập hợp đơn bào, có kích thước rất nhỏ, chỉ quan sát được dưới kính hiển vi." },
        { term: "Phân lập", definition: "Kĩ thuật tách riêng các loài vi sinh vật từ một quần thể ban đầu để thu được các chủng thuần khiết." },
        { term: "Chủng thuần khiết", definition: "Một quần thể vi sinh vật được tạo ra từ một tế bào ban đầu." },
        { term: "Khuẩn lạc", definition: "Một khối tế bào vi khuẩn có thể nhìn thấy bằng mắt thường, phát triển trên bề mặt môi trường đặc, được hình thành từ một tế bào ban đầu." }
      ]
    },
    examples: [
      { title: "Xác định vi khuẩn gây bệnh", scenario: "Bác sĩ lấy mẫu bệnh phẩm (máu, đờm) của bệnh nhân, đem nuôi cấy trên môi trường dinh dưỡng để vi khuẩn mọc thành khuẩn lạc.", explanation: "Từ khuẩn lạc, vi khuẩn được phân lập, nhuộm Gram và thực hiện các xét nghiệm sinh hóa để định danh chính xác loài vi khuẩn gây bệnh. Kết quả này giúp bác sĩ chọn đúng loại kháng sinh để điều trị.", emoji: "👨‍⚕️" },
      { title: "Tìm kiếm enzyme mới", scenario: "Các nhà khoa học lấy mẫu đất từ suối nước nóng, phân lập các vi khuẩn chịu nhiệt.", explanation: "Những vi khuẩn sống trong môi trường khắc nghiệt thường tạo ra các enzyme có đặc tính bền nhiệt. Bằng cách nuôi cấy và nghiên cứu chúng, các nhà khoa học có thể tìm ra các enzyme mới có giá trị ứng dụng cao trong công nghiệp (ví dụ enzyme Taq polymerase trong PCR).", emoji: "🌋" }
    ],
    textbook: [
      {
        header: "I. SỰ ĐA DẠNG CỦA VI SINH VẬT",
        subsections: [
          { title: "1. Khái niệm vi sinh vật", content: "Vi sinh vật là những sinh vật có kích thước rất nhỏ, thường là đơn bào, không quan sát được bằng mắt thường mà phải dùng kính hiển vi. Chúng bao gồm các nhóm chính: vi khuẩn, archaea, virus, nấm (nấm men, nấm mốc), tảo đơn bào, động vật nguyên sinh." },
          { title: "2. Các môi trường sống của vi sinh vật", content: "Vi sinh vật có khả năng hấp thu và chuyển hóa chất dinh dưỡng nhanh, sinh trưởng và sinh sản rất nhanh, và có khả năng thích ứng cao, do đó chúng có mặt ở khắp mọi nơi: trong đất, nước, không khí, trên cơ thể sinh vật khác, và cả trong những môi trường khắc nghiệt (suối nước nóng, biển sâu, sa mạc, vùng cực)." }
        ]
      },
      {
        header: "II. CÁC PHƯƠNG PHÁP NGHIÊN CỨU VI SINH VẬT",
        subsections: [
          { title: "1. Phương pháp phân lập và nuôi cấy", content: "Để nghiên cứu một loài VSV, cần tách chúng ra khỏi các loài khác (phân lập) để tạo ra một chủng thuần khiết. Các phương pháp phân lập phổ biến là phương pháp pha loãng và phương pháp vết cấy.\nSau khi phân lập, VSV được nuôi cấy trên các môi trường dinh dưỡng thích hợp để chúng phát triển, tạo thành các khuẩn lạc (trên môi trường đặc) hoặc làm đục môi trường (trong môi trường lỏng)." },
          { title: "2. Các loại môi trường nuôi cấy", content: "- Môi trường tự nhiên: Chứa các chất tự nhiên không xác định được chính xác thành phần và số lượng (vd: cao thịt, peptone).\n- Môi trường tổng hợp: Các chất hóa học đã biết rõ thành phần và nồng độ.\n- Môi trường bán tổng hợp: Gồm các chất hóa học đã biết và một số thành phần tự nhiên." },
          { title: "3. Phương pháp quan sát", content: "Quan sát hình thái khuẩn lạc (hình dạng, màu sắc, kích thước). Làm tiêu bản và nhuộm màu để quan sát hình thái tế bào dưới kính hiển vi. Phương pháp nhuộm Gram là một kĩ thuật cơ bản để phân biệt vi khuẩn Gram dương và Gram âm." }
        ]
      }
    ]
  },
  'chap6-1': { // Bài 21
    summary: {
      intro: "Vi sinh vật có các kiểu trao đổi chất rất đa dạng để thích nghi với các điều kiện sống khác nhau. Sự sinh trưởng của chúng được hiểu là sự gia tăng số lượng tế bào trong quần thể, diễn ra theo một quy luật đặc trưng. Chúng cũng có nhiều hình thức sinh sản.",
      coreKnowledge: [
        { title: "Các kiểu dinh dưỡng", content: "Dựa vào nguồn năng lượng (quang năng, hóa năng) và nguồn carbon (CO₂, chất hữu cơ), VSV được chia thành 4 kiểu: quang tự dưỡng, hóa tự dưỡng, quang dị dưỡng, hóa dị dưỡng.", emoji: "🍽️" },
        { title: "Sinh trưởng của quần thể vi khuẩn", content: "Trong môi trường nuôi cấy tĩnh, sự sinh trưởng diễn ra theo 4 pha: pha tiềm phát (lag), pha lũy thừa (log), pha cân bằng và pha suy vong.", emoji: "📈" },
        { title: "Sinh sản", content: "Hình thức sinh sản chủ yếu ở VSV nhân sơ là phân đôi. VSV nhân thực có thể sinh sản bằng phân đôi, nảy chồi hoặc bằng bào tử (vô tính và hữu tính).", emoji: "➕" },
        { title: "Yếu tố ảnh hưởng", content: "Sự sinh trưởng của VSV chịu ảnh hưởng của các yếu tố vật lí (nhiệt độ, pH, độ ẩm, ánh sáng, áp suất thẩm thấu) và hóa học (chất dinh dưỡng, chất ức chế).", emoji: "🌡️" }
      ],
      vocabulary: [
        { term: "Sinh trưởng của vi sinh vật", definition: "Sự gia tăng số lượng tế bào của quần thể vi sinh vật." },
        { term: "Thời gian thế hệ (g)", definition: "Thời gian cần thiết để số lượng tế bào trong quần thể tăng lên gấp đôi." },
        { term: "Pha lũy thừa (pha log)", definition: "Giai đoạn vi sinh vật phân chia với tốc độ tối đa và không đổi, số lượng tế bào tăng theo cấp số nhân." },
        { term: "Bào tử", definition: "Cấu trúc sinh sản hoặc tiềm sinh của vi sinh vật, có thể là bào tử vô tính, hữu tính hoặc nội bào tử (ở vi khuẩn)." }
      ]
    },
    examples: [
      { title: "Sản xuất sinh khối", scenario: "Trong công nghiệp, người ta nuôi cấy vi sinh vật trong hệ thống liên tục (nuôi cấy liên tục) để thu sinh khối hoặc các sản phẩm trao đổi chất.", explanation: "Bằng cách liên tục bổ sung chất dinh dưỡng và loại bỏ sản phẩm, người ta có thể giữ cho quần thể vi sinh vật luôn ở pha lũy thừa, nơi tốc độ sinh trưởng là cao nhất, từ đó tối đa hóa hiệu suất sản xuất.", emoji: "🏭" },
      { title: "Thức ăn bị ôi thiu", scenario: "Cơm hoặc thức ăn để ở nhiệt độ phòng, đặc biệt vào mùa hè, sẽ nhanh bị hỏng và có mùi chua.", explanation: "Nhiệt độ ấm áp (khoảng 30-40°C) là điều kiện tối ưu cho nhiều loại vi khuẩn và nấm mốc sinh trưởng. Chúng sẽ nhanh chóng bước vào pha lũy thừa, phân giải chất dinh dưỡng trong thức ăn và thải ra các sản phẩm phụ (acid, khí), gây ôi thiu.", emoji: "ôi" }
    ],
    textbook: [
      {
        header: "I. TRAO ĐỔI CHẤT VÀ CHUYỂN HOÁ NĂNG LƯỢNG",
        subsections: [
          { title: "1. Các kiểu dinh dưỡng", content: "Vi sinh vật có các kiểu dinh dưỡng rất đa dạng, được phân loại dựa trên nguồn năng lượng và nguồn carbon:\n- Quang tự dưỡng: Năng lượng từ ánh sáng, nguồn carbon từ CO₂ (vi khuẩn lam, tảo).\n- Hóa tự dưỡng: Năng lượng từ chất vô cơ, nguồn carbon từ CO₂ (vi khuẩn nitrat hóa).\n- Quang dị dưỡng: Năng lượng từ ánh sáng, nguồn carbon từ chất hữu cơ (vi khuẩn không chứa lưu huỳnh màu tía).\n- Hóa dị dưỡng: Năng lượng và nguồn carbon đều từ chất hữu cơ (nấm, động vật nguyên sinh, phần lớn vi khuẩn)." },
          { title: "2. Hô hấp và lên men", content: "Hóa dị dưỡng là kiểu dinh dưỡng phổ biến nhất. Các VSV hóa dị dưỡng phân giải chất hữu cơ để thu năng lượng thông qua hô hấp (hiếu khí, kị khí) hoặc lên men." }
        ]
      },
      {
        header: "II. SINH TRƯỞNG CỦA QUẦN THỂ VI SINH VẬT",
        subsections: [
          { title: "1. Khái niệm sinh trưởng", content: "Sự sinh trưởng của quần thể vi sinh vật là sự gia tăng số lượng tế bào trong quần thể. Thời gian cho một lần phân chia hay thời gian để số tế bào trong quần thể tăng gấp đôi được gọi là thời gian thế hệ (g)." },
          { title: "2. Sinh trưởng trong nuôi cấy không liên tục", content: "Đây là môi trường nuôi cấy không được bổ sung chất dinh dưỡng mới và không được lấy đi các sản phẩm trao đổi chất. Đường cong sinh trưởng gồm 4 pha:\n- Pha tiềm phát (lag): Vi khuẩn thích nghi với môi trường, số lượng tế bào chưa tăng.\n- Pha lũy thừa (log): Vi khuẩn trao đổi chất và phân chia mạnh mẽ, số lượng tế bào tăng theo cấp số nhân.\n- Pha cân bằng: Tốc độ sinh sản bằng tốc độ chết, do chất dinh dưỡng cạn kiệt và chất độc tích lũy.\n- Pha suy vong: Số tế bào chết nhiều hơn số tế bào mới được tạo ra." },
          { title: "3. Sinh trưởng trong nuôi cấy liên tục", content: "Là môi trường được bổ sung liên tục chất dinh dưỡng và loại bỏ không ngừng các chất thải. Trong điều kiện này, có thể duy trì quần thể ở pha lũy thừa trong thời gian dài, ứng dụng trong sản xuất công nghiệp." }
        ]
      },
      {
        header: "III. SINH SẢN CỦA VI SINH VẬT",
        subsections: [
          { title: "1. Sinh sản ở vi sinh vật nhân sơ", content: "Hình thức sinh sản chủ yếu là phân đôi. Một số có thể sinh sản bằng nảy chồi hoặc tạo bào tử." },
          { title: "2. Sinh sản ở vi sinh vật nhân thực", content: "Có thể sinh sản vô tính (phân đôi, nảy chồi, bào tử vô tính) hoặc hữu tính (kết hợp giao tử, tạo bào tử hữu tính)." }
        ]
      },
      {
        header: "IV. CÁC YẾU TỐ ẢNH HƯỞNG ĐẾN SINH TRƯỞNG CỦA VI SINH VẬT",
        subsections: [
          { title: "1. Yếu tố hoá học", content: "Bao gồm các chất dinh dưỡng (nguồn carbon, nito, khoáng, yếu tố sinh trưởng) và các chất ức chế sinh trưởng (kháng sinh, chất sát khuẩn)." },
          { title: "2. Yếu tố vật lí", content: "Nhiệt độ, độ pH, độ ẩm, ánh sáng, áp suất thẩm thấu. Mỗi loài vi sinh vật sinh trưởng tốt nhất trong một khoảng nhất định của các yếu tố này." }
        ]
      }
    ]
  },
  'chap6-2': { // Bài 22
    summary: {
      intro: "Mặc dù có kích thước nhỏ bé, vi sinh vật đóng vai trò vô cùng quan trọng trong tự nhiên và có nhiều ứng dụng to lớn trong đời sống con người, từ sản xuất thực phẩm, dược phẩm đến nông nghiệp và xử lý ô nhiễm môi trường.",
      coreKnowledge: [
        { title: "Vai trò trong tự nhiên", content: "Tham gia vào các chu trình tuần hoàn vật chất (C, N, S, P), phân giải chất thải và xác sinh vật, cung cấp O₂ (vi khuẩn lam, tảo), và là mắt xích quan trọng trong chuỗi thức ăn.", emoji: "🌍" },
        { title: "Ứng dụng trong Nông nghiệp", content: "Sản xuất phân bón vi sinh (cố định đạm, phân giải lân), thuốc trừ sâu sinh học, cải tạo đất.", emoji: "🌱" },
        { title: "Ứng dụng trong Công nghiệp", content: "Sản xuất thực phẩm (sữa chua, phô mai, bia, rượu, nước tương), sản xuất kháng sinh, vaccine, enzyme, amino acid, nhiên liệu sinh học.", emoji: "🏭" },
        { title: "Ứng dụng trong Môi trường", content: "Xử lý rác thải hữu cơ, nước thải sinh hoạt và công nghiệp, phân giải các chất độc hại như dầu loang, thuốc trừ sâu.", emoji: "♻️" }
      ],
      vocabulary: [
        { term: "Cố định đạm", definition: "Quá trình chuyển hóa N₂ trong khí quyển thành dạng NH₃ mà cây trồng có thể hấp thụ được, thực hiện bởi một số loài vi khuẩn." },
        { term: "Thuốc trừ sâu sinh học", definition: "Các sản phẩm chứa vi sinh vật hoặc độc tố của chúng, được sử dụng để tiêu diệt sâu hại mà ít gây ảnh hưởng đến môi trường và con người." },
        { term: "Nhiên liệu sinh học", definition: "Nhiên liệu được sản xuất từ các vật liệu sinh học (sinh khối), ví dụ như ethanol được sản xuất từ quá trình lên men của nấm men." }
      ]
    },
    examples: [
      { title: "Sản xuất kháng sinh Penicillin", scenario: "Trong các nhà máy dược phẩm, nấm mốc Penicillium chrysogenum được nuôi cấy trong các hệ thống lên men lớn.", explanation: "Nấm Penicillium tạo ra kháng sinh penicillin để ức chế sự phát triển của các vi khuẩn cạnh tranh. Con người đã tận dụng khả năng này để sản xuất penicillin ở quy mô công nghiệp, tạo ra một loại thuốc kháng sinh quan trọng cứu sống hàng triệu người.", emoji: "💊" },
      { title: "Cây họ Đậu và vi khuẩn Rhizobium", scenario: "Nông dân thường trồng xen canh cây họ đậu (lạc, đỗ) để cải tạo đất.", explanation: "Vi khuẩn Rhizobium sống cộng sinh trong nốt sần ở rễ cây họ Đậu. Chúng có khả năng cố định nitrogen từ không khí, cung cấp nguồn đạm tự nhiên cho cây và làm giàu dinh dưỡng cho đất.", emoji: "🥜" }
    ],
    textbook: [
      {
        header: "I. VAI TRÒ CỦA VI SINH VẬT TRONG TỰ NHIÊN",
        subsections: [
          { title: "1. Tham gia vào chu trình tuần hoàn vật chất", content: "Vi sinh vật đóng vai trò then chốt trong các chu trình sinh địa hóa như chu trình Carbon, Nitrogen, Sulfur, Phosphorus, bằng cách phân giải các hợp chất hữu cơ và chuyển hóa các chất vô cơ." },
          { title: "2. Phân giải chất thải", content: "Vi sinh vật là những sinh vật phân giải chính trong hệ sinh thái, chúng phân hủy xác động vật, thực vật và các chất thải hữu cơ thành các chất vô cơ đơn giản, trả lại dinh dưỡng cho đất và làm sạch môi trường." },
          { title: "3. Cộng sinh", content: "Nhiều vi sinh vật sống cộng sinh với các sinh vật khác, mang lại lợi ích cho cả hai bên. Ví dụ: vi khuẩn trong đường ruột người giúp tiêu hóa và tổng hợp vitamin; vi khuẩn cố định đạm ở rễ cây họ Đậu." }
        ]
      },
      {
        header: "II. ỨNG DỤNG CỦA VI SINH VẬT TRONG THỰC TIỄN",
        subsections: [
          { title: "1. Trong nông nghiệp", content: "- Sản xuất phân bón vi sinh: Sử dụng các vi sinh vật có khả năng cố định đạm, phân giải lân khó tan, hoặc kích thích sinh trưởng thực vật.\n- Sản xuất thuốc trừ sâu sinh học: Sử dụng các vi khuẩn (như Bacillus thuringiensis) hoặc virus để tiêu diệt côn trùng gây hại một cách chọn lọc." },
          { title: "2. Trong công nghiệp thực phẩm", content: "Ứng dụng quá trình lên men của vi sinh vật để sản xuất nhiều loại thực phẩm và đồ uống như bánh mì (nấm men), bia, rượu (nấm men), sữa chua (vi khuẩn lactic), nước tương (nấm mốc Aspergillus),..." },
          { title: "3. Trong y dược", content: "- Sản xuất kháng sinh: Nhiều loại kháng sinh được sản xuất từ xạ khuẩn và nấm (ví dụ: Penicillin, Streptomycin).\n- Sản xuất vaccine: Sử dụng virus hoặc vi khuẩn bị làm yếu hoặc bất hoạt để kích thích hệ miễn dịch.\n- Sản xuất các hoạt chất sinh học khác như enzyme, vitamin, hormone,..." },
          { title: "4. Trong bảo vệ môi trường", content: "Vi sinh vật được sử dụng rộng rãi trong xử lý nước thải, rác thải, và phân hủy các chất gây ô nhiễm trong đất và nước (phân hủy sinh học)." },
          { title: "5. Trong công nghiệp năng lượng", content: "Sản xuất nhiên liệu sinh học như ethanol từ quá trình lên men đường, hoặc khí biogas (methane) từ sự phân hủy chất hữu cơ của vi sinh vật kị khí." }
        ]
      }
    ]
  },
  'chap6-3': { // Bài 23
    summary: {
      intro: "Bài thực hành này giúp vận dụng kiến thức về vi sinh vật vào thực tế thông qua các hoạt động: quan sát hình thái một số nhóm vi sinh vật, tìm hiểu các sản phẩm công nghệ vi sinh vật và tự tay làm các sản phẩm lên men như sữa chua, dưa muối.",
      coreKnowledge: [
        { title: "Mục tiêu", content: "Quan sát và mô tả được hình thái của nấm men, nấm mốc. Trình bày được quy trình và tự làm được sản phẩm lên men. Tìm hiểu và trình bày được các thông tin về sản phẩm công nghệ VSV.", emoji: "🎯" },
        { title: "Quan sát vi sinh vật", content: "Làm tiêu bản tạm thời để quan sát hình thái của nấm men (tế bào hình trứng, nảy chồi) và nấm mốc (dạng sợi, có các bào tử).", emoji: "🔬" },
        { title: "Làm sản phẩm lên men", content: "Vận dụng hoạt động của vi khuẩn lactic để làm sữa chua (lên men lactic đồng hình) và muối dưa (lên men lactic dị hình), dựa trên nguyên tắc tạo môi trường thuận lợi cho vi khuẩn có lợi phát triển và ức chế vi khuẩn có hại.", emoji: "🥒" },
        { title: "Tìm hiểu sản phẩm công nghệ VSV", content: "Sưu tầm thông tin về các sản phẩm thương mại có ứng dụng vi sinh vật như thực phẩm, dược phẩm, phân bón,... và trình bày dưới dạng poster, bài thuyết trình.", emoji: "ℹ️" }
      ],
      vocabulary: [
        { term: "Lên men lactic", definition: "Quá trình vi sinh vật (chủ yếu là vi khuẩn lactic) phân giải carbohydrate trong điều kiện kị khí để tạo ra acid lactic." },
        { term: "Nấm men", definition: "Vi nấm đơn bào, thường sinh sản bằng cách nảy chồi, được ứng dụng trong sản xuất bánh mì, bia, rượu." },
        { term: "Nấm mốc (nấm sợi)", definition: "Vi nấm đa bào, có cấu trúc dạng sợi (khuẩn ty), sinh sản bằng bào tử, có vai trò trong sản xuất tương, nước mắm, kháng sinh." }
      ]
    },
    examples: [
      { title: "Làm sữa chua tại nhà", scenario: "Pha sữa đặc với nước ấm, sau đó cho một hộp sữa chua làm men cái vào, khuấy đều và ủ ấm trong khoảng 6-8 tiếng.", explanation: "Sữa chua cái cung cấp giống vi khuẩn lactic. Môi trường sữa và nhiệt độ ấm (khoảng 40-45°C) là điều kiện lý tưởng để vi khuẩn lactic sinh trưởng, lên men đường lactose thành acid lactic, làm sữa đông tụ và tạo vị chua đặc trưng.", emoji: "🥛" },
      { title: "Nấm mốc trên bánh mì", scenario: "Bánh mì để lâu ngày ở nơi ẩm ướt sẽ xuất hiện các đốm mốc màu xanh, đen.", explanation: "Bào tử nấm mốc có sẵn trong không khí, khi gặp điều kiện thuận lợi (độ ẩm cao, có chất dinh dưỡng từ bánh mì), chúng sẽ nảy mầm và phát triển thành các mạng sợi nấm mốc có thể quan sát được.", emoji: "🍞" }
    ],
    textbook: [
      {
        header: "I. QUAN SÁT HÌNH THÁI MỘT SỐ VI SINH VẬT",
        subsections: [
          { title: "1. Quan sát nấm men và nấm mốc", content: "Chuẩn bị mẫu nấm men (men làm bánh mì) và nấm mốc (mốc trên bánh mì, cơm nguội). Làm tiêu bản tạm thời bằng cách lấy một ít mẫu vật, cho vào giọt nước trên lam kính, dàn mỏng, đậy lamen và quan sát dưới kính hiển vi. Quan sát hình dạng tế bào, cách sắp xếp, cách sinh sản (nảy chồi ở nấm men, bào tử ở nấm mốc)." }
        ]
      },
      {
        header: "II. LÀM MỘT SỐ SẢN PHẨM LÊN MEN TỪ VI SINH VẬT",
        subsections: [
          { title: "1. Làm sữa chua", content: "Nguyên liệu: Sữa đặc, nước sôi, nước đun sôi để nguội, sữa chua làm men cái. Quy trình: Pha sữa đặc với nước sôi và nước nguội để có nhiệt độ khoảng 40-50°C. Cho sữa chua cái vào khuấy đều. Rót vào các hũ và ủ ấm trong 6-8 giờ. Sau đó bảo quản trong tủ lạnh." },
          { title: "2. Muối dưa chua", content: "Nguyên liệu: Rau (cải, bắp cải,...), muối, đường, nước đun sôi để nguội. Quy trình: Rửa sạch rau, để ráo. Pha dung dịch nước muối loãng (khoảng 3-5%) với một ít đường. Xếp rau vào vại, đổ ngập dung dịch nước muối, nén chặt. Để ở nơi thoáng mát 2-3 ngày là dưa chua." }
        ]
      },
      {
        header: "III. TÌM HIỂU VỀ CÁC SẢN PHẨM CÔNG NGHỆ VI SINH VẬT",
        subsections: [
          { title: "1. Nội dung", content: "Học sinh tìm hiểu thông tin về các sản phẩm có ứng dụng VSV trong các lĩnh vực: thực phẩm, y tế, nông nghiệp, môi trường,... Thông tin cần có: tên sản phẩm, tên VSV được sử dụng, vai trò của VSV, quy trình sản xuất cơ bản." },
          { title: "2. Hình thức", content: "Trình bày kết quả dưới dạng bài thu hoạch, poster, hoặc bài trình chiếu." }
        ]
      }
    ]
  },
  'chap7-0': { // Bài 24
    summary: {
      intro: "Virus là các thực thể sống không có cấu tạo tế bào, có kích thước siêu hiển vi và sống kí sinh nội bào bắt buộc. Chúng chỉ có thể nhân lên khi ở bên trong tế bào chủ, sử dụng bộ máy di truyền của tế bào chủ để tạo ra các thế hệ virus mới.",
      coreKnowledge: [
        { title: "Đặc điểm cơ bản", content: "Kích thước siêu nhỏ (nanomet), chưa có cấu tạo tế bào, chỉ chứa một loại acid nucleic (DNA hoặc RNA), kí sinh nội bào bắt buộc.", emoji: "🦠" },
        { title: "Cấu trúc", content: "Gồm hai thành phần cơ bản: lõi là acid nucleic (DNA/RNA) và vỏ là protein (capsid). Một số virus có thêm vỏ ngoài là lớp màng lipid kép.", emoji: "🏗️" },
        { title: "Hình thái", content: "Có 3 dạng cấu trúc chính: cấu trúc xoắn (virus khảm thuốc lá), cấu trúc khối (adenovirus), và cấu trúc hỗn hợp (thể thực khuẩn - phage).", emoji: "🌀" },
        { title: "Chu trình nhân lên", content: "Gồm 5 giai đoạn: hấp phụ, xâm nhập, tổng hợp, lắp ráp, và giải phóng. Có hai chu trình chính là chu trình tan và chu trình tiềm tan.", emoji: "🔄" }
      ],
      vocabulary: [
        { term: "Virus", definition: "Thực thể sinh học chưa có cấu tạo tế bào, có khả năng nhân lên nhờ vào hệ thống tổng hợp của tế bào chủ." },
        { term: "Capsid", definition: "Vỏ protein của virus, bao bọc lấy lõi acid nucleic, được cấu tạo từ các đơn vị gọi là capsomer." },
        { term: "Thể thực khuẩn (Phage)", definition: "Loại virus chuyên kí sinh và gây bệnh cho vi khuẩn." },
        { term: "Chu trình tan", definition: "Chu trình nhân lên của virus mà kết quả cuối cùng là làm tan và giết chết tế bào chủ." },
        { term: "Chu trình tiềm tan", definition: "Chu trình nhân lên của virus mà bộ gen của virus cài xen vào bộ gen của tế bào chủ và nhân lên cùng tế bào chủ, không làm tan tế bào." }
      ]
    },
    examples: [
      { title: "Virus cúm (Influenza)", scenario: "Virus cúm xâm nhập vào các tế bào niêm mạc đường hô hấp của người.", explanation: "Virus sử dụng các gai protein trên bề mặt để hấp phụ và xâm nhập vào tế bào chủ. Bên trong, nó sử dụng bộ máy của tế bào để nhân lên, tạo ra hàng ngàn virus mới. Các virus này sau đó phá vỡ tế bào để thoát ra ngoài và lây nhiễm cho các tế bào khác, gây ra các triệu chứng bệnh cúm.", emoji: "🤧" },
      { title: "Virus HIV và chu trình tiềm tan", scenario: "Người nhiễm HIV có thể không biểu hiện triệu chứng trong nhiều năm (giai đoạn tiềm ẩn).", explanation: "Sau khi xâm nhập vào tế bào T-CD4, virus HIV thực hiện chu trình tiềm tan. Bộ gen của nó (dạng RNA) được phiên mã ngược thành DNA và cài xen vào bộ gen của tế bào chủ. Virus tồn tại ở trạng thái không hoạt động và nhân lên cùng với sự phân chia của tế bào. Dưới một tác động nào đó, nó sẽ chuyển sang chu trình tan, phá hủy hàng loạt tế bào T-CD4 và gây ra AIDS.", emoji: "❤️" }
    ],
    textbook: [
      {
        header: "I. KHÁI QUÁT VỀ VIRUS",
        subsections: [
          { title: "1. Đặc điểm của virus", content: "- Kích thước siêu hiển vi: Kích thước của virus rất nhỏ, chỉ từ vài chục đến vài trăm nanomet (nm).\n- Chưa có cấu tạo tế bào: Virus không có màng tế bào, tế bào chất hay các bào quan. Chúng chỉ là một hệ thống gồm lõi acid nucleic và vỏ protein.\n- Sống kí sinh nội bào bắt buộc: Virus không có hệ enzyme chuyển hóa vật chất và năng lượng riêng nên chúng phải sống kí sinh bên trong tế bào của sinh vật khác để tồn tại và nhân lên." },
          { title: "2. Cấu trúc và hình thái của virus", content: "Cấu trúc cơ bản của virus (còn gọi là virion) gồm:\n- Lõi acid nucleic: Chứa vật chất di truyền, có thể là DNA hoặc RNA, chuỗi đơn hoặc chuỗi kép.\n- Vỏ capsid: Được cấu tạo từ các đơn vị protein gọi là capsomer, bao bọc và bảo vệ lõi acid nucleic.\nMột số virus (virus động vật) có thêm lớp vỏ ngoài bao bọc bên ngoài capsid. Vỏ ngoài là một lớp màng lipid kép có nguồn gốc từ màng tế bào chủ, trên bề mặt có các gai glycoprotein.\nVirus có 3 dạng hình thái chính: xoắn, khối và hỗn hợp." }
        ]
      },
      {
        header: "II. QUÁ TRÌNH NHÂN LÊN CỦA VIRUS",
        subsections: [
          { title: "1. Các giai đoạn nhân lên", content: "Chu trình nhân lên của virus trong tế bào chủ thường gồm 5 giai đoạn:\n1. Hấp phụ: Virus bám đặc hiệu lên bề mặt tế bào chủ nhờ sự tương thích giữa gai protein của virus và thụ thể của tế bào chủ.\n2. Xâm nhập: Virus đưa bộ gen của nó vào bên trong tế bào chủ. (Đối với phage, chỉ có acid nucleic được bơm vào. Đối với virus động vật, cả virion có thể được đưa vào qua ẩm bào).\n3. Tổng hợp: Bộ gen của virus điều khiển bộ máy di truyền của tế bào chủ để tổng hợp các thành phần của virus (acid nucleic và protein vỏ).\n4. Lắp ráp: Các thành phần được tổng hợp sẽ lắp ráp lại với nhau để tạo thành các virion hoàn chỉnh.\n5. Phóng thích (giải phóng): Virus mới được tạo thành sẽ phá vỡ tế bào chủ để ồ ạt chui ra ngoài (chu trình tan) hoặc chui ra từ từ qua màng tế bào (nảy chồi)." },
          { title: "2. Chu trình tan và chu trình tiềm tan", content: "Ở thể thực khuẩn, có hai chu trình nhân lên chính:\n- Chu trình tan: Virus nhân lên và làm tan tế bào chủ để giải phóng các virus con.\n- Chu trình tiềm tan: Bộ gen của virus gắn vào bộ gen của tế bào chủ và cùng nhân lên với tế bào chủ. Tế bào ở trạng thái này gọi là tế bào tiềm tan. Khi có tác nhân cảm ứng (tia UV,...), gen của virus sẽ tách ra và chuyển sang chu trình tan." }
        ]
      }
    ]
  },
  'chap7-1': { // Bài 25
    summary: {
      intro: "Virus là tác nhân gây ra nhiều bệnh nguy hiểm cho người, động vật và thực vật. Tuy nhiên, với sự hiểu biết sâu sắc về virus, con người đã và đang khai thác chúng cho những ứng dụng hữu ích trong y học và công nghệ sinh học.",
      coreKnowledge: [
        { title: "Một số bệnh do virus", content: "Các bệnh phổ biến ở người bao gồm HIV/AIDS, cúm, COVID-19, sởi, sốt xuất huyết, viêm gan B. Virus cũng gây bệnh cho thực vật (bệnh khảm, xoăn lá) và động vật (bệnh dại, lở mồm long móng).", emoji: "🤒" },
        { title: "Phòng chống bệnh", content: "Các biện pháp chính bao gồm tiêm vaccine để tạo miễn dịch chủ động, tuân thủ vệ sinh cá nhân và cộng đồng, sống lành mạnh để tăng cường sức đề kháng, và kiểm soát vật trung gian truyền bệnh.", emoji: "💉" },
        { title: "Ứng dụng của virus", content: "Virus được ứng dụng để sản xuất vaccine (vaccine sống giảm độc lực, vaccine bất hoạt), sản xuất các chế phẩm sinh học (interferon), và làm vector trong liệu pháp gene để chuyển gen lành vào cơ thể người bệnh.", emoji: "💡" },
        { title: "Miễn dịch", content: "Cơ thể có hai loại miễn dịch chính để chống lại virus: miễn dịch không đặc hiệu (hàng rào vật lí, hóa học) và miễn dịch đặc hiệu (tế bào lympho T và lympho B tạo kháng thể).", emoji: "🛡️" }
      ],
      vocabulary: [
        { term: "Vaccine", definition: "Chế phẩm sinh học chứa kháng nguyên (có thể là virus bị làm yếu hoặc bất hoạt) dùng để tạo ra miễn dịch đặc hiệu chủ động, phòng ngừa bệnh tật." },
        { term: "Vector virus", definition: "Virus đã được biến đổi di truyền để loại bỏ khả năng gây bệnh, được sử dụng làm phương tiện vận chuyển để đưa các gene mong muốn vào tế bào." },
        { term: "Interferon", definition: "Một loại protein do tế bào cơ thể sản xuất ra khi bị virus xâm nhiễm, có tác dụng chống virus, điều hòa miễn dịch." },
        { term: "Vật trung gian truyền bệnh", definition: "Sinh vật (như muỗi, ve) mang mầm bệnh và truyền từ cá thể này sang cá thể khác." }
      ]
    },
    examples: [
      { title: "Tiêm vaccine phòng sởi", scenario: "Trẻ em được tiêm vaccine sởi theo chương trình tiêm chủng mở rộng.", explanation: "Vaccine chứa virus sởi đã được làm suy yếu. Khi vào cơ thể, chúng không đủ sức gây bệnh nhưng đủ để kích thích hệ miễn dịch tạo ra kháng thể và tế bào nhớ. Nhờ vậy, nếu sau này cơ thể bị virus sởi thật xâm nhập, hệ miễn dịch sẽ nhận diện và tiêu diệt chúng một cách nhanh chóng, giúp cơ thể không bị bệnh.", emoji: "👶" },
      { title: "Liệu pháp gene chữa bệnh", scenario: "Các nhà khoa học sử dụng một loại virus đã được biến đổi (vector Adenovirus) để đưa gen lành vào các tế bào võng mạc của bệnh nhân mắc một dạng bệnh mù di truyền.", explanation: "Vector virus mang gen lành sẽ xâm nhập vào tế bào đích và tích hợp gen này vào bộ gen của tế bào. Tế bào sau đó có thể sản xuất protein bình thường, giúp phục hồi chức năng thị giác. Đây là một ứng dụng đột phá của virus trong y học.", emoji: "🧬" }
    ],
    textbook: [
      {
        header: "I. MỘT SỐ BỆNH DO VIRUS",
        subsections: [
          { title: "1. Bệnh do virus ở người và động vật", content: "Virus gây nhiều bệnh nguy hiểm như cúm (do virus Influenza), AIDS (do virus HIV), viêm gan B, bệnh dại, sởi, quai bị, sốt xuất huyết,... Con đường lây truyền rất đa dạng: qua đường hô hấp, tiêu hóa, đường máu, quan hệ tình dục, hoặc từ mẹ sang con." },
          { title: "2. Bệnh do virus ở thực vật", content: "Virus gây bệnh cho thực vật thường làm lá bị vàng, đốm, xoăn, hoặc làm cây còi cọc, giảm năng suất. Virus lây lan chủ yếu qua các vết thương cơ giới hoặc qua các côn trùng chích hút (rệp, bọ trĩ)." },
          { title: "3. Miễn dịch chống virus", content: "Cơ thể chống lại virus bằng miễn dịch không đặc hiệu (da, niêm mạc, các tế bào thực bào) và miễn dịch đặc hiệu (sản xuất kháng thể đặc hiệu để vô hiệu hóa virus và tế bào T độc tiêu diệt các tế bào đã nhiễm virus)." }
        ]
      },
      {
        header: "II. PHÒNG CHỐNG BỆNH DO VIRUS",
        subsections: [
          { title: "1. Sử dụng vaccine", content: "Vaccine là biện pháp phòng bệnh chủ động và hiệu quả nhất. Tiêm vaccine giúp cơ thể tạo ra miễn dịch đặc hiệu để sẵn sàng chống lại virus khi chúng xâm nhập." },
          { title: "2. Các biện pháp khác", content: "Duy trì lối sống lành mạnh, ăn uống đủ chất để nâng cao sức đề kháng. Giữ gìn vệ sinh cá nhân và môi trường sống. Cách li người bệnh và tiêu diệt các vật trung gian truyền bệnh (muỗi, bọ gậy)." }
        ]
      },
      {
        header: "III. ỨNG DỤNG CỦA VIRUS",
        subsections: [
          { title: "1. Trong sản xuất chế phẩm sinh học", content: "Dựa vào cơ chế nhân lên nhanh của virus, người ta sử dụng chúng để sản xuất các protein, kháng nguyên, hoặc interferon ở quy mô công nghiệp. Ví dụ: sản xuất vaccine cúm trong trứng gà có phôi." },
          { title: "2. Trong nông nghiệp", content: "Sản xuất thuốc trừ sâu sinh học chứa virus (ví dụ: NPV) có khả năng gây bệnh đặc hiệu cho một số loài sâu hại mà không ảnh hưởng đến các sinh vật khác và con người." },
          { title: "3. Trong y học (liệu pháp gene)", content: "Sử dụng virus làm vector để chuyển các gene lành vào cơ thể người bệnh nhằm thay thế các gene bị đột biến, mở ra triển vọng điều trị các bệnh di truyền." }
        ]
      }
    ]
  },
  'chap7-2': { // Bài 26
    summary: {
      intro: "Bài thực hành này giúp học sinh áp dụng kiến thức về virus vào thực tế bằng cách tiến hành một cuộc điều tra nhỏ về các bệnh do virus phổ biến tại địa phương, từ đó nâng cao nhận thức và kĩ năng tuyên truyền phòng chống bệnh.",
      coreKnowledge: [
        { title: "Mục tiêu", content: "Thực hiện được một cuộc điều tra về tình hình một số bệnh do virus. Phân tích số liệu và báo cáo kết quả. Thiết kế được các sản phẩm tuyên truyền phòng bệnh.", emoji: "🎯" },
        { title: "Các bước điều tra", content: "Xác định chủ đề (bệnh cần điều tra), lập kế hoạch, thiết kế phiếu điều tra, thu thập và xử lí số liệu, viết báo cáo.", emoji: "📊" },
        { title: "Nội dung điều tra", content: "Tên bệnh, tác nhân gây bệnh, con đường lây truyền, triệu chứng, đối tượng có nguy cơ cao, tình hình mắc bệnh tại địa phương, các biện pháp phòng chống.", emoji: "📝" },
        { title: "Sản phẩm tuyên truyền", content: "Thiết kế các sản phẩm như poster, tờ rơi, bài thuyết trình, video ngắn,... với nội dung ngắn gọn, dễ hiểu, hình ảnh hấp dẫn để truyền tải thông điệp phòng bệnh đến cộng đồng.", emoji: "📢" }
      ],
      vocabulary: [
        { term: "Điều tra dịch tễ học", definition: "Việc nghiên cứu sự phân bố, các yếu tố quyết định tình trạng sức khỏe và bệnh tật trong một quần thể dân cư nhất định." },
        { term: "Phiếu điều tra", definition: "Công cụ thu thập thông tin dưới dạng một bộ các câu hỏi được thiết kế sẵn." },
        { term: "Poster", definition: "Ấn phẩm có kích thước lớn, kết hợp hình ảnh và văn bản để truyền tải một thông điệp hoặc thông tin một cách trực quan, hấp dẫn." }
      ]
    },
    examples: [
      { title: "Điều tra bệnh sốt xuất huyết", scenario: "Một nhóm học sinh thiết kế phiếu hỏi về kiến thức và hành vi phòng chống sốt xuất huyết, sau đó khảo sát các hộ gia đình trong khu phố.", explanation: "Dựa trên số liệu thu thập được (ví dụ: tỉ lệ hộ gia đình có lăng quăng, tỉ lệ người ngủ màn), nhóm có thể đánh giá được mức độ nguy cơ và ý thức phòng bệnh của người dân. Từ đó, nhóm thiết kế poster kêu gọi diệt lăng quăng, bọ gậy và dán ở bảng tin của tổ dân phố.", emoji: "🦟" },
      { title: "Tuyên truyền phòng bệnh tay chân miệng", scenario: "Trong giai đoạn dịch tay chân miệng bùng phát, một trường mầm non làm các tờ rơi với hình ảnh sinh động về 6 bước rửa tay đúng cách.", explanation: "Đây là một hình thức tuyên truyền hiệu quả. Tờ rơi cung cấp thông tin trực quan, dễ nhớ, giúp phụ huynh và các bé hình thành thói quen vệ sinh quan trọng để ngăn chặn sự lây lan của virus gây bệnh tay chân miệng.", emoji: "👐" }
    ],
    textbook: [
      {
        header: "I. NỘI DUNG THỰC HÀNH",
        subsections: [
          { title: "1. Điều tra một số bệnh do virus", content: "Học sinh chia nhóm, lựa chọn một bệnh do virus phổ biến (cúm, sởi, sốt xuất huyết, tay chân miệng, quai bị,...) để điều tra. Lập kế hoạch và thực hiện điều tra theo các bước:\n- Xác định mục tiêu, đối tượng, địa điểm và thời gian điều tra.\n- Thiết kế phiếu điều tra với các câu hỏi rõ ràng, ngắn gọn.\n- Tiến hành thu thập thông tin (phỏng vấn, phát phiếu).\n- Tổng hợp, xử lí số liệu (tính tỉ lệ phần trăm, vẽ biểu đồ).\n- Viết báo cáo kết quả điều tra, nêu lên các nhận xét và kiến nghị." },
          { title: "2. Tuyên truyền phòng chống bệnh do virus", content: "Dựa trên kết quả điều tra, mỗi nhóm lựa chọn một hình thức tuyên truyền phù hợp (poster, tờ rơi, kịch, video,...) để thiết kế sản phẩm. Sản phẩm cần đảm bảo các yêu cầu:\n- Khoa học, chính xác.\n- Thông điệp rõ ràng, ngắn gọn.\n- Hình thức hấp dẫn, sáng tạo.\n- Phù hợp với đối tượng cần tuyên truyền." }
        ]
      },
      {
        header: "II. BÁO CÁO KẾT QUẢ",
        subsections: [
          { title: "1. Báo cáo kết quả điều tra", content: "Trình bày báo cáo theo cấu trúc: đặt vấn đề, phương pháp, kết quả, thảo luận, kết luận và kiến nghị." },
          { title: "2. Trình bày sản phẩm tuyên truyền", content: "Các nhóm trình bày sản phẩm của mình trước lớp và giải thích về ý tưởng, nội dung và thông điệp muốn truyền tải." }
        ]
      }
    ]
  }
};
