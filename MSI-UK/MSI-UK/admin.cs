using System.ComponentModel.DataAnnotations;

namespace MSI_UK
{
    public class admin
    {
        [Key]
        public string username { get; set; }
        public string password { get; set; }
    }
}
