# Microsoft Visual Studio là gì?

Microsoft Visual Studio (gọi tắt là VS) là bộ công cụ IDE (Integrated Development Environment) nhằm giúp các nhà phát triển có thể viết mã nguồn (code), chạy chương trình, chạy test,... và tạo ra các sản phẩm phần mềm. VS hỗ trợ rất nhiều công nghệ và ngôn ngữ khác nhau như C++, C#, ASP.NET, Node.js, Python,...

Trong chương trình học của năm 1 thì hầu hết việc code của các bạn sẽ sử dụng trên Visual Studio và các bạn sẽ code chủ yếu là C/C++. Lý do VS được dùng phổ biến ở năm 1 là vì sự tiện lợi của nó, các thao tác cài đặt không quá khó khăn cũng như sau khi cài xong thì các bạn cũng không cần phải thiết lập hay cài đặt thêm bất kỳ thứ gì để có thể hoạt động được. Chưa kể VS có phiên bản Community (hoặc Express với những bản VS cũ) là phiên bản miễn phí.

Trong bài viết này mình sẽ hướng dẫn các bạn tải, cài đặt, đăng ký license miễn phí và chạy thử 1 project cơ bản trên VS.

# Tải và cài đặt Visual Studio

*Lưu ý: bước tải và cài đặt này các bạn cần phải đảm bảo có kết nối internet ổn định, không cần thiết phải quá nhanh nhưng ổn định và không bị rớt mạng là được do khi tải VS sẽ tốn khá nhiều dung lượng ổ cứng.*

## Tải Visual Studio

Đầu tiên các bạn truy cập vào trang chủ của Visual Studio [https://visualstudio.microsoft.com/](https://visualstudio.microsoft.com/). Sau đó ở ô đầu tiên - Visual Studio, các bạn đưa chuột vào nút Download Visual Studio và chọn Community 2019 như hình dưới. VS Community là phiên bản miễn phí, phù hợp với các project nhỏ và vừa như những project của sinh viên. Với 2 phiên bản Professional và Enterprise thì chi phí khá cao và có quá nhiều tính năng thừa không cần thiết cho sinh viên.

![Chọn phiên bản Visual Studio](https://i.imgur.com/YfGy4yN.png)

Sau khi chọn phiên bản thì các bạn sẽ chọn nơi lưu file cài đặt như hình dưới. Lưu ý rằng đây chỉ là file cài đặt bộ cài đặt VS chứ nó không phải cài trực tiếp VS.

![Chọn nơi lưu file cài đặt bộ cài đặt](https://i.imgur.com/umBSzrs.png)

Sau khi tải xong thì các bạn chạy file cài đặt. Nếu có được hỏi như hình dưới thì cứ bấm **Yes**.

![Chọn Yes](https://i.imgur.com/V1IMPgk.png)

Tiếp theo là VS sẽ hỏi các bạn một mớ thứ về điều khoản người dùng rồi quyền riêng tư các kiểu mà chả ai đọc nên các bạn cứ mạnh dạn bấm nút Continue như hình:

![Chọn Continue](https://i.imgur.com/ZyWkp8c.png)

Sau khi bấm Continue thì lúc này file sẽ bắt đầu tải và cài đặt bộ cài đặt VS cho các bạn.

![Chờ tải và cài đặt bộ cài đặt](https://i.imgur.com/4w5bZ1c.png)

Sau khi bộ cài đặt được cài đặt xong thì sẽ có một cửa sổ hiện lên. Lúc này sẽ có 2 bước như sau:

Đầu tiên, tick chọn ô **Desktop development with C++** như hình dưới:

![Chọn Desktop development with C++](https://i.imgur.com/XwyLHEI.png)

Tiếp theo, ở bảng bên phải, chỉ giữ tick lại những mục như hình bên dưới.

![Nếu không thấy được hình thì cứ giữ nguyên, đừng động vào](https://i.imgur.com/FSzXIWl.png)

Sau đó các bạn chỉ cần bấm nút **Install** và chờ đợiiiii như hình. Ngoài ra các bạn có thể bỏ tick ô **Start after installation** nếu như không muốn VS tự mở sau khi cài đặt. Như hình thì do mình có bộ build của VS 2017 từ trước đó nên mới có mục Visual Studio Build Tools 2017, các bạn không có cũng không sao nhé.

![](https://i.imgur.com/wiHMN4X.png)

Nói sơ một chút về quy trình tải và cài đặt VS: file các bạn tải ban đầu chỉ là file để tải và cài đặt bộ cài đặt của VS. Sau khi đã cài đặt xong bộ cài đặt thì các bạn có thể chọn những thành phần để cài vào VS. Bộ cài đặt này ngoài ra còn giúp hỗ trợ cập nhật các bản vá lỗi cho VS. Sau khi chọn được những thành phần mong muốn (như trong bài này là Desktop development with C++) thì VS sẽ tải hành tải về những gói tin (package) cho thành phần mà ta đang mong muốn cài và sau khi tải thì sẽ cài đặt chúng vào máy.

Sau khi cài đặt xong thì một số bạn có thể sẽ được yêu cầu phải restart máy như hình. Nếu ai có bị yêu cầu restart thì restart máy, ai không có thì không cần.

![Restart máy](https://i.imgur.com/2oCDJMq.png)

Khi đã restart xong, search thanh Start dòng chữ Visual Studio 2019 như hình và bấm mở app.

![Tìm kiếm VS 2019 trong máy](https://i.imgur.com/zMw8EPu.png)

Khi mở lên các bạn sẽ được yêu cầu đăng nhập như hình. Nếu ai đã có tài khoản Microsoft thì tiến hành đăng nhập bằng cách bấm nút **Sign in**. Ai chưa có thì chọn dòng chữ **Create one!** để tiến hành đăng ký tài khoản mới.

![Đăng nhập VS](https://i.imgur.com/dIWZv8w.png)

*Một số bạn ở bước này có thể bị thấy một popup trắng không có chỗ điền tài khoản. Nhưng các bạn đừng động chạm gì cứ chờ một lúc là nội dung sẽ hiển thị ra.*

Bước đăng nhập này khá quan trọng vì tuy VS Community là miễn phí nhưng thực chất là miễn phí đối với những ai đã có tài khoản Microsoft. Nên nếu ai không có tài khoản Microsoft thì chỉ sử dụng được 30 ngày. Nhưng rất may mắn là tài khoản Microsoft thì tạo miễn phí nên các bạn cứ yên tâm.

Nếu ai trong máy đang có nhiều tài khoản khác nhau (như tài khoản Office 365) và có hiện hình như dưới thì bấm chọn **Use another account** rồi điền thông tin đăng nhập tài khoản Microsoft nhé.

![Chọn Use another account](https://i.imgur.com/gbwVWs4.png)

Sau khi chờ xong thì VS sẽ tiến hành một số thiết lập và yêu cầu chờ như hình. Tùy vào máy và mạng mà bước này chậm hay nhanh.

![](https://i.imgur.com/853rRs1.png)

Sau khi hoàn tất thì các bạn sẽ thấy cửa sổ client của VS hiển thị như hình dưới:

![](https://i.imgur.com/uuLUV6j.png)

# Tạo và chạy project C++ trong VS

Từ cửa sổ client của VS như trên, các bạn chọn **Create a new project** (ô cuối cùng bên phải).

![Tạo project mới](https://i.imgur.com/Dh9SEvD.png)

Chọn **Empty Project** như hình:

![Chọn Empty Project](https://i.imgur.com/avBh9tc.png)

Sau đó các bạn sẽ phải điền một số thông tin cho project. Ở đây các bạn sẽ cần lưu ý những thông tin sau:

* Solution name (ô nhập cuối cùng trong hình dưới): 1 solution sẽ chứa nhiều project con bên trong. Thông thường trên lớp mỗi tuần sẽ tương ứng với 1 solution, ví dụ như tuần 1 là `tuan_01`, tuần 2 là `tuan_02`,... Lưu ý rằng tên solution phải đặt không dấu và không có khoảng trắng.
* Project name (ô nhập đầu tiên trong hình dưới): là project bên trong 1 solution. Có thể có nhiều project bên trong solution. Thông thường mỗi bài tập trong mỗi tuần sẽ tương ứng với 1 project. Ví dụ tuần 1 có solution là `tuan_01`, tuần 1 các bạn có 3 bài tập thì sẽ có 3 project con bên trong `tuan_01` là `bai_01`, `bai_02`, `bai_03`. Cũng như cách đặt tên solution, tên project phải đặt không dấu và không có khoảng trắng.
* Location: nơi đặt solution của các bạn. Bên dưới cùng các bạn sẽ thấy có ô **Place solution and project in the same directory**, ô đó có tác dụng như sau: thông thường khi tạo project mới thì ta sẽ có thư mục với tên solution nằm bên ngoài cùng (ví dụ `tuan_01`). Bên trong thư mục đó sẽ có các thư mục con, mỗi thư mục con sẽ chứa 1 project con và được đặt tên theo project con đó (ví dụ `bai_01`). Nếu tick vào ô **Place solution and project in the same directory** này thì project và solution của các bạn sẽ cùng là 1 thư mục duy nhất. Thực tế thì trên lớp giảng viên sẽ kêu các bạn tách ra cho dễ chấm bài nên các bạn đừng nên tick vào ô này nhé.

![](https://i.imgur.com/PBNA9VV.png)

Sau đó các bạn bấm Create để tạo và giao diện VS hiện ra như hình:

![Giao diện cơ bản của VS](https://i.imgur.com/MJ2yOSR.png)

Đây chỉ mới là project rỗng, bây giờ các bạn sẽ thêm vào file mã nguồn thì mới có thể tiến hành viết code được. Để tạo mới file mã nguồn, ở bảng sidebar phía trên bên phải, thư mục Source Files (thư mục cuối cùng), bấm chuột phải, Chọn **Add | New Item...** như hình (phím tắt là Ctrl+Shift+A).

![Tạo item mới](https://i.imgur.com/ituxy9E.png)

Các bạn sẽ chọn ô C++ File (.cpp). Ở học kỳ một thì một số lớp có thể sẽ học C, một số lớp sẽ học C++, nhưng C hay C++ thì đều sẽ chọn ô C++ File nhé vì ta hoàn toàn có thể code C vào file C++.

Bên dưới ta có 2 ô là Name sẽ dùng để nhập tên file, mình sẽ đặt là main.cpp và ô Location là nơi đặt file, ô này thì các bạn cứ giữ nguyên.

![Tạo file C++ mới](https://i.imgur.com/tpIQecZ.png)

Sau khi chọn xong thì các bạn bấm nút **Add** để thêm vào project.

Khi hoàn tất thì đây sẽ là giao diện hoàn chỉnh của VS:

![](https://i.imgur.com/5rMWnca.png)

Mình sẽ giải thích sơ một số thành phần trong hình:

1. Thanh Menu: chứa các nút với những nhóm chức năng khác nhau như File (lưu file, tạo mới project, tạo file mới,...), Build (để biên dịch project), Debug (để thực thi hoặc debug project với một số chế độ khác nhau),...
2. Thanh Toolbar: theo mặc định thì thanh này sẽ chứa các nút để các bạn lưu file, chọn chế độ thực thi (Debug hay Release), nền tảng thực thi (x86 hay x64), nút **Local Windows Debugger** để chạy debug, một số nút để bookmark các đoạn code.
3. Màn hình Editor để viết code.
4. Top-Right sidebar - sidebar phải phía trên: hiển thị cây thư mục của project và solution.
5. Bottom-Right sidebar - sidebar phải phía dưới: hiển thị thông tin item trong solution. Nếu các bạn bấm chọn vào 1 item bất kỳ trên sidebar phải phía trên thì thông tin nó sẽ hiển thị ở đây.
6. Status bar - Thanh trạng thái: chứa một số trạng thái của project, ví dụ như khi chạy project thì sẽ hiển thị quá trình build.
7. Left sidebar: chứa một số cửa sổ khác, mặc định sẽ được ẩn vào.

Các bạn sau đó có thể nhập đoạn code như hình dưới vào:

![Demo code](https://i.imgur.com/BWTUh9r.png)

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!!!" << endl;
    return 0;
}
```

Font chữ các bạn hiển thị có thể sẽ hơi xấu nhé, để khắc phục các bạn có thể chỉnh zoom layout (ô nhập góc nhỏ phía dưới bên trái) xuống 99% hoặc lên 101% tùy các bạn. VS có một bug nhỏ về cách hiển thị font chữ mà tới giờ vẫn chưa fix đó là nếu để ở zoom 100% thì chữ hiển thị sẽ bị xấu hơn bình thường.

*Font mình dùng trên hình là JetBrains Mono nhé, có mức độ hoàn thiện rất tốt.*

Để chạy project, ở thanh menu, các bạn chọn nút **Debug | Start Without Debugging** để chạy (phím tắt là Ctrl+F5).

![Chạy project](https://i.imgur.com/hLdxOZ3.png)

Đợi một lúc cho quá trình build hoàn tất thì các bạn sẽ thấy cửa sổ đen thui như bên dưới. Nếu cửa sổ hiện ra là code đã đúng, còn nếu sai thì kiểm tra lại đoạn code của các bạn và của mình nhé.

![](https://i.imgur.com/htnypxM.png)

## Tạo và chạy project thứ 2 trong cùng solution

Với project thứ 2 thì ta sẽ có một số bước khác đôi chút. Đầu tiên là ta sẽ tạo project mới (vẫn trong cùng solution với project ban đầu). Ở thanh sidebar bên trái phía trên, dòng đầu (có chữ **Solution <tên_solution_của_các_bạn>**), bấm chuột phải, chọn **Add | New Project...** như hình:

![Tạo project mới](https://i.imgur.com/9nlRnjc.png)

Ở đây các bạn vẫn sẽ chọn **Empty Project** như hình.

![Chọn Empty Project](https://i.imgur.com/c5s61P9.png)

Sau đó các bạn sẽ tiến hành đặt tên cho project mới, mình sẽ đặt là `bai_02`. Lưu ý rằng không được phép có 2 project cùng tên trong cùng 1 solution. Ở mục Location của project thì các bạn cứ giữ nguyên.

![Đặt tên project mới](https://i.imgur.com/i9ACecy.png)

Tiếp theo là tạo file mã nguồn cho project `bai_02`. Bước này sẽ khá giống tạo file mã nguồn cho project `bai_01`, chỉ khác là các bạn sẽ click chuột phải vào thư mục Source Files của project `bai_02` thay vì là `bai_01`.

![](https://i.imgur.com/GqFpbn9.png)

Bước tiếp theo thì các bạn điền tên file. Lúc này các bạn hoàn toàn có thể điền tên file là main.cpp giống như ở `bai_01` do 2 project này là 2 thư mục khác nhau nên sẽ không sao.

Sau khi tạo file xong thì các bạn copy đoạn code bên dưới paste vào.

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, Bai 02" << endl;
    return 0;
}
```

Nếu lúc này các bạn chạy chương trình giống như ban đầu thì sẽ nhận ra là kết quả hiển thị sẽ là `Hello, World!!!` của project `bai_01` chứ không phải `Hello, Bai 02` của `bai_02` như ta mong muốn. Đó là vì Startup project của ta hiện đang là `bai_01`. Startup project sẽ cho VS biết là nên chạy project nào. Lúc này ta cần phải set lại Startup project bằng cách click chuột phải vào tên project `bai_02` ở thanh sidebar bên phải phía trên, chọn dòng **Set as Startup Project**.

![](https://i.imgur.com/KaEqGja.png)

Để biết được project nào đang là Startup thì các bạn hãy chú ý màu sắc của tên project như hình dưới. Project nào là startup sẽ có màu đậm hơn so với những project còn lại.

![](https://i.imgur.com/ZF0WVEk.png)

Lúc này nếu chạy project thì kết quả sẽ hiển thị là `Hello, Bai 02` như ta mong muốn.

# Cập nhật license cho tài khoản trên Visual Studio

Sau khi hoàn tất các bước trên, các bạn có thể tiến hành cập nhật license. Đầu tiên ở thanh menu, bấm vào avatar tài khoản các bạn, chọn dòng **Account settings...**

![](https://i.imgur.com/KNxtNJh.png)

Tiếp đến các bạn chỉ cần bấm vào dòng **Check for an updated license** là được.

![](https://i.imgur.com/fqJ5Ydq.png)