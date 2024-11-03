$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		navText: [
            '',
            ''
        ],
		responsive:{
			0:{ items: 1 },
			600:{ items: 3 },
			1000:{ items: 4 }
		}
	  });
    flowerData.forEach(flower => {
		const integerPart = Math.floor(flower.danhGia);
        const stars = '<i class="fa fa-star text-warning" aria-hidden="true"></i>'.repeat(integerPart) + 
    	(flower.danhGia % 1 != 0 ? '<i class="fa fa-star-half text-warning" aria-hidden="true"></i>' : '');
        const priceHTML = flower.giaKhuyenMai 
            ? `<span class="card-text text-center regular_price">${flower.giaGoc.toLocaleString("vi-VN") + " VNĐ"}</span>
               <span class="card-text text-danger text-center popular_price">${flower.giaKhuyenMai.toLocaleString("vi-VN") + " VNĐ"}</span>`
            : `<span class="card-text text-center text-danger">${flower.giaGoc.toLocaleString("vi-VN") + " VNĐ"}</span>`;

        const flowerHTML = `
            <div class="col-md-4 mt-3 col-sm-12 col-lg-3 col-xs-3">
                <div class="card-group">
                    <div class="card card-first active">
                        <img class="card-img-top" src="${flower.hinhAnh}" alt="${flower.ten}">
                        <div class="card-body">
                            <h4 class="text-center card-text name_rose">${flower.ten}</h4>
                            <p>${priceHTML}</p>
                        </div>
                    </div>
                    <div class="card card-secondary">
                        <img class="card-img-top border bg-grey border-dark" src="${flower.hinhAnh}" alt="${flower.ten}">
                        <div class="card-body">
                            <h4 class="text-center card-text">
                                ${stars}
                            </h4>
                            <div class="card-text d-flex justify-content-center">
                                <div class="cart_details border p-1 mr-2 earth">
                                    <a href="#">Add to cart</a>
                                </div>
                                <div class="cart_details border p-1 mr-2 earth">
                                    <a href="#"><i class="fa-solid fa-up-right-and-down-left-from-center"></i></a>
                                </div>
                                <div class="cart_details border p-1 earth">
                                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        $('#card-group').append(flowerHTML);
	});
	blogData.forEach(blog => {
        const blogHTML = `
            <div class="item mr-3">
								<a href="#"><img class="img-fluid" src="${blog.hinhAnh}" /></a>
								<div class="blog_details">
									<a href="#">${blog.tieuDe}</a>
									<p>${blog.moTa}</p>
									<h3>${blog.ngayDang}</h3>
								</div>
						</div>
        `;
        $('.owl-carousel').trigger('add.owl.carousel', [$(blogHTML)]);
	});
	$('.owl-carousel').trigger('refresh.owl.carousel');
});