import Image from 'next/image';

export default function BannerSection() {
  return (
    <section className="pt-40 px-6 md:px-20">

        <div className="text-center mt-10">
          <h2 className="text-2xl md:text-3xl text-[#722D15] font-semibold uppercase tracking-wide">
            Mến chào quý khách,
          </h2>
          <h3 className="text-xl md:text-2xl text-[#722D15] font-semibold mt-2">
            Tôi là Ty Anh Nguyễn
          </h3>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-[#3B2B2A] text-justify leading-relaxed text-base md:text-lg">
          <p>
            Là nhà sáng lập Amor Thảo Mộc từ 2019, với kinh nghiệm hơn 15 năm
            gắn bó với lĩnh vực sức khỏe và sắc đẹp, tôi đã không ngừng học hỏi,
            nghiên cứu và vinh dự trở thành người đồng hành đáng tin cậy của
            hàng trăm phụ nữ Việt trên hành trình tìm về vẻ đẹp tự nhiên, sự cân
            bằng từ sâu bên trong.
          </p>
          <p>
            Amor Spa không chỉ là một tâm huyết mà còn hiện thực hóa tầm nhìn
            của tôi về một nơi mà vẻ đẹp được kiến tạo an toàn và bền vững.
            Chúng tôi đặt trọng tình yêu, niềm đam mê và tâm huyết vào từng
            liệu trình từng dịch vụ, với mong muốn mang đến vẻ đẹp từ gốc cho
            quý khách hàng.
          </p>
          <p>
            Tại Amor Spa, chữ tín là kim chỉ nam cho mọi hoạt động, từ sự tận
            tâm trong phục vụ đến sự chuyển mình linh hoạt trong việc liên tục
            đổi mới, kết hợp hài hòa giữa tinh hoa truyền thống và những phương
            pháp hiện đại nhất.
          </p>
          <p>
            Chúng tôi cam kết sẽ là nơi bạn tìm thấy sự bình yên, tái tạo năng
            lượng và kiến tạo nên phiên bản khoẻ đẹp, rạng ngời nhất của chính
            mình.
          </p>
        </div>
      </section>
  );
}