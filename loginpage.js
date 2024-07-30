<div class="login-container">
  <h1>Login</h1>
  <form onSubmit={submitHandler}>
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <button type="submit">Login</button>
  </form>
</div>
