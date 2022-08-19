using Microsoft.EntityFrameworkCore;

namespace MSI_UK.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options) { }
        public DbSet<admin> admins { get; set; }
        public DbSet<user> users { get; set; }
    }
}
