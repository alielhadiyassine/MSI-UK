using System.ComponentModel.DataAnnotations;

namespace MSI_UK
{
    public class user
    {
        [Key]
        public string username { get; set; }
        public string password { get; set; }
        public bool approved { get; set; }
        public string firstName { get; set; }
    }
}
