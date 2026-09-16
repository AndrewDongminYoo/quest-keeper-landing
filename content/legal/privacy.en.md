# Privacy Policy — TODO Slayer

> This is an English translation provided for convenience. In case of any discrepancy, the Korean version prevails.

**Effective date:** 2026-09-16
**Publisher:** donminzzi lab (the "Developer")
**Contact:** ydm2790@gmail.com

## 1. Summary

TODO Slayer (the "App") is a **local-first app** that stores the quest information you enter only on your device.
There are no accounts, logins, Developer servers, ads, or automatic analytics tools.
The App does not transmit usage information without your action.

The App communicates externally for **in-app purchases (Tip Jar)** and **usage report sharing**, which you must start each time (§5).
Usage Report Sharing prepares a JSON file that contains only aggregate information about onboarding experiments and reengagement.
The report is transmitted only after you choose the receiving app and recipient in the iOS share sheet.
Opening the About screen loads product information to display Tip Jar prices, so this communication occurs even if you do not make a purchase.
If a Tip Jar purchase is pending approval, such as Family Sharing approval, the App may also communicate when it launches to receive the purchase result.

## 2. Personal Information We Collect

The App does not automatically collect personal information such as your name, email, contacts, location, or advertising identifiers.
A usage report includes the app version, onboarding experiment assignment, aggregate counts by stage, completion, first-success, defer, reengagement, and repeat-completion rates, time to first value, weekly active installations, reporting period, reporting time zone, and data-quality information.
It does not include quest titles or descriptions, installation or quest identifiers, notification content, or individual action records.
The report does not contain direct identifiers, but the sharing app you choose may process account or transmission information separately.

## 3. Data Stored on Your Device

The following raw data is stored only on your device and in the App Group storage shared between the app and its widget.

- **Quest (to-do) data**: title, deadline, completion time, importance.
- **Usage event records**: records of actions such as app launches, quest creation, completion, retry-tomorrow, onboarding progress, and experiment exposure, together with their timestamps. Each record may include an installation identifier and related quest identifiers (UUIDs). These raw records are not transmitted externally. Only aggregate results with the identifiers removed can be shared by you through the process in §5.
- **App settings and experiment assignments**: local settings related to onboarding and retention.
- **Installation identifier**: a random UUID generated on your device when the app is installed. It is used only for local statistical distinction and never leaves your device.

The App and the home screen widget access this raw data through shared storage (App Group).
Neither the Developer nor any third party can access the raw data.

## 4. Notification Permission

The App uses only the device's **local notifications (UserNotifications)** for deadline and reminder alerts.
It does not use remote push (APNs), so no data is transmitted externally for notifications.
You can turn off notification permission at any time in iOS Settings, and the App's core features work even if you decline.

## 5. Optional External Communication, Analytics, Advertising, and In-App Purchases

The App contains **no** third-party analytics SDKs, ad networks, or cloud sync such as CloudKit.
The Developer operates no server, and the App does not automatically transmit or sell usage information.

### 5.1. In-App Purchases

The App offers optional purchases that support development.
These purchases do not affect game progress, and all features remain available without a purchase.

- The App **communicates with Apple's App Store** when you open the About screen or attempt a Tip Jar purchase. This communication loads the product list and prices and processes the purchase.
- **Apple processes the purchase in full.** The Developer does not receive or see your payment method, name, email address, or Apple Account information.
- The App verifies Apple's signature **on your device** to confirm that the transaction is valid. The App does not send receipts to a Developer server.
- The App does not store whether you made a Tip Jar purchase or the purchase amount.
- Apple collects any payment information processed during this transaction. [Apple's Privacy Policy](https://www.apple.com/legal/privacy/) applies.

### 5.2. Usage Report Sharing

- You must select "Share Usage Report" on the About screen, review what is included and excluded, and select "Continue to Share" before the iOS share sheet opens.
- The App prepares the aggregate report described in §2 on your device before it opens the share sheet.
- You choose the receiving app and recipient and can cancel sharing.
- To send the report to the Developer, you must select `ydm2790@gmail.com` as the recipient.
- If you cancel, the report is not transmitted and the local measurement data is not changed.
- The privacy policies of the sharing app and recipient service apply.

## 6. Data Retention and Deletion

- Data is kept on your device until you delete it or delete the App.
- Individual quests can be deleted within the App. However, **usage event records (§3) related to a quest are not deleted along with the quest** and remain in on-device storage.
- **Deleting the App** removes all related data from the device and App Group storage, including usage event records.
- If you send a usage report to the Developer, the Developer will delete the original file within 90 days of receipt after completing the aggregate analysis used to improve the App.
- The Developer may retain combined statistics that do not contain direct identifiers after deleting the original file.
- To request deletion of a report sent to the Developer, contact the Developer with the sender address, date sent, and file name.
- When the Developer receives a report, the Developer records the receipt date and deletion deadline and deletes the email and attachment within that period.

## 7. Children's Privacy

The App does not automatically collect personal information.
All users, including children, can use every core feature without sharing a usage report.

## 8. Changes to This Policy

If this policy changes, we will provide notice through app updates and this document's publication location, and update the effective date.

## 9. Contact

Privacy inquiries: ydm2790@gmail.com
