using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
  private readonly StoreContext _context;

  public ProductsController(StoreContext context)
  {
    _context = context;
  }

  [HttpGet]
  public ActionResult<List<Product>> GetProducts()
  {
    return _context.Products.ToList();
  }

  [HttpGet("{id}")]
  public string GetProduct(int id)
  {
    return $"GetProducts {id}";
  }
}