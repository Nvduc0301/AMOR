import Image from "next/image";

export default function BannerSection() {
  return (
    <section className="pt-14 px-6 md:px-20">
      <div className="hidden md:block container mx-auto">
        <div className="flex justify-center relative mt-5">
          <Image
            src="/images/Amor-spa.webp"
            alt="Founder"
            height={556}
            width={1024}
            className="object-contain z-10"
          />
        </div>

        <div className="text-center font-semibold text-xl md:text-[40px] leading-8 md:leading-14 text-[#824435] mt-6 md:mt-[60px] mb-5 md:mb-10">
          <h2>
            Mến chào quý khách, <br />
            <span className="block mt-2">Tôi là Ty Anh Nguyễn</span>
          </h2>
        </div>

        <div className="hidden md:flex gap-[72px] text-[#2E333D] font-semibold text-xl max-w-[1284px] mt-10 mx-auto text-center">
          <div className="space-y-6 text-justify">
            <p>
              Là nhà sáng lập Amor Thảo Mộc từ 2019, với kinh nghiệm hơn 15 năm
              gắn bó với lĩnh vực sức khỏe và sắc đẹp, tôi đã không ngừng học
              hỏi, nghiên cứu và vinh dự trở thành người đồng hành đáng tin cậy
              của hàng trăm phụ nữ Việt trên hành trình tìm về vẻ đẹp tự nhiên,
              sự cân bằng từ sâu bên trong.
            </p>
            <p>
              Amor Spa không chỉ là một tâm huyết mà còn hiện thực hóa tầm nhìn
              của tôi về một nơi mà vẻ đẹp được kiến tạo an toàn và bền vững.
              Chúng tôi đặt trọn tình yêu, niềm đam mê và tâm huyết vào từng
              liệu trình
            </p>
          </div>
          <div className="space-y-6 text-justify">
            <p>
              từng dịch vụ, với mong muốn mang đến vẻ đẹp từ gốc cho quý khách
              hàng.
            </p>
            <p>
              Tại Amor Spa, chữ tín là kim chỉ nam cho mọi hoạt động, từ sự tận
              tâm trong phục vụ đến sự chuyển mình linh hoạt trong việc liên tục
              đổi mới, kết hợp hài hòa giữa tinh hoa truyền thống và những
              phương pháp hiện đại nhất. Chúng tôi cam kết sẽ là nơi bạn tìm
              thấy sự bình yên, tái tạo năng lượng và kiến tạo nên phiên bản
              khỏe đẹp, rạng ngời nhất của chính mình.
            </p>
          </div>
        </div>

        <div className="flex md:hidden flex-col gap-6 text-[#2E333D] font-semibold text-sm mt-10 mx-auto text-center">
          <p>
            Là nhà sáng lập Amor Spa, tôi đồng thời là một chuyên gia tư vấn về
            sức khỏe và sắc đẹp từ gốc. Với hơn 15 năm kinh nghiệm trong lĩnh
            vực này, tôi may mắn được đồng hành cùng hàng trăm phụ nữ Việt Nam
            trên hành trình khám phá vẻ đẹp tìm thấy sự cân bằng trong cuộc
            sống.
          </p>
          <p>
            Amor Spa là nơi tôi gửi gắm tất cả tình yêu, niềm đam mê và tâm
            huyết, với hy vọng rằng mỗi khách hàng đến đây sẽ cảm nhận được sự
            bình yên, tái tạo năng lượng và tìm lại phiên bản tốt nhất của chính
            mình.
          </p>
        </div>
      </div>
    </section>
  );
}
