using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Android.App;
using Android.Content;
using Android.OS;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.Views.Animations;

using SpcAndroid.Utils;

namespace SpcAndroid.Activities
{
    [Activity(Label = "SPC", MainLauncher = true, NoHistory = true, Theme = "@style/android:Theme.Holo.Light.NoActionBar")]
    public class SplashActivity : Activity
    {
        private LinearLayout lnSplash;
        private ImageView imgSplash;

        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);
            SetContentView(Resource.Layout.Splash);

            LoginActivity login = new LoginActivity();
            CountDown countDown = new CountDown(5000, 5000, this, login);
            countDown.Start();

            startAnim();
        }

        public void startAnim()
        {
            Animation anim = AnimationUtils.LoadAnimation(this, Resource.Animation.alpha);
            anim.Reset();

            lnSplash = FindViewById<LinearLayout>(Resource.Id.lnSplash);
            lnSplash.ClearAnimation();
            lnSplash.StartAnimation(anim);

            anim = AnimationUtils.LoadAnimation(this, Resource.Animation.translate);
            anim.Reset();

            imgSplash = FindViewById<ImageView>(Resource.Id.imgSplash);
            imgSplash.ClearAnimation();
            imgSplash.StartAnimation(anim);
        }
    }
}