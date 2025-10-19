$("#messageState").on("change", () => {
  $(".message").removeClass("openNor closeNor");

  if ($("#messageState").is(":checked")) {
    // เปิดการ์ด
    $(".message").removeClass("closed no-anim").addClass("openNor");

    // ย้ายแพนด้าลง + ซ่อนแพนด้า และซ่อนข้อความ instruction
    $(".panda")
      .removeClass("closeHer openedHer no-anim")
      .addClass("openHer vanish");
    $(".instruction").addClass("vanish");

    $(".container").stop().animate({ backgroundColor: "#f48fb1" }, 2000);
  } else {
    // ปิดการ์ด
    $(".message").removeClass("no-anim").addClass("closeNor");

    // ให้แพนด้ากลับมา + แสดงข้อความ instruction
    $(".panda")
      .removeClass("openHer vanish")
      .addClass("closeHer");
    $(".instruction").removeClass("vanish");

    $(".container").stop().animate({ backgroundImage: URL("") }, 2000);
  }
});

$(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
  if ($(".message").hasClass("closeNor")) $(".message").addClass("closed");
  $(".message").removeClass("openNor closeNor").addClass("no-anim");
});

$(".panda").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
  if (!$(".panda").hasClass("closeHer")) {
    $(".panda").addClass("openedHer");        // เปิดเสร็จแล้วยังถูกซ่อนด้วย .vanish
  } else {
    $(".panda").removeClass("openedHer vanish").addClass("no-anim"); // กลับมาเห็นตอนปิด
  }
  $(".panda").removeClass("openHer closeHer");
});
