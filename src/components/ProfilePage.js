// export const ProfilePage = () => `
// <div id="root">
//     <div class="bg-gray-100 min-h-screen flex justify-center">
//       <div class="max-w-md w-full">
//         <main class="p-4">
//           <div class="bg-white p-8 rounded-lg shadow-md">
//             <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
//               내 프로필
//             </h2>
//             <form id='profile-form'>
//               <div class="mb-4">
//                 <label
//                   for="username"
//                   class="block text-gray-700 text-sm font-bold mb-2"
//                   >사용자 이름</label
//                 >
//                 <input
//                   type="text"
//                   id="username"
//                   name="username"
//                   value=""
//                   class="w-full p-2 border rounded"
//                 />
//               </div>
//               <div class="mb-4">
//                 <label
//                   for="email"
//                   class="block text-gray-700 text-sm font-bold mb-2"
//                   >이메일</label
//                 >
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value=""
//                   class="w-full p-2 border rounded"
//                 />
//               </div>
//               <div class="mb-6">
//                 <label
//                   for="bio"
//                   class="block text-gray-700 text-sm font-bold mb-2"
//                   >자기소개</label
//                 >
//                 <textarea
//                   id="bio"
//                   name="bio"
//                   rows="4"
//                   class="w-full p-2 border rounded"
//                 ></textarea>
//               </div>
//               <button id='submit-btn'
//                 type="submit"
//                 class="w-full bg-blue-600 text-white p-2 rounded font-bold"
//               >
//                 프로필 업데이트
//               </button>
//             </form>
//           </div>
//         </main>
//       </div>
//     </div>
//   </div>
// `;

// // const renderProfile = () => {
// //   // document.body.innerHTML = ProfilePage();

// //   const form = document.querySelector("#profile-form");
// //   const name = document.querySelector("#username");
// //   const email = document.querySelector("#email");
// //   const bio = document.querySelector("#bio");

// //   const loginName = localStorage.getItem('username');

// //   if (loginName) {
// //     name.value = loginName;
// //   }

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     const username = name.value;
// //     const useremail = email.value;
// //     const userbio = bio.value;

// //     localStorage.setItem("username", username);
// //     localStorage.setItem("email", useremail);
// //     localStorage.setItem("bio", userbio);

// //     alert("프로필이 업데이트되었습니다.");
// //   };
// //   form.addEventListener("submit", handleSubmit);
// // };

// // document.addEventListener("DOMContentLoaded", renderProfile);

export const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  //   return `
  //     <main class="bg-gray-100 flex items-center justify-center min-h-screen">
  //       <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
  //         <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">프로필 페이지</h1>
  //         <form id="profile-form">
  //           <div class="mb-4">
  //             <label class="block text-gray-700">사용자 이름</label>
  //             <input type="text" id="profile-username" value="${user.username}" class="w-full p-2 border rounded" disabled>
  //           </div>
  //           <div class="mb-4">
  //             <label class="block text-gray-700">이메일</label>
  //             <input type="email" id="email" value="${user.email}" class="w-full p-2 border rounded">
  //           </div>
  //           <div class="mb-4">
  //             <label class="block text-gray-700">소개</label>
  //             <textarea id="bio" class="w-full p-2 border rounded">${user.bio}</textarea>
  //           </div>
  //           <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">저장</button>
  //         </form>
  //       </div>
  //     </main>
  //   `;
  // };

  // setTimeout(() => {
  //   const profileForm = document.getElementById('profile-form');
  //   profileForm.addEventListener('submit', (event) => {
  //     event.preventDefault();
  //     const email = document.getElementById('email').value;
  //     const bio = document.getElementById('bio').value;
  //     const user = JSON.parse(localStorage.getItem('user'));
  //     user.email = email;
  //     user.bio = bio;
  //     localStorage.setItem('user', JSON.stringify(user));
  //     alert('프로필이 저장되었습니다.');
  //   });
  // }, 0);

  const template = `
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">프로필 페이지</h1>
        <form id="profile-form">
          <div class="mb-4">
            <label class="block text-gray-700">사용자 이름</label>
            <input type="text" id="profile-username" value="${user.username}" class="w-full p-2 border rounded" disabled>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">이메일</label>
            <input type="email" id="profile-email" value="${user.email}" class="w-full p-2 border rounded">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">소개</label>
            <textarea id="bio" class="w-full p-2 border rounded">${user.bio}</textarea>
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">저장</button>
        </form>
      </div>
    </main>
  `;

  setTimeout(() => {
    const profileForm = document.getElementById("profile-form");
    if (profileForm) {
      profileForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = document.getElementById("profile-email").value;
        const bio = document.getElementById("bio").value;
        const user = JSON.parse(localStorage.getItem("user"));
        user.email = email;
        user.bio = bio;
        localStorage.setItem("user", JSON.stringify(user));
        alert("프로필이 저장되었습니다.");
      });
    }
  }, 0);

  return template;
};
