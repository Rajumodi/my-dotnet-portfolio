var builder = WebApplication.CreateBuilder(args);
// ... your services, e.g. builder.Services.AddControllersWithViews();

var app = builder.Build();

// Enable default file mapping (index.html, etc.) and static files
app.UseDefaultFiles();    // Looks for wwwroot/index.html by default
app.UseStaticFiles();     // Serves files from wwwroot/

// Your existing routing/controllers
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}"
);

// If you need SPA fallback (e.g., for client‐side routing):
// app.MapFallbackToFile("index.html");

app.Run();
