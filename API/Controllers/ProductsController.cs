using API.Dtos;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
  private readonly IMapper _mapper;
  private readonly IGenericRepository<ProductBrand> _productBrandRepository;
  private readonly IGenericRepository<Product> _productsRepository;
  private readonly IGenericRepository<ProductType> _productTypeRepository;

  public ProductsController(
    IGenericRepository<Product> productsRepository,
    IGenericRepository<ProductBrand> productBrandRepository,
    IGenericRepository<ProductType> productTypeRepository,
    IMapper mapper
  )
  {
    _productsRepository = productsRepository;
    _productBrandRepository = productBrandRepository;
    _productTypeRepository = productTypeRepository;
    _mapper = mapper;
  }

  [HttpGet]
  public async Task<ActionResult<IReadOnlyList<ProductToReturnDto>>> GetProducts()
  {
    var spec = new ProductsWithTypesAndBrandsSpecification();
    var products = await _productsRepository.ListAsync(spec);

    return Ok(
      _mapper.Map<IReadOnlyList<Product>, IReadOnlyList<ProductToReturnDto>>(products)
    );
  }

  [HttpGet("{id}")]
  public async Task<ActionResult<ProductToReturnDto>> GetProduct(int id)
  {
    var spec = new ProductsWithTypesAndBrandsSpecification(id);
    var product = await _productsRepository.GetEntityWithSpec(spec);

    return _mapper.Map<Product, ProductToReturnDto>(product);
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