/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include "../my_printf.h"

int main() {

    void *ptr = (void *) 0x789;

    my_printf("%o %x %p", 0123, 0x456, ptr); // "123 456 0x789"

    return 0;
}
