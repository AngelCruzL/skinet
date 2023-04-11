using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
  private readonly IGenericRepository<ProductBrand> _productBrandRepository;
  private readonly IGenericRepository<Product> _productsRepository;
  private readonly IGenericRepository<ProductType> _productTypeRepository;

  public ProductsController(
    IGenericRepository<Product> productsRepository,
    IGenericRepository<ProductBrand> productBrandRepository,
    IGenericRepository<ProductType> productTypeRepository
  )
  {
    _productsRepository = productsRepository;
    _productBrandRepository = productBrandRepository;
    _productTypeRepository = productTypeRepository;
  }

  [HttpGet]
  public async Task<ActionResult<List<Product>>> GetProducts()
  {
    var spec = new ProductsWithTypesAndBrandsSpecification();
    var products = await _productsRepository.ListAsync(spec);

    return Ok(products);
  }

  [HttpGet("{id}")]
  public async Task<ActionResult<Product>> GetProduct(int id)
  {
    var spec = new ProductsWithTypesAndBrandsSpecification(id);
    return await _productsRepository.GetEntityWithSpec(spec);
  }

  [HttpGet("brands")]
  public async Task<ActionResult<IReadOnlyList<ProductBrand>>> GetProductBrands()
  {
    return Ok(await _productBrandRepository.ListAllAsync());
  }

  [HttpGet("types")]
  public async Task<ActionResult<IReadOnlyList<ProductType>>> GetProductTypes()
  {
    return Ok(await _productTypeRepository.ListAllAsync());
  }
}