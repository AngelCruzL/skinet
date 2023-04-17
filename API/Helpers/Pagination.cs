namespace API.Helpers;

public class Pagination<T> where T : class
{
  public Pagination(int pageNumber, int itemsPerPage, int count, IReadOnlyList<T> data)
  {
    PageNumber = pageNumber;
    ItemsPerPage = itemsPerPage;
    Count = count;
    Data = data;
  }

  public int PageNumber { get; set; }
  public int ItemsPerPage { get; set; }
  public int Count { get; set; }
  public IReadOnlyList<T> Data { get; set; }
}