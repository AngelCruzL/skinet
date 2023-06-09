using API.Errors;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BuggyController : BaseApiController
{
  private readonly StoreContext _context;

  public BuggyController(StoreContext context)
  {
    _context = context;
  }

  [HttpGet("notfound")]
  [ProducesResponseType(typeof(ApiResponse), 404)]
  public ActionResult GetNotFoundRequest()
  {
    var thing = _context.Products.Find(42);
    if (thing == null) return NotFound(new ApiResponse(404));

    return Ok();
  }

  [HttpGet("servererror")]
  [ProducesResponseType(typeof(ApiResponse), 500)]
  public ActionResult GetServerError()
  {
    var thing = _context.Products.Find(42);
    var thingToReturn = thing.ToString();
    return Ok();
  }

  [HttpGet("badrequest")]
  [ProducesResponseType(typeof(ApiResponse), 400)]
  public ActionResult GetBadRequest()
  {
    return BadRequest(new ApiResponse(400));
  }

  [HttpGet("badrequest/{id}")]
  [ProducesResponseType(typeof(ApiResponse), 400)]
  public ActionResult GetNotFoundRequest(int id)
  {
    return Ok();
  }
}