# Privacy Policy — TODO Slayer

> This is an English translation provided for convenience. In case of any discrepancy, the Korean version prevails.

**Effective date:** 2026-07-25
**Publisher:** donminzzi lab (the "Developer")
**Contact:** ydm2790@gmail.com

## 1. Summary

TODO Slayer (the "App") is a **local-first app**.
The App does **not collect or transmit any personal information.**
There are no accounts, no logins, no Developer servers, no ads, and no analytics tools.
All data you enter is stored only on your device.

The App communicates externally only for its **in-app purchase (Tip Jar)** feature, and it communicates only with Apple's App Store (§5).
Opening the About screen loads product information to display Tip Jar prices, so this communication occurs even if you do not make a purchase.
If a Tip Jar purchase is pending approval, such as Family Sharing approval, the App may also communicate when it launches to receive the purchase result.
The App does not use the network if you have never attempted a Tip Jar purchase or opened the About screen.

## 2. Personal Information We Collect

**None.**
The App does not collect any personal information such as your name, email, contacts, location, or advertising identifiers.
Under Apple's App Privacy standards, the App qualifies as **"Data Not Collected."**

## 3. Data Stored on Your Device

The following data is stored only on your device (and in the App Group storage shared between the app and its widget) and is never transmitted externally.

- **Quest (to-do) data**: title, deadline, completion time, importance.
- **Usage event records**: records of actions such as app launches, quest creation/completion/retry-tomorrow, onboarding progress, and experiment exposure, together with their timestamps. Each record may include an installation identifier and related quest identifiers (UUIDs). These are on-device statistics used to improve the app experience and are never transmitted externally.
- **App settings and experiment assignments**: local settings related to onboarding and retention.
- **Installation identifier**: a random UUID generated on your device when the app is installed. It is used only for local statistical distinction and never leaves your device.

This data is not sent to any server and is not shared with third parties. The app and the home screen widget access this data through shared storage (App Group), but neither the Developer nor any third party can access or receive it.

## 4. Notification Permission

The App uses only the device's **local notifications (UserNotifications)** for deadline and reminder alerts.
It does not use remote push (APNs), so no data is transmitted externally for notifications.
You can turn off notification permission at any time in iOS Settings, and the App's core features work even if you decline.

## 5. Third Parties, Analytics, Advertising, and In-App Purchases

The App contains **no** third-party analytics SDKs, ad networks, or cloud sync such as CloudKit.
The Developer operates no server, and no data is provided to or sold to third parties.

**The in-app purchase (Tip Jar) is the only exception.** The App offers optional purchases that support development. These purchases do not affect game progress, and all features remain available without a purchase.

- The App **communicates with Apple's App Store** when you open the About screen or attempt a Tip Jar purchase. This communication loads the product list and prices and processes the purchase.
- **Apple processes the purchase in full.** The Developer does not receive or see your payment method, name, email address, or Apple Account information.
- The App verifies Apple's signature **on your device** to confirm that the transaction is valid. The App does not send receipts to a Developer server.
- The App does not store whether you made a Tip Jar purchase or the purchase amount.
- Apple collects any payment information processed during this transaction. [Apple's Privacy Policy](https://www.apple.com/legal/privacy/) applies.

## 6. Data Retention and Deletion

- Data is kept on your device until you delete it or delete the App.
- Individual quests can be deleted within the App. However, **usage event records (§3) related to a quest are not deleted along with the quest** and remain in on-device storage.
- **Deleting the App** removes all related data from the device and App Group storage, including usage event records.
- Because the App stores its data only on your device, the Developer cannot access your data, and no separate deletion-request process is required.

## 7. Children's Privacy

The App does not collect personal information and therefore does not collect personal information from children.

## 8. Changes to This Policy

If this policy changes, we will provide notice through app updates and this document's publication location, and update the effective date.

## 9. Contact

Privacy inquiries: ydm2790@gmail.com
