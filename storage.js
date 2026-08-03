const C01K14Storage = (() => {
  const KEY = "c01_kp14_profile_v1";

  function defaults(){
    return {
      name:"",
      id:"",
      avatar:"🧑‍💻",
      language:"ms",
      xp:50,
      coins:0,
      kp14Progress:0,
      scores:{},
      attempts:{},
      pendingAssessments:{},
      officialMarks:{},
      badges:["first-login"],
      updatedAt:new Date().toISOString()
    };
  }

  function getProfile(){
    try{
      const raw = localStorage.getItem(KEY);
      return raw ? {...defaults(), ...JSON.parse(raw)} : null;
    }catch(error){
      console.error(error);
      return null;
    }
  }

  function saveProfile(data){
    const current = getProfile() || defaults();
    const profile = {...current, ...data, updatedAt:new Date().toISOString()};
    localStorage.setItem(KEY, JSON.stringify(profile));
    sessionStorage.setItem("c01k14_session","active");
    return profile;
  }

  function requireProfile(){
    const p = getProfile();
    if(!p || !p.name || !p.id){
      location.href = location.pathname.includes("/kp/") || location.pathname.includes("/kt/")
        ? "../../login.html"
        : "login.html";
      throw new Error("Profil pelatih belum lengkap.");
    }
    return p;
  }

  return {getProfile, saveProfile, requireProfile};
})();