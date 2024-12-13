package com.example.clientservice;

import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/clients")
public class ClientController {

    private List<Client> clients = new ArrayList<>();

    @GetMapping
    public List<Client> getClients() {
        return clients;
    }

    @GetMapping("/{sharedKey}")
    public Client getClientBySharedKey(@PathVariable String sharedKey) {
        return clients.stream()
            .filter(client -> client.getSharedKey().equals(sharedKey))
            .findFirst()
            .orElse(null);
    }

    @PostMapping
    public Client createClient(@RequestBody Client client) {
        clients.add(client);
        return client;
    }
}
