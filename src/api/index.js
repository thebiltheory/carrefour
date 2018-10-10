import Axios from "axios";

export async function getAuthentication(username, password) {
  let payload = {
    token: "P4N-uZpcEEXiyeGXrSo9Kg",
    data: {
      name: username,
      password: password,
      _repeat: 300
    }
  };
  try {
    const auth = await Axios({
      method: "post",
      url: "https://app.fakejson.com/q",
      data: payload
    });
    console.log(auth);
    return auth;
  } catch (e) {
    console.error("Couldn't connect!");
  }
}
