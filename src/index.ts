import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
	onNeedRefresh() {},
	onOfflineReady() {
		console.log('Offline ready');
	},
});

updateSW();

const loginSubmitBtn = document.getElementById("login-submit-btn")
if(loginSubmitBtn)
{
	// Add user handling logic here
  loginSubmitBtn.onclick = () => {
		
    location.href=import.meta.env.PUBLIC_HOME_ROUTE
  };
}
