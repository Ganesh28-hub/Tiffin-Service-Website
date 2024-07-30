<div class="review-container">
  <h1>Leave a Review</h1>
  <form onSubmit={submitHandler}>
    <div class="form-group">
      <label for="rating">Rating</label>
      <select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
    <div class="form-group">
      <label for="review">Review</label>
      <textarea
        id="review"
        placeholder="Write your review here"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      ></textarea>
    </div>
    <button type="submit">Submit Review</button>
  </form>
</div>
