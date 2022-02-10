/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include "../my_printf.h"

int main() {

    void *ptr = (void *) 0x1234567;

    my_printf("%p", ptr); // "0x1234567"

    return 0;
}
