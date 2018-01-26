using System;
namespace SpcCore
{
    public class Values
    {
        public static readonly string ApiUrl = "";
        public static readonly string DbName = "spcXamarinDb.db";

        /// <summary>
        /// Gets the db path.
        /// </summary>
        /// <returns>The db path.</returns>
        public static string GetDbPath()
        {
            string folder = System.Environment.GetFolderPath(System.Environment.SpecialFolder.Personal);
            return System.IO.Path.Combine(folder, DbName);
        }
    }
}
