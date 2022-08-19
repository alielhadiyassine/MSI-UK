using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MSI_UK;
using MSI_UK.Data;

namespace MSI_UK.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class adminsController : ControllerBase
    {
        private readonly DataContext _context;

        public adminsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/admins
        [HttpGet]
        public async Task<ActionResult<IEnumerable<admin>>> Getadmins()
        {
          if (_context.admins == null)
          {
              return NotFound();
          }
            return await _context.admins.ToListAsync();
        }

        // GET: api/admins/5
        [HttpGet("{id}")]
        public async Task<ActionResult<admin>> Getadmin(string id)
        {
          if (_context.admins == null)
          {
              return NotFound();
          }
            var admin = await _context.admins.FindAsync(id);

            if (admin == null)
            {
                return NotFound();
            }

            return admin;
        }

        // PUT: api/admins/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> Putadmin(string id, admin admin)
        {
            if (id != admin.username)
            {
                return BadRequest();
            }

            _context.Entry(admin).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!adminExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/admins
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<admin>> Postadmin(admin admin)
        {
          if (_context.admins == null)
          {
              return Problem("Entity set 'DataContext.admins'  is null.");
          }
            _context.admins.Add(admin);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (adminExists(admin.username))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("Getadmin", new { id = admin.username }, admin);
        }

        // DELETE: api/admins/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Deleteadmin(string id)
        {
            if (_context.admins == null)
            {
                return NotFound();
            }
            var admin = await _context.admins.FindAsync(id);
            if (admin == null)
            {
                return NotFound();
            }

            _context.admins.Remove(admin);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool adminExists(string id)
        {
            return (_context.admins?.Any(e => e.username == id)).GetValueOrDefault();
        }
    }
}
