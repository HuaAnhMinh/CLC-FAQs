const topicsInformation = [{
  id: '95c8fdfc-c6bc-4467-9caf-99672152ac36',
  title: 'Giới thiệu về website',
  createdAt: 'Thứ 6 ngày 25/09/2020',
  description: 'Giới thiệu về website tư vấn và chia sẻ dành cho tân sinh viên Chương Trình Đề Án.',
  ref: 'gioi_thieu_ve_web_site.md',
  pathname: 'gioi_thieu_ve_web_site',
}, {
  id: '7ebb7583-1a3b-4f87-8bc3-9c2bbfd6a654',
  title: 'Cách chọn mua laptop cho lập trình',
  createdAt: 'Chủ Nhật ngày 27/09/2020',
  description: 'Lựa chọn laptop trong ngành này là một điều gì đó rất khó khăn bởi nhiều yếu tố từ cấu hình, ' +
    'giá cả cũng như nhu cầu phục vụ khác so với những người mua laptop khác. ' + 
    'Vì vậy trong bài viết này mình sẽ hướng dẫn các bạn chọn mua laptop sao cho có thể phục vụ được cho công việc lập trình ' +
    'mà không phải tốn quá nhiều tiền một cách vô ích.',
  ref: 'lua_chon_laptop.md',
  pathname: 'cach_chon_mua_laptop',
}, {
  id: '77c0054b-b709-420a-9672-50a21606fba1',
  title: 'Hướng dẫn tải và cài đặt Microsoft Visual Studio',
  createdAt: 'Chủ Nhật ngày 04/10/2020',
  description: 'Microsoft Visual Studio là bộ công cụ hỗ trợ rất tiện dụng cho quá trình viết code, ' +
    'đặc biệt là với các bạn sinh viên mới thì bộ công cụ này còn tiện lợi vì quá trình cài đặt không quá khó khăn của nó ' +
    'nên trong bài viết này mình sẽ hướng dẫn các bạn tải và cài đặt bộ công cụ này.',
  ref: 'huong_dan_cai_dat_visual_studio.md',
  pathname: 'huong_dan_cai_dat_visual_studio',
}, {
  id: '1d19de6f-267b-4970-94d6-2a5ac1df4e1e',
  title: '"Nhập môn lập trình" thế nào cho hiệu quả?',
  createdAt: 'Thứ 3 ngày 13/10/2020',
  description: 'Một số bạn lần đầu tiếp xúc với ngành này và cũng lần đầu được học lập trình trên đại học ' +
    'sẽ bỡ ngỡ với những thứ mới, những khái niệm, những kiến thức, những luồng gió mới. Có bạn thì tự tìm được cách ' +
    'học và vượt qua được giai đoạn đầu này; nhưng cũng có bạn thì mơ hồ và sẽ dễ bị choáng ngộp không biết nên "nhập ' +
    'môn lập trình" sao cho hiệu quả. Vì thế ở bài viết này mình sẽ đưa ra một số chỉ dẫn và lời khuyên nho nhỏ để các ' +
    'bạn có thể tiếp cận với lập trình dễ dàng hơn.',
  ref: 'nhap_mon_lap_trinh_hieu_qua.md',
  pathname: 'nhap_mon_lap_trinh_hieu_qua',
}, {
  id: 'fa57dcca-ecd7-4e2c-be4d-c6d05938a2b7',
  title: 'Tự học trong ngành CNTT thế nào cho hiệu quả',
  createdAt: 'Chủ Nhật ngày 18/10/2020',
  description: 'Trong bài viết "Nhập môn lập trình" thế nào cho hiệu quả, mình có đề cập đến việc đừng chỉ học mỗi kiến ' +
    'thức trên trường của giáo viên mà hãy tự tìm hiểu thêm những kiến thức khác. Tuy nhiên việc tìm hiểu thêm đối với ' +
    'những bạn mới bắt đầu không hề đơn giản vì khối lượng thông tin là rất khổng lồ và trong đó có những thông tin đáng ' +
    'giá để làm kiến thức, nhưng cũng có những thông tin lại có phần sai lệch không chính xác và nếu chẳng may đọc phải ' +
    'thì sẽ ảnh hưởng không tốt về sau nên trong bài viết này mình sẽ đưa ra một số phương pháp cũng như nguồn kiến thức ' +
    'phổ biến mà các bạn có thể tìm hiểu.',
  ref: 'tu_hoc_cntt_the_nao_hieu_qua.md',
  pathname: 'tu_hoc_cntt_the_nao_hieu_qua',
}, {
  id: 'ee01337a-40e0-45b4-b162-8726285b7b41',
  title: 'Cách sử dụng terminal cơ bản',
  createdAt: 'Thứ 7 ngày 21/11/2020',
  description: 'Terminal, để mô tả đơn giản nhất về "giao diện" của nó thì nó giống mấy cái màn hình đen mà mấy ông hacker ' +
    'trong phim gõ các lệnh dài ngoằng khó hiểu và kỹ năng sử dụng terminal cũng là kỹ năng bắt buộc mà các lập trình ' +
    'viên cần phải biết. Nhưng các bạn đừng quá lo vì trong bài viết này mình chỉ hướng dẫn các bạn sử dụng một số lệnh' +
    'ở mức cơ bản nhất. Còn những lệnh phức tạp hơn thì từ từ các bạn sẽ được tìm hiểu thông qua các môn học hay trong ' +
    'lúc đi làm.',
  ref: 'terminal_co_ban.md',
  pathname: 'terminal_co_ban'
}, {
  id: '2adbdbd0-6cd0-464f-9c15-09cd1091f62d',
  title: 'Git và GitHub cơ bản',
  createdAt: 'Thứ 7 ngày 21/11/2020',
  description: 'Git và GitHub có lẽ là những từ mà các bạn sẽ thường được nghe nhất trong ngành này và quả thật ' +
    'tầm quan trọng của Git và GitHub là không phải bàn cãi. Đây được xem như là kỹ năng must know tức là những ' +
    'kỹ năng bắt buộc mà bất kỳ ai theo ngành này cũng đều phải biết. Vì vậy trong bài này mình sẽ hướng dẫn cho ' +
    'các bạn về khái niệm Git và GitHub cũng như cách sử dụng chúng ở mức độ cơ bản nhất.',
  ref: 'git_va_github_co_ban.md',
  pathname: 'git_va_github_co_ban',
}];

export default topicsInformation;