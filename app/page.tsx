"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Snowfall from "@/components/ui-custom/Snowfall";
import { useState, useEffect } from "react";

import Section1 from "@/components/ui-custom/Section1";
import Section2 from "@/components/ui-custom/Section2";
import Section3 from "@/components/ui-custom/Section3";
import Section4 from "@/components/ui-custom/Section4";
import Section5 from "@/components/ui-custom/Section5";
import Section7 from "@/components/ui-custom/Section7";
import Section8 from "@/components/ui-custom/Section8";
import Section9 from "@/components/ui-custom/Section9";

import MusicFloatingButton from "@/components/ui-custom/MusicFloatingButton";
import GiftFloatingButtonWithBankQR from "@/components/ui-custom/GiftFloatingButtonWithBankQR";
import DoorOpenSimple from "@/components/ui-custom/DoorOpenSimple";

export default function Page() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [open, setOpen] = useState(false);
  const [initialTab, setInitialTab] = useState<"groom" | "bride">("groom");

  return (
    <div className="max-w-[450px] md:max-w-[400px] overflow-hidden select-none relative">
      <DoorOpenSimple />

      {/* Nút mở modal cố định góc phải */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform z-50"
      >
        <Image src="/images/giftbox.png" alt="Gift" width={26} height={26} />
      </button>

      {/* Modal mừng cưới */}
      <GiftFloatingButtonWithBankQR
        open={open}
        setOpen={setOpen}
        initialTab={initialTab}
        groomInfo={{
          qrUrl: "https://res.cloudinary.com/dpufemrnq/image/upload/v1761554803/2_xo9azf.png",
          bankName: "MB Bank",
          accountName: "NGUYEN VAN NAM",
          accountNumber: "9704222268",
        }}
        brideInfo={{
          qrUrl: "https://res.cloudinary.com/dpufemrnq/image/upload/v1761554803/1_jgnowe.png",
          bankName: "ACB Bank",
          accountName: "TRAN THI THAO",
          accountNumber: "1234567890",
        }}
      />

      <Snowfall />

      <MusicFloatingButton />

      <Section1
        slides={[
          { imageUrl: "https://res.cloudinary.com/dpufemrnq/image/upload/v1761556616/DSC06095__2_qmvtnu.jpg" },
          { imageUrl: "https://res.cloudinary.com/dpufemrnq/image/upload/v1761556617/DSC06211__2_zchfsb.jpg" },
          { imageUrl: "https://res.cloudinary.com/dpufemrnq/image/upload/v1761556617/DSC06216__2_py0e0z.jpg" },
        ]}
        title="Đặng Duẩn & Phương Thanh"
        invitation={{
          weddingInviteText: "THƯ MỜI TIỆC CƯỚI",
          saturdayTime: "THỨ BẢY - 18:00",
          saturdayDate: "05 . 04 . 2026",
          sundayTime: "CHỦ NHẬT - 11:45",
          sundayDate: "06 . 04 . 2026",
          ceremonyText: "LỄ THÀNH HÔN",
        }}
        autoplay={3000}
      />

      <Section2
        title={
          <>
            Hôn nhân là chuyện cả đời,<br />
            Yêu người vừa ý, cưới người mình thương
          </>
        }
        galleryImages={[
          "https://res.cloudinary.com/dpufemrnq/image/upload/v1761556507/DSC06434__2_r8vsdh.jpg",
          "https://res.cloudinary.com/dpufemrnq/image/upload/v1761556617/DSC06252__2_mw957e.jpg",
        ]}
        groom={{
          role: "Chú Rể",
          name: "Đặng Duẩn",
          address: "Số 10 Trần Nhân Tông, Quảng Cư, Sầm Sơn, Thanh Hoá",
        }}
        bride={{
          role: "Cô Dâu",
          name: "Phương Thanh",
          address: "Đội 8, Rừng Thông, Xã Thiện Phiến, Thanh Hoá",
        }}
      />

      <Section3
        invitation={{
          title: "Thư Mời",
          subtitle: "Bạn và Người thương",
          mainText: "THAM DỰ LỄ CƯỚI ĐẶNG DUẨN & PHƯƠNG THANH",
          images: [
            "https://res.cloudinary.com/dpufemrnq/image/upload/v1761556620/DSC06496__2_i6p8ok.jpg",
            "https://res.cloudinary.com/dpufemrnq/image/upload/v1761556618/DSC06269__2_rari71.jpg",
            "https://res.cloudinary.com/dpufemrnq/image/upload/v1761556619/DSC06393__2_cvoqxb.jpg",
          ],
        }}
        events={[
          {
            title: "LỄ THÀNH HÔN NHÀ GÁI",
            dayOfWeek: "Thứ Bảy",
            time: "08:30 AM",
            weddingDate: "23-11-2025",
            lunarDate: "Ngày 23 tháng 10 năm Ất Tỵ",
            locationName: "Tư Gia Nhà Gái",
            address: "123 Đường Hoa Hồng, Quận 1, TP. Hồ Chí Minh",
            mapCoords: { lat: 10.7769, lng: 106.7009 },
          },
          {
            title: "TIỆC CƯỚI NHÀ TRAI",
            dayOfWeek: "Chủ Nhật",
            time: "11:00 AM",
            weddingDate: "24-11-2025",
            lunarDate: "Ngày 23 tháng 10 năm Ất Tỵ",
            locationName: "Nhà Hàng Diamond Palace",
            address: "456 Lê Lợi, Quận 3, TP. Hồ Chí Minh",
            mapCoords: { lat: 10.7845, lng: 106.695 },
          },
        ]}
        textSettings={{
          giftButton: "Hộp quà mừng",
          giftTitle: "Gửi lời chúc & mừng cưới",
          giftDescription: "Xin cảm ơn bạn đã gửi lời chúc phúc trong ngày đặc biệt này ❤️",
          googleMapButton: "Xem vị trí trên bản đồ",
        }}
        open={open}
        setOpen={setOpen}
        setInitialTab={setInitialTab} // ✅ thêm dòng này
      />

      <Section4
        firstCeremony={{
          title: "LỄ THÀNH HÔN",
          time: "Vào Chủ Nhật - 11:45",
          month: "Tháng 4",
          day: "06",
          year: "2026",
          lunarDate: "(Tức ngày 08 Tháng 03 Năm Bính Ngọ)",
        }}
        secondCeremony={{
          title: "LỄ RƯỚC DÂU",
          time: "Vào Chủ Nhật - 11:00",
          month: "Tháng 4",
          day: "06",
          year: "2026",
          lunarDate: "(Tức ngày 08 Tháng 03 Năm Bính Ngọ)",
        }}
      />

      <Section5
        monthTitle="THÁNG 11 - 2025"
        primaryDate="2025-11-29"
        secondaryDate="2025-11-28"
        countdownTarget="2025-11-28T18:00:00"
        eventStart="2025-11-28T18:00:00"
        eventEnd="2025-11-29T12:00:00"
      />

      <Section7
        title="Kỷ Niệm Ngày Cưới"
        description="Khoảnh khắc yêu thương của chúng tôi."
        borderRadius={12}
        column1={[
          { src: "https://res.cloudinary.com/dpufemrnq/image/upload/v1761555512/demo/seo.png.png", height: 270 },
          { src: "https://res.cloudinary.com/dpufemrnq/image/upload/v1761556507/DSC06569__2_wvi9zg.jpg", height: 270 },
          { src: "https://res.cloudinary.com/dpufemrnq/image/upload/v1761556616/DSC06095__2_qmvtnu.jpg", height: 270 },
          { src: "https://res.cloudinary.com/dpufemrnq/image/upload/v1761556507/DSC06520__2_b2x9xp.jpg", height: 270 },
        ]}
        column2={[
          { src: "https://res.cloudinary.com/dpufemrnq/image/upload/v1761556617/DSC06216__2_py0e0z.jpg", height: 180 },
          { src: "https://res.cloudinary.com/dpufemrnq/image/upload/v1761556618/DSC06269__2_rari71.jpg", height: 180 },
          { src: "https://res.cloudinary.com/dpufemrnq/image/upload/v1761556619/DSC06354__2_qbipsg.jpg", height: 270 },
          { src: "https://res.cloudinary.com/dpufemrnq/image/upload/v1761556507/DSC06539__2_twyjxb.jpg", height: 270 },
          { src: "https://res.cloudinary.com/dpufemrnq/image/upload/v1761556619/DSC06393__2_cvoqxb.jpg", height: 170 },
        ]}
      />

      <Section8
        title="Sổ Lưu Bút Yêu Thương"
        description="Hãy gửi lời chúc tốt đẹp nhất cho đôi uyên ương nhé!"
        placeholders={{
          name: "Tên bạn là gì?",
          phone: "Nhập số điện thoại",
          message: "Lời chúc của bạn dành cho cặp đôi",
        }}
        buttonText="Gửi ngay"
        showMoreText="Xem thêm"
        loadingText="Đang gửi lời chúc..."
        successMessage="Cảm ơn bạn! Lời chúc của bạn đã được gửi thành công 🎉"
        errorMessage="Có lỗi xảy ra, vui lòng thử lại!"
      />


      <Section9
        backgroundImage="https://res.cloudinary.com/dpufemrnq/image/upload/v1761556616/DSC06095__2_qmvtnu.jpg"
        bottomText="Rất hân hạnh được đón tiếp!"
      />
    </div>
  );
}