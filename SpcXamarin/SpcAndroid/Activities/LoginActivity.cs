
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

using Android.App;
using Android.Content;
using Android.OS;
using Android.Runtime;
using Android.Views;
using Android.Widget;

namespace SpcAndroid.Activities
{
    [Activity(Label = "SPC", Theme = "@style/android:Theme.Holo.Light.NoActionBar")]
    public class LoginActivity : Activity
    {
        private Button btnSignUp;
        private EditText userName;
        private EditText password;
        private ProgressBar progressBar;

        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);
            SetContentView(Resource.Layout.Login);

            PrepareActionBar();

            userName = FindViewById<EditText>(Resource.Id.userName);
            password = FindViewById<EditText>(Resource.Id.password);
            btnSignUp = FindViewById<Button>(Resource.Id.login);
            progressBar = FindViewById<ProgressBar>(Resource.Id.progressBar1);

            userName.Text = "@sofrecom.com";

            btnSignUp.Click += OnSignUpComplete;
        }

        //http://cforbeginners.com/XamarinProjects.html
        public void OnSignUpComplete(object sender, EventArgs e)
        {

            progressBar.Visibility = ViewStates.Visible;
            Thread thread = new Thread(ActLikeARequest);
            thread.Start();


        }

        private void PrepareActionBar()
        {
            ActionBar.SetDisplayHomeAsUpEnabled(true);
        }

        private void ActLikeARequest()
        {
            Thread.Sleep(3000);

            RunOnUiThread(() => { progressBar.Visibility = ViewStates.Invisible; });
            int x = Resource.Animation.slide_right;
        }
    }
}
