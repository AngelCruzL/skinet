namespace Core.Specifications;

public class ProductSpecParams
{
  private const int MaxPageSize = 50;

  private int _itemsPerPage = 6;
  private string _search;
  public int PageNumber { get; set; } = 1;

  public int ItemsPerPage
  {
    get => _itemsPerPage;
    set => _itemsPerPage = value > MaxPageSize ? MaxPageSize : value;
  }

  public int? BrandId { get; set; }
  public int? TypeId { get; set; }
  public string Sort { get; set; }

  public string Search
  {
    get => _search;
    set => _search = value.ToLower();
  }
}