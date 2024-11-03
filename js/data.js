
const flowerData = [
    {
        ten: "Calla Lily Quyến Rũ",
        giaGoc: 100000,
        giaKhuyenMai: 60000,
        hinhAnh: "./img/product/pr1.png",
        danhGia: 3.5,
        moTa: "Thanh lịch và sang trọng, thích hợp cho các dịp kỷ niệm hay làm quà tặng đặc biệt."
    },
    {
        ten: "Đặc Biệt Dành Cho Bạn",
        giaGoc: 100000,
        giaKhuyenMai: null,
        hinhAnh: "./img/product/pr2.png",
        danhGia: 4.5,
        moTa: "Hoàn hảo để dành tặng người thân yêu, mang thông điệp ngọt ngào và chân thành."
    },
    {
        ten: "Niềm Vui Hân Hoan",
        giaGoc: 110000,
        giaKhuyenMai: null,
        hinhAnh: "./img/product/pr3.png",
        danhGia: 5,
        moTa: "Rạng rỡ, tươi sáng, lý tưởng cho các dịp chúc mừng hoặc gửi tặng người thân."
    },
    {
        ten: "Vẻ Đẹp Vĩnh Cửu",
        giaGoc: 170000,
        giaKhuyenMai: 150000,
        hinhAnh: "./img/product/pr4.png",
        danhGia: 4,
        moTa: "Sự kết hợp tinh tế, mang đến vẻ đẹp rực rỡ và đầy sức sống."
    },
    {
        ten: "Chia Buồn Truyền Thống",
        giaGoc: 1700000,
        giaKhuyenMai: 1500000,
        hinhAnh: "./img/product/pr5.png",
        danhGia: 5,
        moTa: "Thể hiện sự cảm thông và chia sẻ trong những khoảnh khắc khó khăn."
    },
    {
        ten: "Chào Đón Bé Trai",
        giaGoc: 150000,
        giaKhuyenMai: null,
        hinhAnh: "./img/product/pr6.png",
        danhGia: 4,
        moTa: "Tươi tắn, rực rỡ, thích hợp chào đón thành viên mới của gia đình."
    },
    {
        ten: "Lily Hồng Tiễn Biệt",
        giaGoc: 130000,
        giaKhuyenMai: null,
        hinhAnh: "./img/product/pr7.png",
        danhGia: 4.5,
        moTa: "Nhẹ nhàng và trang nhã, phù hợp cho những dịp tiễn biệt đầy xúc cảm."
    },
    {
        ten: "Bình Minh Ngày Mới",
        giaGoc: 1700000,
        giaKhuyenMai: 1500000,
        hinhAnh: "./img/product/pr8.png",
        danhGia: 5,
        moTa: "Tượng trưng cho sự khởi đầu mới, gửi gắm hy vọng và niềm vui trong cuộc sống."
    }
];
const blogData = [
    {
        tieuDe: "Nghệ Thuật Sắp Xếp Hoa",
        moTa: "Khám phá cách phối hợp hoa hài hòa và độc đáo cho không gian sống.",
        ngayDang: "18 Tháng 8, 2015",
        hinhAnh: "./img/blog-post-image/cl-1.jpg",
        chiTiet: "Hướng dẫn chi tiết cách sắp xếp hoa nghệ thuật để tạo nên không gian sống sinh động, bao gồm cả các mẹo chăm sóc để hoa tươi lâu hơn.",
        tacGia: "Nguyễn Văn A",
        theLoai: "Nghệ thuật cắm hoa",
        noiDung: `
            Nghệ thuật sắp xếp hoa không chỉ là việc chọn lựa và phối màu hoa, mà còn là cách 
            để biến những bông hoa thành tác phẩm nghệ thuật trong không gian sống. Một bó hoa đẹp có thể 
            thay đổi tâm trạng và tạo sự ấm cúng trong căn nhà của bạn. Trong bài viết này, chúng tôi sẽ hướng dẫn 
            bạn các bước từ cơ bản đến nâng cao để tự mình cắm những bó hoa đẹp mắt và sáng tạo.
            `,
        luotXem: 1234,
        tags: ["nghệ thuật", "cắm hoa", "chăm sóc hoa"],
        comments: [
            { tenNguoiDung: "Minh Hoàng", noiDung: "Bài viết rất hữu ích, cảm ơn bạn!" },
            { tenNguoiDung: "Thanh Tâm", noiDung: "Mình sẽ thử cách này cho bình hoa trong phòng khách." }
        ]
    },
    {
        tieuDe: "Các Loài Hoa Đặc Trưng Mùa Xuân",
        moTa: "Tìm hiểu về những loài hoa mùa xuân đầy màu sắc và tươi tắn.",
        ngayDang: "25 Tháng 8, 2015",
        hinhAnh: "./img/blog-post-image/cl-2.jpg",
        chiTiet: "Danh sách các loài hoa đặc trưng của mùa xuân, cùng với ý nghĩa và mẹo chăm sóc cho từng loài để hoa luôn rực rỡ.",
        tacGia: "Trần Thị B",
        theLoai: "Thông tin hoa",
        noiDung: `
            Mùa xuân là thời điểm hoa nở rộ nhất trong năm, với muôn loài hoa đua nhau khoe sắc.
            Những loại hoa đặc trưng như cúc, đào, mai... luôn được ưa chuộng trong mùa này.
            Bài viết sẽ giúp bạn tìm hiểu sâu hơn về từng loại hoa, cách chăm sóc để hoa tươi lâu, 
            và ý nghĩa của chúng trong văn hóa Việt Nam.
        `,
        luotXem: 1567,
        tags: ["hoa mùa xuân", "ý nghĩa hoa", "chăm sóc hoa"],
        comments: [
            { tenNguoiDung: "Hồng Phúc", noiDung: "Yêu thích bài viết này, mong có thêm nhiều bài tương tự!" }
        ]
    },
    {
        tieuDe: "Kiểu Bó Hoa Cho Các Dịp Lễ",
        moTa: "Gợi ý các kiểu bó hoa phù hợp cho từng dịp lễ đặc biệt.",
        ngayDang: "2 Tháng 9, 2015",
        hinhAnh: "./img/blog-post-image/cl-3.jpg",
        chiTiet: "Các kiểu bó hoa đa dạng dành cho các dịp quan trọng như sinh nhật, kỷ niệm, và các ngày lễ, giúp bạn dễ dàng chọn được món quà ưng ý.",
        tacGia: "Lê Văn C",
        theLoai: "Phong cách cắm hoa",
        noiDung: `
            Mỗi dịp lễ đều có một loại hoa phù hợp riêng. Từ bó hoa lãng mạn cho ngày Valentine 
            đến bó hoa tươi vui cho sinh nhật, cách chọn hoa sẽ làm cho món quà của bạn thêm phần ý nghĩa. 
            Chúng tôi sẽ gợi ý các kiểu bó hoa phù hợp cho từng dịp lễ, đồng thời cung cấp các bước đơn giản để tự bó hoa.
        `,
        luotXem: 1980,
        tags: ["dịp lễ", "bó hoa", "quà tặng"],
        comments: [
            { tenNguoiDung: "Lan Anh", noiDung: "Mình rất thích các gợi ý bó hoa trong bài viết." },
            { tenNguoiDung: "Phương Ngọc", noiDung: "Hữu ích và sáng tạo, cảm ơn tác giả!" }
        ]
    },
    {
        tieuDe: "Bí Quyết Giữ Hoa Tươi Lâu",
        moTa: "Cách chăm sóc hoa để luôn giữ được vẻ tươi mới.",
        ngayDang: "15 Tháng 9, 2015",
        hinhAnh: "./img/blog-post-image/cl-4.jpg",
        chiTiet: "Những mẹo đơn giản giúp giữ hoa tươi lâu, bao gồm cách thay nước, cắt cành và chọn bình hoa phù hợp để hoa luôn rực rỡ.",
        tacGia: "Đỗ Ngọc D",
        theLoai: "Chăm sóc hoa",
        noiDung: `
            Hoa tươi không chỉ làm đẹp cho không gian sống mà còn mang lại năng lượng tích cực. 
            Để giữ hoa tươi lâu, việc chăm sóc đúng cách là rất quan trọng. Chúng tôi sẽ chia sẻ những mẹo đơn giản 
            nhưng hiệu quả như thay nước thường xuyên, cắt tỉa đúng kỹ thuật, và sử dụng các chất bảo quản tự nhiên.
        `,
        luotXem: 2356,
        tags: ["chăm sóc hoa", "bảo quản hoa", "giữ hoa tươi lâu"],
        comments: [
            { tenNguoiDung: "Vân Trang", noiDung: "Những mẹo này rất hay, mình sẽ thử ngay!" },
            { tenNguoiDung: "Thanh Mai", noiDung: "Chăm hoa bây giờ dễ dàng hơn với các mẹo này." }
        ]
    },
    {
        tieuDe: "Phong Cách Cắm Hoa Hiện Đại",
        moTa: "Khám phá những cách cắm hoa mới mẻ, độc đáo.",
        ngayDang: "20 Tháng 9, 2015",
        hinhAnh: "./img/blog-post-image/cl-3.jpg",
        chiTiet: "Phong cách cắm hoa hiện đại với sự kết hợp của màu sắc và các loại hoa độc đáo, giúp không gian sống thêm phần tinh tế và sang trọng.",
        tacGia: "Hoàng Thị E",
        theLoai: "Phong cách cắm hoa",
        noiDung: `
            Cắm hoa hiện đại không chỉ là việc sắp xếp hoa vào bình, mà còn là sự kết hợp hài hòa 
            của màu sắc, hình dáng và cách bài trí. Chúng tôi sẽ giới thiệu các phong cách cắm hoa hiện đại, 
            cách phối hợp màu sắc và cách chọn hoa phù hợp với không gian sống của bạn.
        `,
        luotXem: 1789,
        tags: ["cắm hoa hiện đại", "trang trí hoa", "phong cách"],
        comments: [
            { tenNguoiDung: "Phúc Tâm", noiDung: "Phong cách hiện đại rất đẹp, mình sẽ thử!" },
            { tenNguoiDung: "Kim Ngân", noiDung: "Mình yêu thích sự tinh tế trong bài viết này." }
        ]
    }
];