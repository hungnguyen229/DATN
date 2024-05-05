var exceptionCode = 417;
var token = localStorage.getItem("token");
var user = localStorage.getItem('user');
// if(user != null){
//   if(JSON.parse(user).authorities.name == 'ROLE_ADMIN'){
//     window.location.href = 'admin/index';
//   }
// }
async function loadMenu(){
    var authen = `<li class="nav-item"><a class="nav-link menulink" href="login">Đăng nhập</a></li>`;
    var linkadmin = '';
    if(user != null){
      if(JSON.parse(user).authorities.name == 'ROLE_ADMIN'){
        linkadmin = `<li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="admin/index">Quản trị</a></li>`;
      }
    }
    if(token != null){
      authen =`
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tài khoản
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="accounts">Tài khoản</a></li>
            <li><hr class="dropdown-divider"></li>
            <li onclick="logout()"><a class="dropdown-item" href="#">Đăng xuất</a></li>
            ${linkadmin}
          </ul>
      </li>`;
    }
    var menu = `<img class="imgbanner" src="image/banner.png">
    <nav id="navbars" class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a href="cart">
                <i style="border: none;" class="fa fa-shopping-bag navbar-toggler text-white"> <span class="slcartmenusm" id="slcartmenumobile">0</span></i>
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item"><a class="nav-link menulink" href="index">Trang chủ</a></li>
                <li class="nav-item"><a class="nav-link menulink" href="product">Sản phẩm</a></li>
                <li class="nav-item"><a class="nav-link menulink" href="instruction">Bài viết</a></li>
                ${authen}
            </ul>
            <div class="f-flex">
              <a href="cart" class="pointermenu"><i class="fa fa-shopping-bag"><span class="slcartmenu" id="slcartmenu">0</span> Giỏ hàng</i></a>
            </div>
            <div class="f-flex">
                <div class="divsearch">
                    <form action="product" class="divsearch">
                        <input name="search" class="ipsearch" placeholder="TÌm kiếm">
                        <button class="btnsearch"><i class="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
        </div>
    </nav>`
    document.getElementById("menu").innerHTML = menu

    loadCartMenu();
    try {
        loadFooter()
    } catch (error) {
    }
}


function loadFooter(){
    var footer = 
    ` <footer class="text-center text-lg-start text-muted">
    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <div class="me-5 d-none d-lg-block"><span>Theo dõi chúng tôi tại:</span></div>
      <div>
        <a href="" class="me-4 text-reset"><i class="fab fa-facebook-f"></i></a>
        <a href="" class="me-4 text-reset"><i class="fab fa-twitter"></i></a>
        <a href="" class="me-4 text-reset"><i class="fab fa-google"></i></a>
        <a href="" class="me-4 text-reset"><i class="fab fa-instagram"></i></a>
        <a href="" class="me-4 text-reset"><i class="fab fa-linkedin"></i></a>
        <a href="" class="me-4 text-reset"><i class="fab fa-github"></i></a>
      </div>
    </section>
    <section class="">
      <div class=" text-center text-md-start mt-5">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4"><i class="fas fa-gem me-3"></i>Male fashion</h6>
            <p>
              Chúng tôi cung cấp dịch vụ cây trồng và nông sản chất lượng cao cho mọi người
            </p>
            <p><i class="fas fa-home me-3"></i> TRUNG TÂM CÂY GIỐNG - HỌC VIỆN NÔNG NGHIỆP VIỆT NAM</p>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Sản phẩm</h6>
            <p><a href="#!" class="text-reset">Cây dược liệu kinh tế</a></p>
            <p><a href="#!" class="text-reset">Các loại cây thuốc quý</a></p>
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Giới thiệu</h6>
            <p><a href="#!" class="text-reset">Về chúng tôi</a></p>
            <p><a href="#!" class="text-reset">Dịch vụ uy tín</a></p>
            <p><a href="#!" class="text-reset">Hướng dẫn mua hàng</a></p>
            <p><a href="#!" class="text-reset">Liên hệ</a></p>
          </div>
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Liên hệ</h6>
            <p><i class="fas fa-envelope me-3"></i> Địa chỉ : Nguyễn Khiêm Ích, Trâu Quỳ, Gia Lâm, Hà Nội</p>
            <p><i class="fas fa-phone me-3"></i> Hotline: 0981 996 880 và 0339 898 882</p>
            <p><i class="fas fa-mail-bulk me-3"></i> hocviennongnghiep4.0@gmail.com</p>
          </div>
        </div>
      </div>
    </section>`
    document.getElementById("footer").innerHTML = footer
}

async function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.replace('login')
}

function formatmoney(money) {
  const VND = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
  });
  return VND.format(money);
}

async function loadCartMenu() {
  var listcart = localStorage.getItem("cartstore");
  if (listcart == null) {
      return;
  }
  var list = JSON.parse(localStorage.getItem("cartstore"));
  document.getElementById("slcartmenu").innerHTML = list.length
  document.getElementById("slcartmenumobile").innerHTML = list.length
}