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
        title="Văn Duẩn & Phương Thanh"
        invitation={{
          weddingInviteText: "THƯ MỜI TIỆC CƯỚI",
          saturdayTime: "THỨ SÁU",
          saturdayDate: "07 . 11 . 2025",
          sundayTime: "Thứ BẢY",
          sundayDate: "08 . 11 . 2025",
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
          name: "Văn Duẩn",
          address: "Sân bóng Đoàn Thuyền,Vân Đình, Ứng Hòa, Hà Nội",
        }}
        bride={{
          role: "Cô Dâu",
          name: "Phương Thanh",
          address: "Đội 3, Tử Dương, Cao Thành, Ứng Hòa, Hà Nội",
        }}
      />

      <Section3
        invitation={{
          title: "Thư Mời",
          subtitle: "Bạn và Người thương",
          mainText: "THAM DỰ LỄ CƯỚI VĂN DUẨN & PHƯƠNG THANH",
          images: [
            "https://res.cloudinary.com/dpufemrnq/image/upload/v1761556620/DSC06496__2_i6p8ok.jpg",
            "https://res.cloudinary.com/dpufemrnq/image/upload/v1761556618/DSC06269__2_rari71.jpg",
            "https://res.cloudinary.com/dpufemrnq/image/upload/v1761556619/DSC06393__2_cvoqxb.jpg",
          ],
        }}
        events={[
          {
            title: "TIỆC CƯỚI NHÀ TRAI",
            dayOfWeek: "Thứ Bảy",
            time: "10:00",
            weddingDate: "08-11-2025",
            lunarDate: "Tức ngày 19 tháng 9 năm Ất Tỵ",
            locationName: "Tư Gia Nhà Trai",
            address: "Sân bóng đoàn thuyền, Vân Đình, Ứng Hòa, Hà Nội",
            mapCoords: { lat: 20.7375, lng: 105.7545 },
          },
          {
            title: "TIỆC CƯỚI NHÀ GÁI",
            dayOfWeek: "Thứ Bảy",
            time: "10:00",
            weddingDate: "08-11-2025",
            lunarDate: "Tức ngày 19 tháng 9 năm Ất Tỵ",
            locationName: "Tư Gia Nhà Gái",
            address: "Đội 3, Tử Dương, Cao Thành, Ứng Hòa, Hà Nội",
            mapCoords: { lat: 20.77004674066504, lng: 105.73100312319009 },
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
          time: "Vào Thứ bảy - 14:00",
          month: "Tháng 11",
          day: "08",
          year: "2025",
          lunarDate: "(Tức ngày 19 tháng 9 năm Ất Tỵ)",
        }}
        secondCeremony={{
          title: "LỄ RƯỚC DÂU",
          time: "Vào Chủ Nhật - 13:00",
          month: "Tháng 11",
          day: "08",
          year: "2025",
          lunarDate: "(Tức ngày 19 tháng 9 năm Ất Tỵ)",
        }}
      />

      <Section5
        monthTitle="THÁNG 11 - 2025"
        primaryDate="2025-11-08"
        secondaryDate="2025-11-07"
        countdownTarget="2025-11-08T18:00:00"
        eventStart="2025-11-08T18:00:00"
        eventEnd="2025-11-09T12:00:00"
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