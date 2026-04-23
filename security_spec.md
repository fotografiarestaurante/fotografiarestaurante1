# Security Specification - Fotografía de Restaurante

## Data Invariants
1. A **Comanda** must contain all required fields: `restaurante`, `responsable`, `instrucciones`, `language`, and `createdAt`.
2. `createdAt` must be the server time of the request.
3. No user (including the author) can read, update, or delete a comanda once sent. This is a one-way production flow.
4. Document IDs must be valid alphanumeric strings to prevent path injection.

## The "Dirty Dozen" Payloads (Expected: PERMISSION_DENIED)
1. **Empty Payload**: `{}` (Fails schema)
2. **Missing Field**: `{"restaurante": "Vila", "responsable": "Juan"}` (Missing instructions, lang, createdAt)
3. **Ghost Field Injection**: `{"restaurante": "Vila", ..., "isAdmin": true}` (Fails strict key count/size)
4. **Invalid Type**: `{"restaurante": 123, ...}` (Restaurante must be string)
5. **Malicious ID**: Document ID containing `../` or special chars (Fails `isValidId`)
6. **Time Spoofing**: `{"createdAt": "2020-01-01T00:00:00Z", ...}` (Must match `request.time`)
7. **Oversized String**: `{"instrucciones": "A".repeat(6000), ...}` (Max 5000 chars)
8. **Unauthorized Read**: Attempting to `get` or `list` the `/comandas` collection.
9. **Unauthorized Update**: Attempting to change a field in an existing comanda.
10. **Unauthorized Delete**: Attempting to remove a comanda.
11. **Shadow Identity**: Setting `ownerId` or similar field not in schema.
12. **Null Values**: `{"restaurante": null, ...}` (Fails type check)

## Test Analysis
All payloads above will be blocked by the `isValidComanda` and `isValidId` helpers, combined with the default-deny policy for non-create operations.
