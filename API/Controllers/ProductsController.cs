using API.Dtos;
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
  public async Task<ActionResult<List<ProductToReturnDto>>> GetProducts()
  {
    var spec = new ProductsWithTypesAndBrandsSpecification();
    var products = await _productsRepository.ListAsync(spec);

    return products.Select(product => new ProductToReturnDto
    {
      Id = product.Id,
      Name = product.Name,
      Description = product.Description,
      PictureUrl = product.PictureUrl,
      Price = product.Price,
      ProductBrand = product.ProductBrand.Name,
      ProductType = product.ProductType.Name
    }).ToList();
  }

  [HttpGet("{id}")]
  public async Task<ActionResult<ProductToReturnDto>> GetProduct(int id)
  {
    var spec = new ProductsWithTypesAndBrandsSpecification(id);
    var product = await _productsRepository.GetEntityWithSpec(spec);

    return new ProductToReturnDto
    {
      Id = product.Id,
      Name = product.Name,
      Description = product.Description,
      PictureUrl = product.PictureUrl,
      Price = product.Price,
      ProductBrand = product.ProductBrand.Name,
      ProductType = product.ProductType.Name
    };
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