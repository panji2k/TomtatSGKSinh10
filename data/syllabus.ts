import { Section } from "../types";

export const syllabus: Section[] = [
  {
    part: "Phần Mở Đầu",
    chapters: [
      { id: "bai1", title: "Bài 1: Giới thiệu khái quát môn Sinh học" },
      { id: "bai2", title: "Bài 2: Phương pháp nghiên cứu và học tập môn Sinh học" },
      { id: "bai3", title: "Bài 3: Các cấp độ tổ chức của thế giới sống" },
    ]
  },
  {
    part: "Phần Một: Sinh Học Tế Bào",
    chapters: [
      { 
        id: "chap1", 
        title: "Chương 1: Thành phần hoá học của tế bào", 
        subsections: [
          "Bài 4: Các nguyên tố hoá học và nước", 
          "Bài 5: Các phân tử sinh học", 
          "Bài 6: Thực hành: Nhận biết một số phân tử sinh học"
        ] 
      },
      { 
        id: "chap2", 
        title: "Chương 2: Cấu trúc tế bào", 
        subsections: [
          "Bài 7: Tế bào nhân sơ", 
          "Bài 8: Tế bào nhân thực", 
          "Bài 9: Thực hành: Quan sát tế bào"
        ] 
      },
      { 
        id: "chap3", 
        title: "Chương 3: Trao đổi chất qua màng và truyền tin tế bào", 
        subsections: [
          "Bài 10: Trao đổi chất qua màng tế bào", 
          "Bài 11: Thực hành: Thí nghiệm co và phản co nguyên sinh", 
          "Bài 12: Truyền tin tế bào"
        ] 
      },
      { 
        id: "chap4", 
        title: "Chương 4: Chuyển hoá năng lượng trong tế bào", 
        subsections: [
          "Bài 13: Khái quát về chuyển hoá vật chất và năng lượng", 
          "Bài 14: Phân giải và tổng hợp các chất trong tế bào", 
          "Bài 15: Thực hành: Thí nghiệm phân tích ảnh hưởng của một số yếu tố đến hoạt tính của enzyme và kiểm tra hoạt tính của enzyme amylase"
        ] 
      },
      { 
        id: "chap5", 
        title: "Chương 5: Chu kì tế bào và phân bào", 
        subsections: [
          "Bài 16: Chu kì tế bào và nguyên phân", 
          "Bài 17: Giảm phân", 
          "Bài 18: Thực hành: Làm và quan sát tiêu bản quá trình nguyên phân và giảm phân", 
          "Bài 19: Công nghệ tế bào"
        ] 
      }
    ]
  },
  {
    part: "Phần Hai: Sinh Học Vi Sinh Vật và Virus",
    chapters: [
      { 
        id: "chap6", 
        title: "Chương 6: Sinh học vi sinh vật", 
        subsections: [
          "Bài 20: Sự đa dạng và phương pháp nghiên cứu vi sinh vật", 
          "Bài 21: Trao đổi chất, sinh trưởng và sinh sản ở vi sinh vật", 
          "Bài 22: Vai trò và ứng dụng của vi sinh vật", 
          "Bài 23: Thực hành: Một số phương pháp nghiên cứu vi sinh vật thông dụng, tìm hiểu về các sản phẩm công nghệ vi sinh vật và làm một số sản phẩm lên men từ vi sinh vật"
        ] 
      },
      { 
        id: "chap7", 
        title: "Chương 7: Virus", 
        subsections: [
          "Bài 24: Khái quát về virus", 
          "Bài 25: Một số bệnh do virus và các thành tựu nghiên cứu ứng dụng virus", 
          "Bài 26: Thực hành: Điều tra một số bệnh do virus và tuyên truyền phòng chống bệnh"
        ] 
      }
    ]
  }
];