@RestController
@RequestMapping("/api/accounts")
public class AccountController {
    @GetMapping("/me")
    public Map<String, Object> me(Principal p){
        return Map.of("user", "demo@example.com", "accounts", List.of(
            Map.of("id", "chk-001", "type", "checking", "balance", 1250_00),
            Map.of("id", "sav-001", "type", "savings", "balance", 5400_00, "apy", "0.30%")
        ))
    };
}