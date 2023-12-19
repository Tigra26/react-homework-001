export const Profile = () => {

  return (
    <div class="profile">
    <div class="description">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
        alt="User avatar"
        class="avatar"
      />
      <p class="name">Jacques Gluke</p>
      <p class="tag">jgluke</p>
      <p class="location">Ocho Rios, Jamaica</p>
    </div>
  
    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">5603</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">4827</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">1308</span>
      </li>
    </ul>
  </div>
     
   
  );
};
