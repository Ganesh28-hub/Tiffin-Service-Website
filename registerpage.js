<div class="register-container">
  <h1>Register</h1>
  <form onSubmit={submitHandler}>
    <div class="form-group">
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
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
    <button type="submit">Register</button>
  </form>
</div>
